/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

function toInt(s) {
  const n = String(s || "").replace(/[^\d]/g, "");
  return n ? parseInt(n, 10) : null;
}

function slugKey(label) {
  return String(label || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchHtmlWithRetries(url, maxTries = 4) {
  let lastErr = null;
  for (let i = 1; i <= maxTries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });

      const text = await res.text().catch(() => "");
      if (!res.ok) {
        // Include status + a short snippet; this is useful for diagnosing blocks/captcha pages.
        throw new Error(`HTTP ${res.status} ${res.statusText}\n${text.slice(0, 300)}`);
      }
      return text;
    } catch (e) {
      lastErr = e;
      const backoff = 2000 * i;
      console.warn(`Fetch attempt ${i}/${maxTries} failed: ${e.message}`);
      if (i < maxTries) await sleep(backoff);
    }
  }
  throw lastErr;
}

(async () => {
  const scholarId = process.env.GOOGLE_SCHOLAR_ID || "T6pswigAAAAJ";
  const profileUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en&oi=ao`;

  const html = await fetchHtmlWithRetries(profileUrl, 4);
  const $ = load(html);

  const table = $("#gsc_rsb_st");
  if (!table.length) {
    console.error("Could not find stats table (#gsc_rsb_st).");
    console.error("First ~500 chars of HTML:");
    console.error(html.slice(0, 500));
    throw new Error("Scholar page layout not detected (blocked/captcha/layout change).");
  }

  const ths = table
    .find("thead th")
    .map((_, el) => $(el).text().trim())
    .get();
  const sinceLabel = ths.find((t) => /\d{4}/.test(t)) || null;
  const sinceYear = sinceLabel ? toInt(sinceLabel.match(/\d{4}/)?.[0]) : null;

  const rows = {};
  table.find("tbody tr").each((_, tr) => {
    const cells = $(tr)
      .find("td,th")
      .map((__, td) => $(td).text().trim())
      .get();
    if (cells.length >= 3) {
      const key = slugKey(cells[0]);
      rows[key] = { all: toInt(cells[1]), since: toInt(cells[2]) };
    }
  });

  const out = {
    citations_all: rows.citations?.all ?? null,
    citations_since: rows.citations?.since ?? null,
    h_index_all: rows.h_index?.all ?? null,
    h_index_since: rows.h_index?.since ?? null,
    i10_index_all: rows.i10_index?.all ?? null,
    i10_index_since: rows.i10_index?.since ?? null,
    since_year: sinceYear,
    updated_utc: new Date().toISOString(),
    profile_url: `https://scholar.google.com/citations?user=${scholarId}&hl=en&oi=ao`,
  };

  const outPath = path.join(process.cwd(), "_data", "scholar_stats.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");

  console.log("Wrote:", outPath);
  console.log(out);
})().catch((err) => {
  // Option 1: fail-open when Google Scholar blocks us (e.g., HTTP 403 "Sorry..." page).
  // Keep the last successful _data/scholar_stats.json and exit 0 so the workflow doesn't fail.
  const msg = String(err?.message || err);
  const outPath = path.join(process.cwd(), "_data", "scholar_stats.json");

  if (msg.includes("HTTP 403")) {
    if (fs.existsSync(outPath)) {
      console.warn(
        "Google Scholar blocked this run (HTTP 403). Keeping existing _data/scholar_stats.json and exiting successfully."
      );
      process.exit(0);
    } else {
      console.error(
        "Google Scholar blocked this run (HTTP 403) and no existing _data/scholar_stats.json was found."
      );
      console.error(err);
      process.exit(1);
    }
  }

  console.error(err);
  process.exit(1);
});
