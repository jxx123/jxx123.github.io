---
layout: default
title: Jinyu Xie
---

I am a Research Engineer in the Google DeepMind working on Gemini Robotics models to make them fast adaptable to unseen tasks and unseen embodiments. Before Google DeepMind, I worked on Google Search Ranking algorithms for 4 years.

---

## Writing

<div class="featured">
  <div class="featured-eyebrow">Latest essay &middot; two parts</div>
  <div class="featured-title"><a href="/blog/menos-paradox-true-opinion/">Meno&rsquo;s Paradox &mdash; Your Robot&rsquo;s Success Rate Is Just a &ldquo;True&rdquo; OPINION</a></div>
  <div class="featured-desc">Plato separated true opinion from knowledge 2,400 years ago. A success rate measures the first and cannot see the second. On the <i>Meno</i>, a dishwasher basket that lost its forks, and five tethers for evaluating robot policies. Part two, <a href="/blog/three-sources-of-knowledge/">Three Sources of Knowledge</a>, takes up the training half.</div>
  <div class="featured-cta">Read part one <span class="arrow">&rarr;</span></div>
</div>

<div class="all-writing"><a href="/blog/">All writing &rarr;</a></div>

---

## Selected Work at Google

### Gemini Robotics On-Device 2 — Fast Adaptation to Unseen Embodiments

<div class="entry-meta">
  <span class="badge badge-new">New</span>
  <a href="https://deepmind.google/models/model-cards/gemini-robotics-on-device-2/" target="_blank">Model card</a>
  &middot;
  <a href="https://x.com/GoogleDeepMind/status/2082844165570798071?s=20" target="_blank">Announcement</a>
</div>

Fast adaptation of Gemini Robotics On-Device 2 to embodiments the model has never seen. With roughly two hours of task data per embodiment, GRODv2 reaches 53.3% on SO101 and 75.6% on Dexmate, against 6.7% and 33.3% for GRODv1 — and on SO101 the v1 curve is flat, so the gain is adaptation speed rather than a better starting point. More in [my thread](https://x.com/xjygr08/status/2083020146319167851?s=20){:target="_blank"}.

![GRODv2 vs GRODv1 fast-adaptation success rate on SO101 and Dexmate](/assets/img/about/grod2_fast_adaptation.png)

<div class="video-wrapper">
  <video controls preload="metadata" playsinline poster="">
    <source src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/MVCfTE-4h3AwDVPZ/gdm_robotics_six-grid_270726.webm#t=0.1" type="video/webm">
  </video>
</div>

### CLIFT — Turning Gemini Robotics On-Device into Humanoid Specialists

<div class="entry-meta">
  <span class="badge">CoRL 2026</span>
  <a href="https://www.alphaxiv.org/abs/2607.29172" target="_blank">Paper</a>
</div>

Non-invasive closed-loop iterative fine-tuning: adapting a closed-weight robot foundation model into a humanoid specialist through a managed fine-tuning API, with no access to weights, gradients, or training internals. Across box packing, cup insertion and bimanual plate handover, the same procedure lifts Gemini Robotics On-Device considerably further than it lifts &pi;<sub>0.5</sub> — the loop compounds on the stronger prior rather than closing the gap to it.

Why I like it, from [my thread](https://x.com/xjygr08/status/2084432234514383090?s=20){:target="_blank"}:

> This is the type of RL I love. No Dagger, no policy gradient, no reward collapse. A well-calibrated VLM critic to label the rollout data, a careful conditioning in the text prompt and a SFT API will do the trick.

<div class="entry-authors">Yuxin Chen, Hari Srikanth, Nathan Jew, Menglin Wu, Pengcheng Wang, Junli Ren, Masayoshi Tomizuka, Peng Xu, <b>Jinyu Xie</b>, Thomas Tian</div>

### Few-Shot Adaptation Finetuning — Gemini Robotics

Few shot adaptation finetuning experiments (Fig. 26) in the Gemini Robotics Technical Report.

[Paper (arXiv)](https://arxiv.org/pdf/2503.20020){:target="_blank"}

![Gemini Robotics Tech Report Fig. 26](/assets/img/about/gemini_robotics_tech_report_fig26.png)

### Gemini Robotics On-Device

Built the finetuning service and SDK for [Gemini Robotics On-Device](https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/){:target="_blank"} for Trusted Testers ([GitHub SDK](https://github.com/google-deepmind/gemini-robotics-sdk){:target="_blank"}). Demo videos below (edited by me):

<div class="video-grid">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/93jUeBHkBO4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/nVMY3-kWhOc" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/p13niftoaQE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
</div>

### Topic-Authority Ranking — Google Search

Developed the [Topic-Authority](https://developers.google.com/search/blog/2023/05/understanding-news-topic-authority){:target="_blank"}-based ranking algorithm for Google Search.

---

## Open-Source Tools

I love building tools. Whenever I find there are no tools that fit my use case nicely, I start building my own.

<div class="tool-card">
  <div class="tool-icon">🔄</div>
  <div class="tool-info">
    <div class="tool-name"><a href="https://github.com/LoopMind-AI/loopquest" target="_blank">loopquest</a></div>
    <div class="tool-desc">A MLOps Web App for Embodied AI evaluation. I use it heavily for my offline reinforcement learning workflows, and I host it on the cloud for others to use as well.</div>
    <span class="tool-tag">Web App</span>
  </div>
</div>

<div class="tool-card">
  <div class="tool-icon">💉</div>
  <div class="tool-info">
    <div class="tool-name"><a href="https://github.com/jxx123/simglucose" target="_blank">simglucose</a></div>
    <div class="tool-desc">A Type-1 Diabetes Simulator with OpenAI Gym interface — the most popular open-source type-1 diabetes simulator. <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=simglucose&btnG=" target="_blank">[Google Scholar]</a></div>
    <span class="tool-tag">Python</span>
  </div>
</div>

<div class="tool-card">
  <div class="tool-icon">📈</div>
  <div class="tool-info">
    <div class="tool-name"><a href="https://github.com/jxx123/fireTS" target="_blank">fireTS</a></div>
    <div class="tool-desc">A multi-variate time series prediction library. Similar to <a href="https://www.mathworks.com/help/ident/ref/arx.html" target="_blank">Matlab's System Identification Toolbox</a>, but connects with <code>sklearn</code>, <code>pytorch</code>, and more.</div>
    <span class="tool-tag">Python</span>
  </div>
</div>
