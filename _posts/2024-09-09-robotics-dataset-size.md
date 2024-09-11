---
title: Robotics Dataset Problems
tags: robotics
date: 2024-09-07
categories: [Notes, Robotics, MachineLearning]
math: true
mermaid: true
---

# Scale and Time Cost

RT-1: 17 months, 13 robots, 130k Episodes over 700 tasks

PaLM model has 780B tokens. Assuming 100 robots that produce one action token at 30 Hz for each robot, then the 100 robot can produce 3000 token per sec. To get 780B tokens, we need 780B / 3000 / 3600 / 24 / 265 = 82 years.
