---
layout: archive
title: "News"
permalink: /news/
author_profile: true
entries_layout: list
classes: wide
---

{% assign news_posts = site.categories.news | sort: "date" | reverse %}

{% if news_posts and news_posts.size > 0 %}
  {% for post in news_posts %}
    {% include archive-single.html type="list" %}
  {% endfor %}
{% else %}
  No news posts yet.
{% endif %}
