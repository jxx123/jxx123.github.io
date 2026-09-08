---
layout: default
title: Writing — Jinyu Xie
permalink: /blog/
---

## Writing

Notes on robot learning, evaluation, and the occasional 2,400-year-old detour.

<div class="post-list">
{% for post in site.posts %}
  <div class="post-item">
    <div class="post-item-date">{{ post.date | date: "%B %-d, %Y" }}</div>
    <div class="post-item-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    {% if post.subtitle or post.description %}<div class="post-item-desc">{{ post.subtitle | default: post.description }}</div>{% endif %}
  </div>
{% endfor %}
</div>

<style>
  .post-list { margin-top: 20px; }
  .post-item {
    padding: 18px 0;
    border-bottom: 1px solid var(--border);
  }
  .post-item:last-child { border-bottom: none; }
  .post-item-date {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .post-item-title {
    font-size: 1.08rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 5px;
  }
  .post-item-title a { color: var(--text-primary); }
  .post-item-title a:hover { color: var(--accent); text-decoration: none; }
  .post-item-desc {
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
</style>
