---
layout: archive
title: "News"
permalink: /news/
author_profile: true
entries_layout: list
classes: wide
---

{% assign news_posts = site.posts | where_exp: "p", "p.categories contains 'news'" | sort: "date" | reverse %}

{% if news_posts and news_posts.size > 0 %}
  {% for post in news_posts %}
    {% include archive-single.html type=page.entries_layout post=post %}
  {% endfor %}
{% else %}
  <p>No news posts yet.</p>
{% endif %}
