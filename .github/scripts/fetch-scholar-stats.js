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

async function fetchHtml(url) {
  // Minimal “browser-like” headers help reduce blocking (still not guaranteed).
  // Similar approach is commonly used in Scholar-scraping workflows. :contentReference[oaicite:1]{index=1}
  const res = await fetch(url, {
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Fetch failed (${res.status}) ${res.statusText}\n${text.slice(0, 300)}`);
  }
  return res.text();
}

(async () => {
  const scholarId = process.env.GOOGLE_SCHOLAR_ID || "T6pswigAAAAJ";
  const profileUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en`;

  const html = await fetchHtml(profileUrl);
  const $ = load(html);

  // Stats table
  const table = $("#gsc_rsb_st");
  if (!table.length) {
    throw new Error("Could not find Scholar stats table (#gsc_rsb_st). Page layout may have changed or access was blocked.");
  }

  // Try to extract “Since YYYY” header (varies by year).
  const ths = table.find("thead th").map((_, el) => $(el).text().trim()).get();
  const sinceLabel = ths.find(t => /\d{4}/.test(t)) || null;
  const sinceYear = sinceLabel ? toInt(sinceLabel.match(/\d{4}/)?.[0]) : null;

  const rows = {};
  table.find("tbody tr").each((_, tr) => {
    const cells = $(tr).find("td,th").map((__, td) => $(td).text().trim()).get();
    if (cells.length >= 3) {
      const key = slugKey(cells[0]);
      rows[key] = {
        all: toInt(cells[1]),
        since: toInt(cells[2])
      };
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
    profile_url: `https://scholar.google.com/citations?user=${scholarId}&hl=en&oi=ao`
  };

  const outPath = path.join(process.cwd(), "_data", "scholar_stats.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");

  console.log("Wrote:", outPath);
  console.log(out);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
