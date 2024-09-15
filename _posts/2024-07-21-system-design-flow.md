---
title: System Design Template
tags: interview
date: 2024-07-21
categories: [Notes]
math: true
mermaid: true
---


- Requirements
  - Functional Requirements
    - What do we want to achieve?
  - Non-Functional Requirements
    - Scale, qps
    - Read heavy or write heavy
    - availability? or consistency?
    - security?

- Come up with high-level design
  - Finish the functionality
  - Consider if async producer-consumer pattern is necessary (like introducing message queues)

- Identify the single failure point
  - Consider adding horizontal scaling tricks, load balance with multiple servers, database sharding and replicates
  - add cache, consider CDN
  - consider hotspot, some area has more requests than others etc.
