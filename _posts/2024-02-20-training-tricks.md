---
title: Deep Learning Training Tricks
tags: machine_learning
date: 2024-02-17
categories: [Notes, MachineLearning]
math: true
mermaid: true
---

# Intro

Here is a blog to summarize all the deep learning training tricks I encountered these days.

# AdamW Optimizer

"W" means weight decay, which is the same concept of weight decay in L2 regularization. AdamW is proposed to do weight decay that is decoupled with the regular Adam optimizer, that involves first and second order of gradient information.

# Learning Rate Schedule

## Warmup

Learning rate increases from 0 to the desired rate linearly during the warm up iterations.

## Learning Rate Decay

Here is [a paper on Cosine shape decay (and restart)](https://arxiv.org/pdf/1608.03983.pdf).

## Restarts

The above paper also mentioned restart.
