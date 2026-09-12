---
layout: post
title: "Three Sources of Knowledge — and the Two Axes We Aren't Scaling"
description: "闻 heard, 说 inferred, 亲 lived. The Mohists classified knowledge by where it came from, and the taxonomy maps onto a robot training stack — one axis scaled hard, two barely started. Part two of two."
authors: "Jinyu Xie and Claude"
reading_time: "16 min read"
date: 2026-09-08
---

*This is part two. [Part one](/blog/menos-paradox-true-opinion/) opened on a robot that carried a cutlery basket out of a dishwasher on a single finger, let the forks slide onto the floor halfway across the room, and finished its learned trajectory without registering that anything had happened. By way of Plato's* Meno*, it argued that a success rate measures* true opinion *— correct today, gone the moment anything you didn't name in the demo changes — rather than knowledge, which stays put because it comes with an account of why it is true. It proposed five tethers — Stability, Transfer, Recovery, Foresight, Humility — for telling the two apart, and answered Meno's paradox (you cannot search for what you don't know, because you wouldn't recognize it if you found it) with **calibration**: a policy can't know the right action in a novel state, but it can know that this state is one where its own confidence is low, and ask.*

*Its model case is Socrates' untaught slave boy, asked to double the area of a square drawn in the dirt. He answers confidently and wrongly — double the side — sees that the square he drew is four times the original, tries again, fails again, and admits he doesn't know. Only then is he shown the square built on the diagonal, and he can count for himself that it's right. Part one closed with three moves on measurement. This post is the other half: what you actually feed a policy so the tethers have something to hold.*

## Where a policy's content comes from

Calibration tells a policy where its knowledge stops. It says nothing about how the knowledge got there — and for the slave boy, that is the more interesting question. He had never studied geometry. So where did his answers come from at all, the wrong ones included? Something in him was already equipped to have opinions about area before anybody asked him one.

Plato's answer is that nothing came from anywhere. The knowledge was always in the boy; Socrates only drew it out. Learning is extraction, not insertion — and it is a beautiful answer that is no use to us whatever, because it helps itself to the soul. Nobody hands us a prior that is already there and merely needs reminding. **We have to build the soul first.** Which turns the question into an engineering one: what do we build it out of?

The Mohists in China, working the same centuries, asked precisely that — not where knowledge ultimately originates, but by which *route* a given piece of it arrived, and whether the route decides if it stays put. Two traditions on the same seam, and the Mohist answer maps onto our training stack with a precision I find hard to dismiss as coincidence.

## 闻 heard, 说 inferred, 亲 lived

The 《墨经》 classifies knowledge by **where it came from**: 闻 *wén*, what you were told; 说 *shuō*, what you worked out by inference — the thinking axis; 亲 *qīn*, what you came to know by direct personal contact with the thing.

One caveat, because the line looks blurrier than it is. You could fairly argue that a teleop log, or a recording from a UMI-style handheld gripper rig — a robot end-effector on a stick — is *experience* rather than somebody else's testimony: the trajectory is in the robot's own action space, and the forces are the ones its body would have felt. First-person in every sensorimotor sense.

What makes it 闻 anyway is not sensor fidelity. It is that the robot did not choose it, did not act it, and cannot ask it a follow-up. **亲 is defined by agency, not by resolution.** And the difference bites: a policy that chooses its own actions finds out where *its own* errors lie, while a demonstration only ever shows the path an expert already selected. That is why behaviour cloning compounds error, and most of why DAgger — which repeatedly sends the expert back to label the states the policy itself wandered into — exists. In a demonstration the human is doing the exploring on the robot's behalf — and whether that transfers depends entirely on how well a person can guess what a policy doesn't know.

| 闻 *wén* — testimony | 说 *shuō* — inference | 亲 *qīn* — direct experience |
|---|---|---|
| What someone else recorded | What you derive from what you hold | What you learn by touching it yourself |
| **The pretraining corpus.** Demos, captions, teleop logs — mostly other people's hands. | **Thinking.** Search, planning, world-model rollouts. Foresight lives here. | **Experience.** Acting, failing, recovering, in the actual world. Recovery lives here. |
| The axis we have poured a decade into | Barely scaled | Barely scaled |

<figure class="figure">
<svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three axes of scaling: testimony long, inference and direct experience are stubs">
  <defs>
    <marker id="ar-ax" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="14" refX="14" refY="7" orient="auto">
      <path d="M0,0 L14,7 L0,14 Z" fill="#2563eb"/>
    </marker>
    <marker id="ar-ax2" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="14" refX="14" refY="7" orient="auto">
      <path d="M0,0 L14,7 L0,14 Z" fill="#b45309"/>
    </marker>
  </defs>

  <!-- origin -->
  <circle cx="290" cy="230" r="5" fill="#1a1a1a"/>

  <!-- 闻 axis: long, to the right -->
  <line x1="290" y1="230" x2="800" y2="230" stroke="#2563eb" stroke-width="3.5" marker-end="url(#ar-ax)"/>
  <text x="545" y="220" text-anchor="middle" font-size="19" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">&#38395; <tspan font-size="14">w&#233;n</tspan></text>
  <text x="545" y="252" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">testimony &#8212; pretraining corpus</text>
  <text x="545" y="272" text-anchor="middle" font-size="12" font-weight="600" fill="#2563eb" font-family="-apple-system, sans-serif">a decade of scaling</text>

  <!-- 说 axis: up, short -->
  <line x1="290" y1="230" x2="290" y2="130" stroke="#b45309" stroke-width="3.5" marker-end="url(#ar-ax2)"/>
  <text x="272" y="110" text-anchor="middle" font-size="19" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">&#35828; <tspan font-size="14">shu&#333;</tspan></text>
  <text x="272" y="86" text-anchor="middle" font-size="12.5" fill="#555" font-family="-apple-system, sans-serif">inference &#8212; thinking</text>
  <text x="272" y="66" text-anchor="middle" font-size="12" font-weight="600" fill="#b45309" font-family="-apple-system, sans-serif">barely started</text>

  <!-- 亲 axis: down-left, short -->
  <line x1="290" y1="230" x2="180" y2="306" stroke="#b45309" stroke-width="3.5" marker-end="url(#ar-ax2)"/>
  <text x="120" y="300" text-anchor="middle" font-size="19" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">&#20146; <tspan font-size="14">q&#299;n</tspan></text>
  <text x="120" y="322" text-anchor="middle" font-size="12.5" fill="#555" font-family="-apple-system, sans-serif">experience &#8212; acting</text>
  <text x="120" y="256" text-anchor="middle" font-size="12" font-weight="600" fill="#b45309" font-family="-apple-system, sans-serif">barely started</text>

  <text x="600" y="60" text-anchor="middle" font-size="13.5" fill="#555" font-family="-apple-system, sans-serif">We have been scaling one axis and calling the result</text>
  <text x="600" y="80" text-anchor="middle" font-size="13.5" fill="#555" font-family="-apple-system, sans-serif">general capability. 闻 alone yields excellent<tspan font-style="italic" font-weight="600"> &#8212; opinions.</tspan></text>
</svg>
<figcaption><b>Fig 1 &middot; Three sources, one axis scaled.</b> 闻 is not bounded by how much teleop anyone can afford &#8212; glasses, gripper rigs and video are 闻 too. 说 and 亲 are bounded by nothing but our willingness to build them.</figcaption>
</figure>

Read that as a roadmap and the conclusion is uncomfortable. We have spent the decade scaling 闻 — more data, more demos, more logs — and 闻 is *precisely the source that produces true opinion.* It is testimony: the road to Larissa described accurately by someone who has never walked it. It will get you there, and it will not stay. The other two axes are barely scaled at all, and they are where two of the three tethers that rollout was missing actually live — 说 (thinking) is Foresight, 亲 (experience) is Recovery. The third it lacked, Humility, turns out to decide where you spend the other two; that comes below. Scaling data alone cannot produce *epistēmē* — knowledge that stays put because it comes with an account of why it is true — because *epistēmē* is not made of testimony.

<figure class="figure">
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three panels: pretraining scatters points; thinking connects them into a reachable region; experience adds new points at the boundary">
  <defs><marker id="sp-ar" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#b45309"/></marker></defs>
  <line x1="302" y1="40" x2="302" y2="296" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="597" y1="40" x2="597" y2="296" stroke="#e5e7eb" stroke-width="1"/>
  <text x="155" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1a1a1a" letter-spacing="1" font-family="-apple-system, sans-serif">闻 &middot; PRETRAINING</text>
  <circle cx="147.8" cy="164.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="177.2" cy="180.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="197.0" cy="184.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="144.7" cy="171.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="200.3" cy="188.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="165.1" cy="177.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="212.3" cy="216.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="161.9" cy="203.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="82.7" cy="142.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="87.9" cy="211.8" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="164.3" cy="163.0" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="154.5" cy="173.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="149.6" cy="182.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="162.7" cy="158.4" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="137.7" cy="155.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="114.8" cy="204.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="170.5" cy="176.8" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="156.4" cy="175.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="146.5" cy="187.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="115.3" cy="153.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="165.7" cy="142.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="151.3" cy="163.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="152.7" cy="171.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="199.7" cy="137.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="160.1" cy="171.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="184.1" cy="192.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <text x="155" y="312" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">points, wherever someone recorded one</text>
  <text x="450" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1a1a1a" letter-spacing="1" font-family="-apple-system, sans-serif">+ 说 &middot; THINKING</text>
  <polygon points="377.7,142.2 494.7,137.1 507.3,216.2 382.9,211.8" fill="#2563eb" fill-opacity="0.13"/>
  <line x1="460.7" y1="142.6" x2="494.7" y2="137.1" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="495.3" y1="188.7" x2="507.3" y2="216.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="446.3" y1="163.2" x2="447.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="432.7" y1="155.9" x2="410.3" y2="153.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="460.1" y1="177.1" x2="465.5" y2="176.8" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="439.7" y1="171.6" x2="447.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="451.4" y1="175.9" x2="441.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="442.8" y1="164.1" x2="432.7" y2="155.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="451.4" y1="175.9" x2="455.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="449.5" y1="173.7" x2="451.4" y2="175.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="459.3" y1="163.0" x2="455.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="457.7" y1="158.4" x2="494.7" y2="137.1" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="457.7" y1="158.4" x2="460.7" y2="142.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="444.6" y1="182.9" x2="441.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="432.7" y1="155.9" x2="446.3" y2="163.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="492.0" y1="184.5" x2="495.3" y2="188.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="377.7" y1="142.2" x2="432.7" y2="155.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="460.1" y1="177.1" x2="455.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="472.2" y1="180.5" x2="460.1" y2="177.1" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="442.8" y1="164.1" x2="410.3" y2="153.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="449.5" y1="173.7" x2="447.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="459.3" y1="163.0" x2="460.7" y2="142.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="456.9" y1="203.9" x2="444.6" y2="182.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="492.0" y1="184.5" x2="479.1" y2="192.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="456.9" y1="203.9" x2="441.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="444.6" y1="182.9" x2="451.4" y2="175.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="472.2" y1="180.5" x2="479.1" y2="192.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="442.8" y1="164.1" x2="439.7" y2="171.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="495.3" y1="188.7" x2="479.1" y2="192.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="382.9" y1="211.8" x2="409.8" y2="204.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="459.3" y1="163.0" x2="457.7" y2="158.4" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="377.7" y1="142.2" x2="410.3" y2="153.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="451.4" y1="175.9" x2="447.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="382.9" y1="211.8" x2="441.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="492.0" y1="184.5" x2="507.3" y2="216.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="442.8" y1="164.1" x2="446.3" y2="163.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="472.2" y1="180.5" x2="465.5" y2="176.8" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="449.5" y1="173.7" x2="455.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="457.7" y1="158.4" x2="446.3" y2="163.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="409.8" y1="204.5" x2="441.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <circle cx="442.8" cy="164.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="472.2" cy="180.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="492.0" cy="184.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="439.7" cy="171.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="495.3" cy="188.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="460.1" cy="177.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="507.3" cy="216.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="456.9" cy="203.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="377.7" cy="142.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="382.9" cy="211.8" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="459.3" cy="163.0" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="449.5" cy="173.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="444.6" cy="182.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="457.7" cy="158.4" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="432.7" cy="155.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="409.8" cy="204.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="465.5" cy="176.8" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="451.4" cy="175.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="441.5" cy="187.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="410.3" cy="153.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="460.7" cy="142.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="446.3" cy="163.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="447.7" cy="171.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="494.7" cy="137.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="455.1" cy="171.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="479.1" cy="192.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <text x="450" y="312" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">inference draws the lines; the inside becomes reachable</text>
  <text x="745" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1a1a1a" letter-spacing="1" font-family="-apple-system, sans-serif">+ 亲 &middot; EXPERIENCE</text>
  <polygon points="641.6,230.6 643.6,125.7 817.5,113.0 818.7,114.4 830.5,240.1" fill="#b45309" fill-opacity="0.07" stroke="#b45309" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.8"/>
  <polygon points="672.7,142.2 789.7,137.1 802.3,216.2 677.9,211.8" fill="#2563eb" fill-opacity="0.13"/>
  <line x1="755.7" y1="142.6" x2="789.7" y2="137.1" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="790.3" y1="188.7" x2="802.3" y2="216.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="741.3" y1="163.2" x2="742.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="727.7" y1="155.9" x2="705.3" y2="153.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="755.1" y1="177.1" x2="760.5" y2="176.8" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="734.7" y1="171.6" x2="742.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="746.4" y1="175.9" x2="736.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="737.8" y1="164.1" x2="727.7" y2="155.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="746.4" y1="175.9" x2="750.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="744.5" y1="173.7" x2="746.4" y2="175.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="754.3" y1="163.0" x2="750.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="752.7" y1="158.4" x2="789.7" y2="137.1" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="752.7" y1="158.4" x2="755.7" y2="142.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="739.6" y1="182.9" x2="736.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="727.7" y1="155.9" x2="741.3" y2="163.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="787.0" y1="184.5" x2="790.3" y2="188.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="672.7" y1="142.2" x2="727.7" y2="155.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="755.1" y1="177.1" x2="750.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="767.2" y1="180.5" x2="755.1" y2="177.1" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="737.8" y1="164.1" x2="705.3" y2="153.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="744.5" y1="173.7" x2="742.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="754.3" y1="163.0" x2="755.7" y2="142.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="751.9" y1="203.9" x2="739.6" y2="182.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="787.0" y1="184.5" x2="774.1" y2="192.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="751.9" y1="203.9" x2="736.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="739.6" y1="182.9" x2="746.4" y2="175.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="767.2" y1="180.5" x2="774.1" y2="192.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="737.8" y1="164.1" x2="734.7" y2="171.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="790.3" y1="188.7" x2="774.1" y2="192.9" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="677.9" y1="211.8" x2="704.8" y2="204.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="754.3" y1="163.0" x2="752.7" y2="158.4" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="672.7" y1="142.2" x2="705.3" y2="153.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="746.4" y1="175.9" x2="742.7" y2="171.7" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="677.9" y1="211.8" x2="736.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="787.0" y1="184.5" x2="802.3" y2="216.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="737.8" y1="164.1" x2="741.3" y2="163.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="767.2" y1="180.5" x2="760.5" y2="176.8" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="744.5" y1="173.7" x2="750.1" y2="171.5" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="752.7" y1="158.4" x2="741.3" y2="163.2" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <line x1="704.8" y1="204.5" x2="736.5" y2="187.6" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
  <circle cx="737.8" cy="164.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="767.2" cy="180.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="787.0" cy="184.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="734.7" cy="171.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="790.3" cy="188.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="755.1" cy="177.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="802.3" cy="216.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="751.9" cy="203.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="672.7" cy="142.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="677.9" cy="211.8" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="754.3" cy="163.0" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="744.5" cy="173.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="739.6" cy="182.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="752.7" cy="158.4" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="727.7" cy="155.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="704.8" cy="204.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="760.5" cy="176.8" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="746.4" cy="175.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="736.5" cy="187.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="705.3" cy="153.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="755.7" cy="142.6" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="741.3" cy="163.2" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="742.7" cy="171.7" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="789.7" cy="137.1" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="750.1" cy="171.5" r="3.2" fill="#2563eb" opacity="0.85"/>
  <circle cx="774.1" cy="192.9" r="3.2" fill="#2563eb" opacity="0.85"/>
  <line x1="802.3" y1="216.2" x2="830.5" y2="240.1" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="830.5" cy="240.1" r="4" fill="#b45309"/>
  <line x1="802.3" y1="216.2" x2="827.9" y2="237.4" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="827.9" cy="237.4" r="4" fill="#b45309"/>
  <line x1="677.9" y1="211.8" x2="641.6" y2="230.6" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="641.6" cy="230.6" r="4" fill="#b45309"/>
  <line x1="677.9" y1="211.8" x2="648.8" y2="229.6" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="648.8" cy="229.6" r="4" fill="#b45309"/>
  <line x1="672.7" y1="142.2" x2="643.6" y2="125.7" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="643.6" cy="125.7" r="4" fill="#b45309"/>
  <line x1="789.7" y1="137.1" x2="818.7" y2="114.4" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="818.7" cy="114.4" r="4" fill="#b45309"/>
  <line x1="789.7" y1="137.1" x2="817.5" y2="113.0" stroke="#b45309" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <circle cx="817.5" cy="113.0" r="4" fill="#b45309"/>
  <text x="745" y="312" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">new points where there were none &#8212; at the edge</text>
</svg>
<figcaption><b>Fig 2 &middot; What each axis does to the data.</b> 闻 gives you the points. 说 gives you the lines between them. 亲 gives you the points that weren&#8217;t there &#8212; and Humility chooses which ones to buy.</figcaption>
</figure>

### Why 说 is barely scaled

It is worth being concrete about how little 说 is really scaled, because the field looks busier on this axis than it is. A vision-language-action model — a VLA, the standard robot policy architecture — maps observation to action. There is no deliberation anywhere in that loop: the model that acts does not reason about what its action is about to do. The standard fix has been to bolt a System 2 on top — a separate reasoning model that plans, hands a subgoal down to a System 1 policy, and then gets out of the way. **Two standalone models, with the thinking sitting upstream of the acting rather than inside it.**

Which is precisely why nothing caught the basket. Whatever System 2 was involved had finished thinking before the load ever shifted, and System 1 does not think. Nobody is scaling 说 *in the loop*; we are scaling a preamble.

### What the action head is actually doing

Look inside the System 1 and the problem gets sharper. The action head in nearly every current VLA is a diffusion or flow-matching expert: it starts from noise and denoises it, over a handful of steps, into a chunk of actions. That is a generator, not a thinker. It has no representation of a consequence, no place to hold a counterfactual, and nothing in it ever asks whether the chunk it is producing is a good idea. Even the models that do reason, like [π<sub>0.5</sub>](https://www.pi.website/download/pi05.pdf){:target="_blank"}, reason *before* acting: a text subtask is predicted first, then the flow expert takes over and does not think again until the next subtask. The deliberation is a preamble to the generator, not part of it.

So the thinking we know how to do and the acting we know how to do are different shapes. **Autoregressive thinking is mature** — chain-of-thought is the whole story of the last three years of language models — but it is token-bound: memory scales linearly with the number of thoughts, it is serial, and it is far too slow for a control loop. Bolt it onto a VLA and you get embodied chain-of-thought, which works and which nobody can run at 50 Hz. **Diffusion is the right shape for actions but does not know how to think.** Reasoning inside a diffusion model exists on paper — [Diffusion-of-Thought](https://arxiv.org/abs/2402.07754){:target="_blank"} and its successors — but the [survey literature](https://arxiv.org/abs/2508.10875){:target="_blank"} is candid that diffusion language models are still early, small, and need extra training to reason at all. The mature thinker is the wrong shape; the right-shaped generator can't think. That gap is where 说 has been stuck.

### The compute axis for robots is depth, not tokens

Language models found their compute axis by spending it in tokens: think longer, emit more, answer better. A robot cannot spend tokens at control rate. If there is a compute axis for robots, it has to be spent somewhere other than text, and the work that is starting to appear all points the same way — **into latent space, and into depth.**

Three results make the shape visible. [LaRA-VLA](https://arxiv.org/abs/2602.01166){:target="_blank"} (ICML 2026) trains a VLA on explicit chain-of-thought and then, by curriculum, internalizes the reasoning into continuous hidden states until no text is generated at inference — and reports the same accuracy at up to 90% lower latency. [Recurrent-Depth VLA](https://arxiv.org/abs/2602.07845){:target="_blank"} goes further: a weight-tied action head that can be run for any number of iterations at constant memory, so the *amount* of thinking is a dial you turn at inference. Tasks that fail outright at one iteration exceed 90% success at four; easy tasks saturate immediately; and it runs up to 80× faster than the chain-of-thought VLAs it replaces. Outside robotics the same idea has been running for a year — Sapient's [Hierarchical Reasoning Model](https://arxiv.org/abs/2506.21734){:target="_blank"} solves reasoning tasks in a single forward pass of nested recurrent modules, entirely in latent space, at 27M parameters — and it is now reaching agents, where [adaptive latent reasoning](https://arxiv.org/abs/2606.02871){:target="_blank"} cuts reasoning tokens by up to 85% on tool-use tasks by thinking in hidden state and escalating to text only when it has to.

That last word — *escalating* — is the part that matters most for us, and it has already shown up in a robot. [τ<sub>0</sub>-VLA](https://www.alphaxiv.org/abs/2608.16885){:target="_blank"} (August 2026) puts a confidence router in front of its planner: when the high-level policy is sure, it executes; when it is not, it spends compute — a generative world model imagines what the camera would see after each candidate subtask, a value model scores the imagined outcomes, a beam search runs over them, and only then does the robot commit. Long-horizon success goes from 27.5% to 45%; on unfamiliar arrangements, from 50% to 74%. The low-level policy underneath is still flow-matching. The thinking didn't replace the generator. It was put *around* it, and switched on by uncertainty.

That is the narrative for scaling compute in robots, and it is not the language-model one. **Not more tokens — more depth, in latent space, spent where the policy is least sure.** Every piece of it now exists somewhere. Nobody has put them together and scaled it.

### The budget that made the split

And the System 1 / System 2 split was never a principled architecture. It is a budget. Robots close their control loop at tens of Hz, and you cannot run a large reasoning model inside that window — so the thinking got moved somewhere it could take its time, which means off the loop and upstream. The blocker on 说 was never a shortage of ideas about deliberation. It is **compute per action**.

<div class="pull-quote">Nobody has seriously scaled the compute axis in robotics action models.</div>

There are two ways out, and the first is oddly under-explored: **let the thinking run in parallel with the acting.** Not a preamble that finishes before the arm moves, and not a monolith that has to complete inside one control step — a slower deliberative process running concurrently, at its own rate, watching the same stream the controller sees. The policy keeps acting at 50 Hz. The thinking lands when it lands, and when it disagrees, it preempts.

That is roughly what a person does carrying an awkward load: the hands keep going while something slower notices the thing is tipping and takes over. And it quietly changes the requirement. Deliberation no longer has to beat the control period — only the time it takes for a failure to become unrecoverable. For a basket sliding off one finger that is a few hundred milliseconds, which is an enormously easier target than the 20 ms a 50 Hz control step allows.

The second way out is to make the model itself cheaper. Enormous effort goes into scaling parameters and data; almost none goes into **the compute efficiency of a robotics foundation model** — making it cheap enough per step that deliberation fits inside the control budget. And robotics is where that work would pay off first: a robot carries its compute with it, on a battery, against a hard control deadline. There is no larger cluster to phone. Distillation, sparsity and routing, adaptive depth, caching across timesteps, chunking that amortizes one forward pass over many actions — unglamorous work, and it is most of what stands between us and a single model that thinks *and* acts at practical latency.

And notice what falls out if you get it. The sane way to spend a variable compute budget is to think longer exactly where you are least sure — which means adaptive compute and the Humility tether are the same signal, read twice. τ<sub>0</sub>'s confidence router is that signal, shipped. A calibrated policy doesn't only know when to ask a human. It knows when to think.

### Recollection, in three traditions

We set Plato's answer aside as unbuildable. It's worth picking back up, because the shape of it is right even where the metaphysics isn't: if a policy's content is all testimony, put there by somebody else, where does it actually live — and what does *learning* mean when nothing new goes in?

Plato's version is wild. The soul is immortal; it has already learned everything there is; birth makes it forget. Nothing is ever taught — what we call learning is *anamnēsis*, recollection, and Socrates asks questions rather than lectures because questioning is the technology of reminding.

I don't believe a word of the metaphysics. But three traditions are now describing the same object from different sides, and the shape they agree on is the point.

<figure class="figure">
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Correspondence between Plato's theory of recollection and modern pretraining">
  <defs>
    <marker id="ar-map" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <text x="215" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#888" letter-spacing="1.2" font-family="-apple-system, sans-serif">PLATO, c. 385 BCE</text>
  <text x="685" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#888" letter-spacing="1.2" font-family="-apple-system, sans-serif">MODERN AI</text>

  <!-- row 1 -->
  <rect x="40" y="44" width="350" height="60" rx="9" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="215" y="70" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">The soul has already learned</text>
  <text x="215" y="90" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">all things that are</text>
  <line x1="400" y1="74" x2="500" y2="74" stroke="#2563eb" stroke-width="1.6" marker-end="url(#ar-map)"/>
  <rect x="510" y="44" width="350" height="60" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="685" y="70" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">The corpus contains roughly</text>
  <text x="685" y="90" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">everything anyone wrote down</text>

  <!-- row 2 -->
  <rect x="40" y="118" width="350" height="60" rx="9" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="215" y="144" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">At birth it forgets &#8212; the content</text>
  <text x="215" y="164" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">is in there, unindexed</text>
  <line x1="400" y1="148" x2="500" y2="148" stroke="#2563eb" stroke-width="1.6" marker-end="url(#ar-map)"/>
  <rect x="510" y="118" width="350" height="60" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="685" y="144" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">Training ends &#8212; it is all in the</text>
  <text x="685" y="164" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">weights, and not addressable</text>

  <!-- row 3 -->
  <rect x="40" y="192" width="350" height="60" rx="9" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="215" y="218" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">Learning = anamn&#275;sis, recollection.</text>
  <text x="215" y="238" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">You ask; you do not tell.</text>
  <line x1="400" y1="222" x2="500" y2="222" stroke="#2563eb" stroke-width="1.6" marker-end="url(#ar-map)"/>
  <rect x="510" y="192" width="350" height="60" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="685" y="218" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">Post-training: elicitation, not instruction.</text>
  <text x="685" y="238" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1a1a1a" font-family="-apple-system, sans-serif">A few shots address what is already there.</text>

  <text x="450" y="284" text-anchor="middle" font-size="12.5" fill="#b45309" font-family="-apple-system, sans-serif">&#9888; Plato's soul is true by construction. A checkpoint is only as true as what it ate.</text>
</svg>
<figcaption><b>Fig 3 &middot; Anamnesis as a pretraining story.</b> Two columns here; the prose supplies the third, 闻 — the same object arrived at from a different direction. The correspondence is uncomfortably good &#8212; which is exactly why the disanalogy at the bottom matters.</figcaption>
</figure>

Anyone who has watched a hundred-shot finetune "teach" a model a skill it visibly already had recognizes this: we are not writing the capability in, we are addressing something already in the weights — the way Socrates addresses geometry already in the boy.

Where the pictures come apart matters more. Plato's soul is *true by construction* — it saw the Forms, so whatever you recollect is knowledge. A checkpoint ate the internet and a pile of teleop logs, so recollection returns whatever was statistically dominant, which may be right and may be a fluent, beautifully-formed mistake. And unlike Plato's helpless newborn, it is already strikingly capable — which is precisely what makes its errors hard to see. A newborn's ignorance is legible across the room; a checkpoint's speaks in the same confident voice as its competence.

So the three line up: Plato's soul, the Mohists' 闻, and a pretrained checkpoint are the same kind of object — a vast inheritance you did not earn, addressable by good questions, and true only as far as its source was. Which settles what a right answer is worth. Eliciting one is not evidence of knowledge. It is evidence of a true opinion, and we already know what those do.

### But how big can 闻 get?

Teleoperation is not the only way to collect 闻. A human wearing camera glasses while cooking dinner is producing it. So is someone holding one of those gripper rigs while they load a dishwasher, which hands you an end-effector trajectory with no robot in the room. So is every instructional video ever uploaded. There is three or four orders of magnitude more of this than there will ever be teleop, none of it costs robot time, and it scales the way corpora actually scale: by harvesting what already exists instead of manufacturing it.

<figure class="figure">
<svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A map of sources of 闻: the abundant sources sit furthest from the robot's own action space, and none of them contain failure and recovery">
  <defs>
    <marker id="wm-ax" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="9" refX="9" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#888"/></marker>
    <marker id="wm-mv" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="11" refX="11" refY="5.5" orient="auto"><path d="M0,0 L11,5.5 L0,11 Z" fill="#b45309"/></marker>
  </defs>

  <!-- axes -->
  <line x1="150" y1="308" x2="150" y2="52" stroke="#888" stroke-width="1.6" marker-end="url(#wm-ax)"/>
  <line x1="150" y1="308" x2="734" y2="308" stroke="#888" stroke-width="1.6" marker-end="url(#wm-ax)"/>
  <text x="138" y="62" text-anchor="end" font-size="11" fill="#888" font-family="-apple-system, sans-serif">native</text>
  <text x="138" y="302" text-anchor="end" font-size="11" fill="#888" font-family="-apple-system, sans-serif">no actions at all</text>
  <text x="30" y="180" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif" transform="rotate(-90 30 180)" text-anchor="middle">closeness to the robot&#8217;s own action space</text>
  <text x="166" y="328" font-size="11" fill="#888" font-family="-apple-system, sans-serif">scarce</text>
  <text x="730" y="328" text-anchor="end" font-size="11" fill="#888" font-family="-apple-system, sans-serif">abundant</text>
  <text x="440" y="352" text-anchor="middle" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">how much of it already exists</text>

  <circle cx="200" cy="92" r="8" fill="#ffffff" stroke="#2563eb" stroke-width="2.6"/>
  <text x="200" y="62" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">teleoperation</text>
  <text x="200" y="77" text-anchor="middle" font-size="10.5" fill="#888" font-family="-apple-system, sans-serif">native actions &#183; vanishingly little of it</text>
  <circle cx="330" cy="142" r="8" fill="#ffffff" stroke="#2563eb" stroke-width="2.6"/>
  <text x="330" y="112" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">handheld gripper rigs</text>
  <text x="330" y="127" text-anchor="middle" font-size="10.5" fill="#888" font-family="-apple-system, sans-serif">end-effector paths, no robot in the room</text>
  <circle cx="515" cy="208" r="8" fill="#ffffff" stroke="#2563eb" stroke-width="2.6"/>
  <text x="515" y="178" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">egocentric video</text>
  <text x="515" y="193" text-anchor="middle" font-size="10.5" fill="#888" font-family="-apple-system, sans-serif">glasses and head-cams &#183; enormous</text>
  <circle cx="660" cy="264" r="8" fill="#ffffff" stroke="#2563eb" stroke-width="2.6"/>
  <text x="660" y="234" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">web / instructional video</text>
  <text x="660" y="249" text-anchor="middle" font-size="10.5" fill="#888" font-family="-apple-system, sans-serif">effectively unlimited &#183; furthest from the body</text>

  <!-- the move -->
  <path d="M642,288 C542,272 430,216 364,174" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#wm-mv)"/>
  <text x="300" y="248" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">the move worth making</text>
  <text x="300" y="264" text-anchor="middle" font-size="11" fill="#555" font-family="-apple-system, sans-serif">keep the volume, close the gap</text>

  <!-- legend: the thing none of them have -->
  <rect x="742" y="86" width="146" height="92" rx="8" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.4"/>
  <text x="815" y="106" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1a1a1a" letter-spacing="0.5" font-family="-apple-system, sans-serif">CONTAINS FAILURE</text>
  <text x="815" y="120" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1a1a1a" letter-spacing="0.5" font-family="-apple-system, sans-serif">AND RECOVERY?</text>
  <circle cx="766" cy="140" r="7" fill="#ffffff" stroke="#2563eb" stroke-width="2.4"/>
  <text x="781" y="144" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">no &#8212; all of it</text>
  <circle cx="766" cy="163" r="7" fill="#2563eb"/>
  <text x="781" y="167" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">yes &#8212; none of it</text>
</svg>
<figcaption><b>Fig 4 &middot; Where 闻 actually comes from.</b> The abundant sources are the ones furthest from the robot&#8217;s own actions &#8212; and every marker on this chart is hollow, because people do not record themselves failing and recovering.</figcaption>
</figure>

But the axis does not change character when you make it bigger. Two structural facts hold across all of it.

**It is outside the body.** Video shows you what happened, not what it felt like or what force was applied — vision underdetermines contact. No quantity of head-cam footage would have told a policy how a basket hooked on one finger loads that finger.

**It is a corpus of successes.** This is the deeper one. People record themselves doing things that work. When it goes wrong it gets retaken, edited out, or never uploaded — and teleop is filtered the same way, because operators reset on failure and you keep the clean episode. So the naturally-occurring supply of 闻 is systematically missing precisely the material Recovery is made of.

Which gives *what should we collect?* a non-obvious answer: **collect against the grain of what people naturally record.** Deliberately capture the fumble and the save, not just the clean run. Keep the near-miss you would normally cut. Instrument for contact and force, not only pixels. Prefer sources where the action already lives in a frame the robot can use — the gripper-on-a-stick beats the head-cam, which beats the tutorial.

And then **label it properly**, the step that actually gets skipped. Footage of a fumble with no annotation of *what went wrong, when, and what fixed it* is worth little more than no footage. Recovery cannot be learned from an unlabelled pile of things going sideways; it has to be legible as a fumble followed by a save. A line I have started repeating to myself:

> There is no bad data. There is only badly labelled data.

Scale 闻 as hard as you can get away with. Just don't mistake a bigger circle — more of the world your data has touched — for a tethered one. A million hours of things going right is a million true opinions.


## What the boy has that a policy does not

Ten minutes in the dirt with Socrates takes the boy from a confident wrong answer to something worth calling knowledge — no corpus, no gradient step, nothing added from outside. Two things get him there, and they scale very differently.

**The first is latent structure** — his lived sense of edges, area and halves, which Socrates addresses rather than installs. That is recollection, and its machine analogue **does scale with 闻**: a prior over how the world is shaped is precisely what pretraining buys. Pile it on; the boy's prior is on sale.

**The second is a verifier.** His decisive move is not recall. Socrates draws the four-by-four square and the boy *sees that his own answer failed* — he can count it. In his own domain he has a cheap, unambiguous, human-free check.

**That half does not scale with 闻 at all.** More testimony gives you more recollectable content, not the recognition of error that converts it into knowledge; scale alone buys *more confident* wrong answers. It is why maths and code ran ahead in language models — not easier domains, just buildable checkers.

So the question was never *how much 闻 until the boy appears* but: **what is the robot's diagonal in the dirt?**

And manipulation is luckier than it looks, because the check already ran. **The forks hit the floor.** A visible, self-delivering contradiction, free of charge, requiring no judge. The robot had every sensor needed to register it; what it lacked was a prediction for the world to contradict, and anything at all that was looking.

Which is the whole build in one line. **说 (thinking) supplies the prediction; Humility notices the contradiction; 亲 (experience) buys the correction.** That is the *elenchus* — refutation by question, until the claim collapses — and the boy's state arrives domain by domain, as fast as you can construct the check, not off a scaling curve.

## Two more moves, on the training side

Part one's three moves were all about measurement. These two are about what you feed the policy, and they are the harder pair.

**1. Scale 说 in depth, not in tokens.** Not a bigger System 2 handing plans down to an unchanged System 1, and not chain-of-thought bolted onto a policy that cannot run it at control rate — reasoning in latent space, with depth as an inference-time dial, running alongside the controller and free to interrupt it: *where is this load going — and is it still going there?* A world model consulted once at plan time is a research artifact; one that gates the next action is a tether. Recurrent-depth heads and confidence-gated search both exist now. Put them in one model and turn the dial up where the policy is unsure.

**2. Scale 亲, and let the robot choose it.** The move nobody is making. Glasses and gripper sticks grow the circle cheaply, but every hour of that is still 闻. 亲 cannot be harvested; it has to be lived, in this body, including the parts that go wrong. So the question is not *how do we get more 亲* but *which 亲 is worth buying?* A calibrated robot answers that.

<figure class="figure">
<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A training loop: pretraining gives a prior, the policy acts, predicts consequences, checks its own calibration, and where it is uncertain it asks for one targeted demonstration that feeds back into the prior">
  <defs>
    <marker id="fw-a" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/></marker>
    <marker id="fw-w" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#b45309"/></marker>
    <marker id="fw-g" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#888"/></marker>
  </defs>

  <!-- the "keep acting" return, drawn first so it sits behind the boxes -->
  <path d="M800,96 C800,44 700,38 620,38 L470,38 C440,38 428,52 428,86" fill="none" stroke="#888" stroke-width="1.6" stroke-dasharray="5 5" marker-end="url(#fw-g)"/>
  <text x="600" y="30" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">calibrated here &#8212; keep acting</text>

  <!-- ===== row 1 ===== -->
  <rect x="24" y="96" width="166" height="56" rx="9" fill="#f8f9fa" stroke="#888" stroke-width="1.6"/>
  <text x="107" y="119" text-anchor="middle" font-size="13.5" font-weight="700" fill="#555" font-family="-apple-system, sans-serif">闻 pretraining</text>
  <text x="107" y="137" text-anchor="middle" font-size="11" fill="#888" font-family="-apple-system, sans-serif">the axis we already scale</text>
  <line x1="190" y1="124" x2="212" y2="124" stroke="#888" stroke-width="1.8" marker-end="url(#fw-g)"/>

  <rect x="224" y="96" width="126" height="56" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
  <text x="287" y="121" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">the prior</text>
  <text x="287" y="138" text-anchor="middle" font-size="11" fill="#555" font-family="-apple-system, sans-serif">true opinions, so far</text>
  <line x1="350" y1="124" x2="372" y2="124" stroke="#2563eb" stroke-width="1.8" marker-end="url(#fw-a)"/>

  <rect x="384" y="96" width="88" height="56" rx="9" fill="#ffffff" stroke="#2563eb" stroke-width="1.8"/>
  <text x="428" y="130" text-anchor="middle" font-size="14.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">act</text>
  <line x1="472" y1="124" x2="494" y2="124" stroke="#2563eb" stroke-width="1.8" marker-end="url(#fw-a)"/>

  <rect x="506" y="96" width="168" height="56" rx="9" fill="#ffffff" stroke="#b45309" stroke-width="1.8"/>
  <text x="590" y="119" text-anchor="middle" font-size="13.5" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">说 predict first</text>
  <text x="590" y="137" text-anchor="middle" font-size="11" fill="#555" font-family="-apple-system, sans-serif">&#8220;where does the load go?&#8221;</text>
  <line x1="674" y1="124" x2="696" y2="124" stroke="#2563eb" stroke-width="1.8" marker-end="url(#fw-a)"/>

  <rect x="708" y="96" width="168" height="56" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="2.4"/>
  <text x="792" y="119" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">humility</text>
  <text x="792" y="137" text-anchor="middle" font-size="11" fill="#555" font-family="-apple-system, sans-serif">do I know this state?</text>

  <!-- ===== the branch that matters ===== -->
  <path d="M792,152 L792,206" fill="none" stroke="#b45309" stroke-width="2" marker-end="url(#fw-w)"/>
  <text x="802" y="182" font-size="11.5" font-weight="600" fill="#b45309" font-family="-apple-system, sans-serif">no</text>

  <!-- ===== row 2 ===== -->
  <rect x="596" y="212" width="280" height="52" rx="9" fill="#ffffff" stroke="#b45309" stroke-width="1.8"/>
  <text x="736" y="243" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;I don&#8217;t know this state &#8212; show me.&#8221;</text>
  <line x1="596" y1="238" x2="562" y2="238" stroke="#b45309" stroke-width="1.8" marker-end="url(#fw-w)"/>

  <rect x="300" y="212" width="250" height="52" rx="9" fill="#ffffff" stroke="#b45309" stroke-width="1.8"/>
  <text x="425" y="235" text-anchor="middle" font-size="13.5" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">亲 one targeted demonstration</text>
  <text x="425" y="253" text-anchor="middle" font-size="11" fill="#555" font-family="-apple-system, sans-serif">bought exactly where it was missing</text>

  <!-- return to the prior -->
  <path d="M300,238 C240,238 216,214 224,168 L240,152" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#fw-a)"/>
  <text x="176" y="212" text-anchor="middle" font-size="11.5" font-weight="600" fill="#2563eb" font-family="-apple-system, sans-serif">now tethered</text>

  <!-- the point -->
  <line x1="60" y1="316" x2="840" y2="316" stroke="#e5e7eb" stroke-width="1"/>
  <text x="450" y="344" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Humility is the only tether that closes the loop.</text>
  <text x="450" y="366" text-anchor="middle" font-size="12.5" fill="#555" font-family="-apple-system, sans-serif">The other four tell you the policy is sound. This one tells you what to buy next &#8212;</text>
  <text x="450" y="384" text-anchor="middle" font-size="12.5" fill="#555" font-family="-apple-system, sans-serif">which is what turns an evaluation framework into a training paradigm.</text>
</svg>
<figcaption><b>Fig 5 &middot; The loop.</b> 闻 gets you a prior once. 说 and 亲 are what compound &#8212; and the robot&#8217;s own calibrated ignorance is what decides where the expensive axis gets spent.</figcaption>
</figure>

Put a calibrated policy together with a robot that chooses its own 亲, and it starts *aiming its own data collection*. Its uncertainty is a map of its own boundary, and that map is the shopping list: **stop paying for a thousand more demonstrations of the drawer it already opens; buy the one demonstration of the drawer it doesn't.**

The honest counter-argument: while the circle is small, blind collection works fine — nearly any hour lands somewhere useful, and that is how the field got this far. But its yield falls as the circle grows while its cost stays flat; directed collection has the opposite curve. Curiosity is not what makes your first ten thousand hours work; it is what makes the next hundred thousand worth buying.

Which is the oldest claim here, and the one a robot makes literal. Fifteen centuries after the Mohists sorted knowledge by its route, Wang Yangming denied the route mattered at all unless it ended in action:

<div class="zh-quote">
  <div class="zh">知行合一</div>
  <div class="py">zhī x&#237;ng h&#233; y&#299;</div>
  <div class="en">Knowledge and action are one. To know and not to act is not yet to know.</div>
  <div class="src">Wang Yangming (王阳明), 1472&#8211;1529</div>
</div>

Wang was arguing with scholars who could recite the classics and could not act on them, and refused to grant they knew anything. Not *incomplete* knowledge. Not knowledge. The only evidence of knowing is what you do in a situation **nobody rehearsed you for** — word for word, the specification for a robot in someone's kitchen. That is 亲 stated as a criterion rather than as a data source.

I went looking for a way to make a robot ask for help and found the problem named, diagnosed and half-solved twenty-four centuries before anyone had a robot to ask it about. Meno's paradox is real: you cannot search for what you do not know. But the escape is smaller than it sounds — you never needed the answer, only the boundary, and then the 说 to predict past it and the 亲 to buy what lies on the other side.

Physical AGI will not arrive as a checkpoint that finally scores high enough; the number measures the wrong category of thing. It will arrive as a machine that can tell you where its knowledge stops, ask for precisely what it is missing, and act differently tomorrow because of what you showed it today. **Build the boundary first; the competence compounds behind it.**

---

*Part one is [Meno's Paradox — Your Robot's Success Rate Is Just a "True" OPINION](/blog/menos-paradox-true-opinion/).*

Written by Jinyu Xie and Claude. 闻/说/亲 are from the 《墨经》 (Mohist Canon), Warring States period; 知行合一 is Wang Yangming (王阳明), 1472–1529.
