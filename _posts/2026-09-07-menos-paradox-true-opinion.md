---
layout: post
title: "Meno’s Paradox — Your Robot’s Success Rate Is Just a “True” OPINION"
description: "Plato separated true opinion from knowledge 2,400 years ago. A success rate measures the first and cannot see the second — on the Meno, the slave boy, the statues of Daedalus, and five tethers for robot evaluation."
authors: "Jinyu Xie and Claude"
reading_time: "13 min read"
date: 2026-09-07
---

A robot I watched recently lifted a cutlery basket out of a dishwasher on a single finger and carried it toward the tabletop. Halfway across, the basket lost balance and the forks slid out and clattered onto the floor.

<figure class="figure">
<svg id="rr-scene" viewBox="0 0 900 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated replay: a robot carries a cutlery basket on one finger from a dishwasher to a tabletop, the basket tips, forks fall to the floor, and the arm continues its learned trajectory without deviating">
  <style>
    #rr-scene .rr-anim { transform-box: view-box; transform-origin: 0 0; }
    #rr-scene .rr-rig {
      offset-path: path("M150,258 C300,110 540,106 716,216");
      offset-rotate: 0deg;
      animation: rr-travel 7.4s linear infinite;
    }
    #rr-scene .rr-basket  { animation: rr-tilt    7.4s linear infinite; }
    #rr-scene .rr-forksin { animation: rr-forksout 7.4s linear infinite; }
    #rr-scene .rr-f1 { animation: rr-fall1 7.4s linear infinite; }
    #rr-scene .rr-f2 { animation: rr-fall2 7.4s linear infinite; }
    #rr-scene .rr-f3 { animation: rr-fall3 7.4s linear infinite; }
    #rr-scene .rr-play  { animation: rr-head  7.4s linear infinite; }
    #rr-scene .rr-call1 { animation: rr-c1 7.4s linear infinite; }
    #rr-scene .rr-call2 { animation: rr-c2 7.4s linear infinite; }
    #rr-scene .rr-call3 { animation: rr-c3 7.4s linear infinite; }

    @keyframes rr-travel { 0%,6% { offset-distance: 0%; } 92%,100% { offset-distance: 100%; } }
    @keyframes rr-head   { 0%,6% { transform: translate(0px,0px); } 92%,100% { transform: translate(600px,0px); } }
    @keyframes rr-tilt {
      0%,38%   { transform: translate(-16px,14px) rotate(0deg)  translate(16px,-14px); }
      44%      { transform: translate(-16px,14px) rotate(9deg)  translate(16px,-14px); }
      50%      { transform: translate(-16px,14px) rotate(22deg) translate(16px,-14px); }
      56%,100% { transform: translate(-16px,14px) rotate(25deg) translate(16px,-14px); }
    }
    @keyframes rr-forksout { 0%,48% { opacity: 1; } 54%,100% { opacity: 0; } }
    @keyframes rr-fall1 {
      0%,49%  { opacity:0; transform: translate(409px,158px) rotate(0deg); }
      53%     { opacity:1; transform: translate(404px,172px) rotate(-22deg); }
      60%     { opacity:1; transform: translate(396px,216px) rotate(-50deg); }
      68%     { opacity:1; transform: translate(387px,286px) rotate(-82deg); }
      76%,95% { opacity:1; transform: translate(378px,344px) rotate(-104deg); }
      100%    { opacity:0; transform: translate(378px,344px) rotate(-104deg); }
    }
    @keyframes rr-fall2 {
      0%,50%  { opacity:0; transform: translate(423px,160px) rotate(0deg); }
      54%     { opacity:1; transform: translate(426px,174px) rotate(18deg); }
      61%     { opacity:1; transform: translate(431px,220px) rotate(40deg); }
      69%     { opacity:1; transform: translate(437px,290px) rotate(64deg); }
      77%,95% { opacity:1; transform: translate(441px,346px) rotate(80deg); }
      100%    { opacity:0; transform: translate(441px,346px) rotate(80deg); }
    }
    @keyframes rr-fall3 {
      0%,51%  { opacity:0; transform: translate(437px,157px) rotate(0deg); }
      55%     { opacity:1; transform: translate(448px,170px) rotate(26deg); }
      62%     { opacity:1; transform: translate(463px,216px) rotate(58deg); }
      70%     { opacity:1; transform: translate(480px,286px) rotate(92deg); }
      78%,95% { opacity:1; transform: translate(492px,346px) rotate(116deg); }
      100%    { opacity:0; transform: translate(492px,346px) rotate(116deg); }
    }
    @keyframes rr-c1 { 0%,39% { opacity:0; } 45%,64% { opacity:1; } 70%,100% { opacity:0; } }
    @keyframes rr-c2 { 0%,77% { opacity:0; } 83%,96% { opacity:1; } 100% { opacity:0; } }
    @keyframes rr-c3 { 0%,79% { opacity:0; } 85%,96% { opacity:1; } 100% { opacity:0; } }

    @media (prefers-reduced-motion: reduce) {
      #rr-scene * { animation: none !important; }
      #rr-scene .rr-rig     { offset-distance: 62%; }
      #rr-scene .rr-basket  { transform: translate(-16px,14px) rotate(25deg) translate(16px,-14px); }
      #rr-scene .rr-forksin { opacity: 0; }
      #rr-scene .rr-f1 { opacity:1; transform: translate(378px,344px) rotate(-104deg); }
      #rr-scene .rr-f2 { opacity:1; transform: translate(441px,346px) rotate(80deg); }
      #rr-scene .rr-f3 { opacity:1; transform: translate(492px,346px) rotate(116deg); }
      #rr-scene .rr-play  { transform: translate(390px,0px); }
      #rr-scene .rr-call1 { opacity:0; }
      #rr-scene .rr-call2 { opacity:1; }
      #rr-scene .rr-call3 { opacity:0; }
    }
  </style>

  <!-- ===== static set ===== -->
  <line x1="40" y1="344" x2="860" y2="344" stroke="#e5e7eb" stroke-width="2"/>

  <!-- dishwasher -->
  <rect x="68" y="196" width="150" height="148" fill="#f8f9fa" stroke="#888" stroke-width="1.8"/>
  <g stroke="#e5e7eb" stroke-width="2">
    <line x1="90" y1="252" x2="90" y2="308"/><line x1="112" y1="252" x2="112" y2="308"/>
    <line x1="134" y1="252" x2="134" y2="308"/><line x1="156" y1="252" x2="156" y2="308"/>
    <line x1="178" y1="252" x2="178" y2="308"/><line x1="200" y1="252" x2="200" y2="308"/>
  </g>
  <polygon points="218,324 316,346 316,354 218,332" fill="#f8f9fa" stroke="#888" stroke-width="1.6"/>
  <text x="143" y="186" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">dishwasher</text>

  <!-- tabletop -->
  <rect x="618" y="282" width="220" height="10" fill="#f8f9fa" stroke="#888" stroke-width="1.8"/>
  <rect x="640" y="292" width="7" height="52" fill="#f8f9fa" stroke="#888" stroke-width="1.6"/>
  <rect x="809" y="292" width="7" height="52" fill="#f8f9fa" stroke="#888" stroke-width="1.6"/>
  <text x="728" y="322" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">tabletop</text>

  <!-- the learned trajectory, drawn once and never departed from -->
  <path d="M150,258 C300,110 540,106 716,216" fill="none" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="6 6" opacity="0.45"/>
  <text x="240" y="150" font-size="11.5" fill="#2563eb" opacity="0.8" font-family="-apple-system, sans-serif">the learned trajectory</text>

  <!-- ===== the rig: gripper + basket + forks ===== -->
  <g class="rr-anim rr-rig">
    <rect x="-4" y="-46" width="8" height="34" rx="3" fill="#888"/>
    <path d="M0,-12 L0,2 C0,10 -8,14 -16,14" fill="none" stroke="#555" stroke-width="3.4" stroke-linecap="round"/>
    <g class="rr-anim rr-basket">
      <polygon points="-30,14 30,14 25,52 -25,52" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <g stroke="#2563eb" stroke-width="0.9" opacity="0.4">
        <line x1="-15" y1="14" x2="-13" y2="52"/><line x1="0" y1="14" x2="0" y2="52"/>
        <line x1="15" y1="14" x2="13" y2="52"/><line x1="-28" y1="33" x2="28" y2="33"/>
      </g>
      <g class="rr-forksin" stroke="#555" fill="none" stroke-linecap="round">
        <g transform="translate(-12,44)"><path d="M0,0 L0,-30" stroke-width="2"/><path d="M-5,-30 L5,-30" stroke-width="1.5"/><path d="M-5,-30 L-5,-40 M0,-30 L0,-40 M5,-30 L5,-40" stroke-width="1.5"/></g>
        <g transform="translate(2,44)"><path d="M0,0 L0,-30" stroke-width="2"/><path d="M-5,-30 L5,-30" stroke-width="1.5"/><path d="M-5,-30 L-5,-40 M0,-30 L0,-40 M5,-30 L5,-40" stroke-width="1.5"/></g>
        <g transform="translate(16,44)"><path d="M0,0 L0,-30" stroke-width="2"/><path d="M-5,-30 L5,-30" stroke-width="1.5"/><path d="M-5,-30 L-5,-40 M0,-30 L0,-40 M5,-30 L5,-40" stroke-width="1.5"/></g>
      </g>
    </g>
    <circle cx="-16" cy="14" r="3.6" fill="#b45309"/>
  </g>

  <!-- ===== the forks, once they are no longer the robot's problem ===== -->
  <g stroke="#b45309" fill="none" stroke-linecap="round">
    <g class="rr-anim rr-f1"><path d="M0,0 L0,-30" stroke-width="2"/><path d="M-5,-30 L5,-30" stroke-width="1.5"/><path d="M-5,-30 L-5,-40 M0,-30 L0,-40 M5,-30 L5,-40" stroke-width="1.5"/></g>
    <g class="rr-anim rr-f2"><path d="M0,0 L0,-30" stroke-width="2"/><path d="M-5,-30 L5,-30" stroke-width="1.5"/><path d="M-5,-30 L-5,-40 M0,-30 L0,-40 M5,-30 L5,-40" stroke-width="1.5"/></g>
    <g class="rr-anim rr-f3"><path d="M0,0 L0,-30" stroke-width="2"/><path d="M-5,-30 L5,-30" stroke-width="1.5"/><path d="M-5,-30 L-5,-40 M0,-30 L0,-40 M5,-30 L5,-40" stroke-width="1.5"/></g>
  </g>

  <!-- ===== callouts ===== -->
  <g class="rr-call1">
    <line x1="423" y1="86" x2="423" y2="126" stroke="#b45309" stroke-width="1.3" stroke-dasharray="3 3"/>
    <text x="423" y="66" text-anchor="middle" font-size="13.5" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">balance lost</text>
    <text x="423" y="82" text-anchor="middle" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">one contact, and the load was never centred on it</text>
  </g>
  <g class="rr-call2">
    <text x="344" y="372" text-anchor="end" font-size="12" font-weight="600" fill="#b45309" font-family="-apple-system, sans-serif">three forks on the floor</text>
  </g>
  <g class="rr-call3">
    <text x="726" y="142" text-anchor="middle" font-size="13.5" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">trajectory: unchanged</text>
    <text x="726" y="159" text-anchor="middle" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">no pause, no re-grasp, no stop</text>
  </g>

  <!-- ===== replay timeline ===== -->
  <line x1="150" y1="400" x2="750" y2="400" stroke="#e5e7eb" stroke-width="3" stroke-linecap="round"/>
  <g stroke="#e5e7eb" stroke-width="2">
    <line x1="150" y1="394" x2="150" y2="406"/><line x1="402" y1="394" x2="402" y2="406"/>
    <line x1="450" y1="394" x2="450" y2="406"/><line x1="750" y1="394" x2="750" y2="406"/>
  </g>
  <text x="150" y="386" text-anchor="middle" font-size="10.5" fill="#888" font-family="-apple-system, sans-serif">lift</text>
  <text x="402" y="386" text-anchor="middle" font-size="10.5" fill="#b45309" font-family="-apple-system, sans-serif">balance lost</text>
  <text x="458" y="386" font-size="10.5" fill="#b45309" font-family="-apple-system, sans-serif">forks hit the floor</text>
  <text x="750" y="386" text-anchor="middle" font-size="10.5" fill="#2563eb" font-family="-apple-system, sans-serif">placed &#183; trajectory complete</text>
  <g class="rr-anim rr-play"><circle cx="150" cy="400" r="5.5" fill="#2563eb"/></g>
</svg>
<figcaption><b>Fig 1 &middot; One rollout, replayed.</b> Redrawn from an episode I watched. The dashed line is the policy's learned trajectory; the point of the figure is that the executed path and the dashed path never separate &#8212; not at the tip, not at the drop, not after.</figcaption>
</figure>

The robot finished the motion exactly as planned — set the lighter basket down, opened the finger, retracted. No pause, no re-grasp, because nothing inside it had registered that anything happened. The failure isn't that the policy was wrong. It's that it was wrong and **had no idea**.

Here is the part that nags. The success rate on this task is *high* — surprisingly high, high enough that on the numbers you would call the skill solved and put it in a demo reel without hesitating. Then you watch one rollout like this one and the number stops meaning what you thought it meant. Nothing in that sequence looked like a policy that knows how to carry a basket. It looked like a policy that has a motion which usually works — and *usually* is doing an enormous amount of quiet work inside an average taken over rollouts where nothing shifted.

So the question this whole piece is about, asked once here and answered for the rest of it: **are we measuring the wrong thing?**

I have wanted to build curiosity into a robot for as long as I have been building robots, and that rollout is exactly why. Not because the basket tipped — baskets tip, and no policy is going to be perfect. Because nowhere in the entire sequence was there a moment where the robot *wondered*.

So: a **curious** robot. An engineering target, not a personality note.

Curiosity is easy to caricature as exploration noise: perturb the action, see what happens, keep whatever pays. That's not curiosity, that's thrashing — a random-number generator does it perfectly and has never wondered about anything. The first real sign of curiosity in anything is not that it pokes at the world. It's that it **asks a question**. And a question is a demanding object: to ask one you must have located something you don't know, and cared enough about the gap to point at it.

For robots this matters more than it sounds, because our data problem is the inverse of everyone else's. Language models were handed an enormous circle: essentially everything people wrote down already exists, so building a corpus is *subtractive* — filter, dedupe, keep the good part. Robotics was handed a tiny one, and the craft has to be *additive*.

<figure class="figure">
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Language models filter down from an enormous corpus; robotics must expand outward from a tiny one">
  <defs>
    <marker id="cr-in" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="9" refX="9" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#888"/></marker>
    <marker id="cr-out" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="9" refX="9" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#b45309"/></marker>
  </defs>

  <text x="225" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1a1a1a" letter-spacing="1.1" font-family="-apple-system, sans-serif">LANGUAGE MODELS</text>
  <text x="675" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1a1a1a" letter-spacing="1.1" font-family="-apple-system, sans-serif">ROBOTS</text>

  <!-- LEFT: an enormous circle you filter down -->
  <circle cx="225" cy="160" r="105" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.8"/>
  <circle cx="145.1" cy="184.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="295.6" cy="123.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="140.3" cy="155.8" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="257.5" cy="234.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="161.1" cy="92.1" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="284.4" cy="199.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="304.1" cy="210.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="205.3" cy="106.8" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="324.1" cy="148.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="176.2" cy="89.2" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="255.2" cy="206.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="168.0" cy="149.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="250.1" cy="223.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="302.9" cy="174.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="136.4" cy="194.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="138.6" cy="149.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="137.0" cy="160.1" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="157.2" cy="178.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="325.8" cy="158.5" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="273.2" cy="84.2" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="198.0" cy="222.1" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="210.8" cy="216.8" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="232.8" cy="84.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="268.2" cy="97.8" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="317.0" cy="135.2" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="291.7" cy="160.2" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="292.3" cy="117.5" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="300.7" cy="150.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="302.7" cy="198.4" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="237.4" cy="91.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="287.4" cy="198.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="314.5" cy="139.4" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="275.6" cy="206.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="271.6" cy="194.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="243.9" cy="97.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="151.8" cy="131.4" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="258.1" cy="244.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="284.3" cy="223.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="282.5" cy="211.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="241.2" cy="228.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="317.1" cy="143.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="192.7" cy="251.2" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="243.6" cy="233.8" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="278.1" cy="90.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="306.3" cy="219.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="240.9" cy="227.4" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="235.4" cy="87.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="208.1" cy="216.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="296.4" cy="205.4" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="228.7" cy="245.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="170.4" cy="216.9" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="302.6" cy="139.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="139.3" cy="116.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="251.0" cy="218.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="304.0" cy="108.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="225.2" cy="225.6" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="218.4" cy="61.4" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="257.7" cy="253.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="288.1" cy="102.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="171.6" cy="188.7" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="321.7" cy="184.0" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="231.5" cy="249.5" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="220.9" cy="254.3" r="1.9" fill="#888" opacity="0.5"/>
  <circle cx="166.6" cy="119.5" r="1.9" fill="#888" opacity="0.5"/>
  <line x1="304.7" y1="206.0" x2="275.2" y2="189.0" stroke="#888" stroke-width="1.8" marker-end="url(#cr-in)"/>
  <line x1="209.0" y1="250.6" x2="214.9" y2="217.1" stroke="#888" stroke-width="1.8" marker-end="url(#cr-in)"/>
  <line x1="134.4" y1="176.0" x2="167.9" y2="170.1" stroke="#888" stroke-width="1.8" marker-end="url(#cr-in)"/>
  <line x1="179.0" y1="80.3" x2="196.0" y2="109.8" stroke="#888" stroke-width="1.8" marker-end="url(#cr-in)"/>
  <line x1="284.1" y1="89.5" x2="262.3" y2="115.6" stroke="#888" stroke-width="1.8" marker-end="url(#cr-in)"/>
  <circle cx="225" cy="160" r="48" fill="#dbeafe" stroke="#2563eb" stroke-width="2.2"/>
  <circle cx="240.4" cy="190.4" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="243.0" cy="168.3" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="190.5" cy="146.5" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="208.6" cy="145.7" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="241.4" cy="150.7" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="246.3" cy="162.2" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="214.2" cy="163.8" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="236.1" cy="182.1" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="211.0" cy="153.2" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="200.5" cy="188.8" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="257.4" cy="156.0" r="1.9" fill="#2563eb" opacity="0.85"/>
  <text x="225" y="288" text-anchor="middle" font-size="12.5" fill="#555" font-family="-apple-system, sans-serif">the data already exists</text>
  <text x="225" y="308" text-anchor="middle" font-size="12.5" font-weight="700" fill="#555" font-family="-apple-system, sans-serif">the work is filtering <tspan fill="#1a1a1a">down</tspan></text>

  <line x1="450" y1="44" x2="450" y2="286" stroke="#e5e7eb" stroke-width="1"/>

  <!-- RIGHT: a tiny circle you have to grow -->
  <circle cx="675" cy="160" r="105" fill="none" stroke="#b45309" stroke-width="1.6" stroke-dasharray="6 6" opacity="0.55"/>
  <rect x="588" y="60" width="174" height="17" rx="3" fill="#ffffff"/>
  <text x="675" y="72" text-anchor="middle" font-size="11" fill="#b45309" opacity="0.9" font-family="-apple-system, sans-serif">everything it will actually meet</text>
  <line x1="723.5" y1="188.0" x2="754.7" y2="206.0" stroke="#b45309" stroke-width="1.8" marker-end="url(#cr-out)"/>
  <line x1="665.3" y1="215.1" x2="659.0" y2="250.6" stroke="#b45309" stroke-width="1.8" marker-end="url(#cr-out)"/>
  <line x1="619.9" y1="169.7" x2="584.4" y2="176.0" stroke="#b45309" stroke-width="1.8" marker-end="url(#cr-out)"/>
  <line x1="647.0" y1="111.5" x2="629.0" y2="80.3" stroke="#b45309" stroke-width="1.8" marker-end="url(#cr-out)"/>
  <line x1="711.0" y1="117.1" x2="734.1" y2="89.5" stroke="#b45309" stroke-width="1.8" marker-end="url(#cr-out)"/>
  <circle cx="675" cy="160" r="44" fill="#dbeafe" stroke="#2563eb" stroke-width="2.2"/>
  <circle cx="665.5" cy="135.5" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="680.5" cy="166.7" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="707.3" cy="163.6" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="664.9" cy="128.2" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="702.1" cy="163.6" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="646.0" cy="163.3" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="660.7" cy="190.9" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="697.7" cy="171.6" r="1.9" fill="#2563eb" opacity="0.85"/>
  <circle cx="672.4" cy="127.8" r="1.9" fill="#2563eb" opacity="0.85"/>
  <rect x="602" y="220" width="146" height="17" rx="3" fill="#ffffff"/>
  <text x="675" y="232" text-anchor="middle" font-size="11" fill="#2563eb" font-family="-apple-system, sans-serif">what anyone has collected</text>
  <text x="675" y="288" text-anchor="middle" font-size="12.5" fill="#555" font-family="-apple-system, sans-serif">most of the data does not exist yet</text>
  <text x="675" y="308" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">the work is expanding <tspan fill="#1a1a1a">out</tspan></text>
</svg>
<figcaption><b>Fig 2 &middot; Two opposite data problems.</b> Filtering is a search over data you already hold. Expanding is a search over data that does not exist yet &#8212; and something has to choose where to look next.</figcaption>
</figure>

You cannot filter your way out of a small circle. You have to grow it — and since every point costs a rig, an operator and an hour, the only question that matters is *which* point to add next. That is exactly what curiosity answers. Not a nicety, then: curiosity is the policy for spending a data budget when the data doesn't exist yet.

So the model I was designing that week was the smallest honest version of it — not a curious robot, just one that could *ask*, instead of carrying serenely on while the forks hit the floor. Working through it with Claude, somewhere in a thread about scoring a policy's confidence, it said: *by the way, have you heard of Meno's paradox? What you're describing is close to the problem Plato poses there.*

I had not. I was immediately curious to know more — and what followed was, honestly, a eureka moment.

## The other paradox

Every roboticist knows Moravec's paradox. The ranking of difficulty for machines is close to the *inverse* of the ranking for humans: symbolic reasoning took comparatively little to automate, while sensorimotor competence — gravel, a wet sock, a door handle you've never touched — consumed decades. Moravec's explanation was evolutionary. Perception and movement have been under optimization pressure for hundreds of millions of years and are enormously deep; abstract reasoning is a thin recent veneer that impresses us only because it feels effortful to *us*.

<figure class="figure">
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moravec's paradox: tasks easy for humans are hard for machines and vice versa">
  <defs>
    <marker id="ar-mv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#888"/>
    </marker>
  </defs>

  <text x="215" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="#1a1a1a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">FOR A HUMAN</text>
  <text x="685" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="#1a1a1a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">FOR A MACHINE</text>

  <!-- axes -->
  <line x1="215" y1="58" x2="215" y2="278" stroke="#e5e7eb" stroke-width="2"/>
  <line x1="685" y1="58" x2="685" y2="278" stroke="#e5e7eb" stroke-width="2"/>
  <text x="196" y="72" text-anchor="end" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">easy</text>
  <text x="196" y="276" text-anchor="end" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">hard</text>
  <text x="704" y="72" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">easy</text>
  <text x="704" y="276" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">hard</text>

  <!-- crossing lines -->
  <line x1="215" y1="95" x2="685" y2="245" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="215" y1="245" x2="685" y2="95" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>

  <!-- endpoints -->
  <circle cx="215" cy="95" r="6" fill="#2563eb"/>
  <circle cx="685" cy="245" r="6" fill="#2563eb"/>
  <circle cx="215" cy="245" r="6" fill="#b45309"/>
  <circle cx="685" cy="95" r="6" fill="#b45309"/>

  <!-- labels -->
  <text x="345" y="128" text-anchor="middle" font-size="14.5" font-weight="600" fill="#2563eb" font-family="-apple-system, sans-serif" transform="rotate(17.7 345 128)">Pick up a wet sock</text>
  <text x="345" y="222" text-anchor="middle" font-size="14.5" font-weight="600" fill="#b45309" font-family="-apple-system, sans-serif" transform="rotate(-17.7 345 222)">Prove a theorem</text>

  <text x="450" y="312" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">the ranking inverts &#8212; and the inversion is the whole paradox</text>
</svg>
<figcaption><b>Fig 3 &middot; Moravec's paradox.</b> The one every roboticist has heard a hundred times. It tells you which problems are hard. It says nothing about whether your robot knows it is failing at one.</figcaption>
</figure>

Moravec's paradox ranks tasks by difficulty. Meno's asks something else entirely — whether inquiry is possible at all. It is 2,300 years older, and I had never heard of it.

## Meno's paradox

The *Meno* opens with Meno asking Socrates whether virtue can be taught. They fail to define virtue, and Meno — irritated — throws a genuinely nasty objection at him:

> And how will you inquire into a thing, Socrates, when you are wholly ignorant of what it is? Which of the things you don't know will you set up as the target of your search? And even if you should stumble right onto it, how will you know that this is the thing you did not know?
>
> — *Meno*, 80d

It looks like sophistry. Sharpened into two horns it becomes genuinely hard:

- If you **already know** what you're looking for, there is nothing to look for. Inquiry is unnecessary.
- If you **don't know** what you're looking for, you have no criterion for recognizing it. You could trip over the answer and walk on. Inquiry is impossible.

<figure class="figure">
<svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Meno's paradox as a fork with two dead ends">
  <defs>
    <marker id="ar-dead" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4 Z" fill="#888"/>
    </marker>
  </defs>

  <!-- root -->
  <rect x="340" y="20" width="220" height="46" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="450" y="49" text-anchor="middle" font-size="14.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Seek what you do not know</text>

  <!-- branch lines -->
  <path d="M420,66 L420,96 L215,96 L215,124" fill="none" stroke="#888" stroke-width="1.8" marker-end="url(#ar-dead)"/>
  <path d="M480,66 L480,96 L685,96 L685,124" fill="none" stroke="#888" stroke-width="1.8" marker-end="url(#ar-dead)"/>

  <!-- left horn -->
  <rect x="60" y="130" width="310" height="44" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="215" y="158" text-anchor="middle" font-size="13.5" fill="#1a1a1a" font-family="-apple-system, sans-serif">Suppose you already know it</text>
  <path d="M215,174 L215,200" fill="none" stroke="#888" stroke-width="1.8" marker-end="url(#ar-dead)"/>
  <rect x="60" y="206" width="310" height="52" rx="8" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="215" y="237" text-anchor="middle" font-size="13.5" fill="#555" font-family="-apple-system, sans-serif">then there is nothing to seek</text>

  <!-- right horn -->
  <rect x="530" y="130" width="310" height="44" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="685" y="158" text-anchor="middle" font-size="13.5" fill="#1a1a1a" font-family="-apple-system, sans-serif">Suppose you do not know it</text>
  <path d="M685,174 L685,200" fill="none" stroke="#888" stroke-width="1.8" marker-end="url(#ar-dead)"/>
  <rect x="530" y="206" width="310" height="52" rx="8" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <text x="685" y="228" text-anchor="middle" font-size="13.5" fill="#555" font-family="-apple-system, sans-serif">then you cannot recognize it</text>
  <text x="685" y="246" text-anchor="middle" font-size="13.5" fill="#555" font-family="-apple-system, sans-serif">even if you find it</text>

  <!-- dead end -->
  <path d="M215,258 L215,282 L450,282" fill="none" stroke="#b45309" stroke-width="1.8"/>
  <path d="M685,258 L685,282 L450,282" fill="none" stroke="#b45309" stroke-width="1.8"/>
  <rect x="300" y="292" width="300" height="40" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="450" y="318" text-anchor="middle" font-size="14" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">&#8756; inquiry is impossible</text>
</svg>
<figcaption><b>Fig 4 &middot; Meno's paradox.</b> Two horns, no third door. Hold onto this diagram &#8212; we reopen it later, and the thing that reopens it is a metric.</figcaption>
</figure>

That right-hand horn is the exploration problem, stated exactly. A policy in a state it has never seen cannot know the state is one it has never seen; it has no representation of *unfamiliar*. It cannot search for the demonstration it is missing, because "the demonstration I am missing" is not a thing it can point at. It cannot ask for help, because asking requires knowing you need it. That — not compute, not data, not architecture — is why the design was hard.

## Socrates, a boy, and a square in the dirt

Socrates' answer to the paradox is not an argument. It's a demonstration, and it's the best part of the dialogue.

He calls over one of Meno's household slaves — a boy who has had no mathematical education whatsoever — draws a square in the dirt, and asks him to double it. Not to double the *side*: to produce a square with twice the *area*.

<figure class="figure">
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four panels: doubling the square, the boy's two wrong answers, and the diagonal solution">
  <!-- shared baseline so the four squares are comparable at a glance -->
  <line x1="45" y1="152" x2="855" y2="152" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"/>

  <!-- ============ PANEL 1 : side 2, area 4 ============ -->
  <text x="105" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#888" letter-spacing="1.2" font-family="-apple-system, sans-serif">1 &#183; THE TASK</text>
  <rect x="80" y="102" width="50" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="105" y="133" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">4</text>
  <text x="105" y="172" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">side 2</text>
  <text x="105" y="206" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;Now make me one</text>
  <text x="105" y="224" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">of area <tspan font-weight="700">8</tspan>.&#8221;</text>

  <!-- ============ PANEL 2 : side 4, area 16 ============ -->
  <text x="315" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#888" letter-spacing="1.2" font-family="-apple-system, sans-serif">2 &#183; CONFIDENT</text>
  <rect x="265" y="52" width="100" height="100" fill="none" stroke="#b45309" stroke-width="2"/>
  <line x1="315" y1="52" x2="315" y2="152" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>
  <line x1="265" y1="102" x2="365" y2="102" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>
  <rect x="265" y="52" width="50" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
  <text x="290" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">4</text>
  <text x="340" y="133" text-anchor="middle" font-size="15" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">16</text>
  <text x="315" y="172" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">side 4</text>
  <text x="315" y="206" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;Double the side!&#8221;</text>
  <text x="315" y="228" text-anchor="middle" font-size="12.5" fill="#b45309" font-weight="600" font-family="-apple-system, sans-serif">&#10007; four times over, not twice</text>

  <!-- ============ PANEL 3 : side 3, area 9 ============ -->
  <text x="525" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#888" letter-spacing="1.2" font-family="-apple-system, sans-serif">3 &#183; NUMBED</text>
  <rect x="488" y="77" width="75" height="75" fill="none" stroke="#b45309" stroke-width="2"/>
  <rect x="488" y="77" width="50" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
  <text x="513" y="108" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">4</text>
  <text x="549" y="144" text-anchor="middle" font-size="14" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">9</text>
  <text x="525" y="172" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">side 3</text>
  <text x="525" y="206" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;Then&#8230; side 3?&#8221;</text>
  <text x="525" y="228" text-anchor="middle" font-size="12.5" fill="#b45309" font-weight="600" font-family="-apple-system, sans-serif">&#10007; &#8220;I do not know.&#8221;</text>

  <!-- ============ PANEL 4 : the square on the diagonal, area 8 ============ -->
  <text x="735" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#888" letter-spacing="1.2" font-family="-apple-system, sans-serif">4 &#183; THE DIAGONAL</text>
  <rect x="685" y="52" width="100" height="100" fill="none" stroke="#e5e7eb" stroke-width="2"/>
  <line x1="735" y1="52" x2="735" y2="152" stroke="#2563eb" stroke-width="1" opacity="0.35"/>
  <line x1="685" y1="102" x2="785" y2="102" stroke="#2563eb" stroke-width="1" opacity="0.35"/>
  <!-- the four half-quadrants, each of area 2 -->
  <polygon points="735,52 735,102 685,102" fill="#2563eb" fill-opacity="0.20"/>
  <polygon points="735,52 785,102 735,102" fill="#2563eb" fill-opacity="0.11"/>
  <polygon points="735,102 785,102 735,152" fill="#2563eb" fill-opacity="0.20"/>
  <polygon points="735,102 685,102 735,152" fill="#2563eb" fill-opacity="0.11"/>
  <polygon points="735,52 785,102 735,152 685,102" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="716" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">2</text>
  <text x="754" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">2</text>
  <text x="754" y="126" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">2</text>
  <text x="716" y="126" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">2</text>
  <text x="735" y="172" text-anchor="middle" font-size="11.5" fill="#888" font-family="-apple-system, sans-serif">2 + 2 + 2 + 2</text>
  <text x="735" y="206" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;The square on</text>
  <text x="735" y="224" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">the diagonal.&#8221;</text>
  <text x="735" y="246" text-anchor="middle" font-size="12.5" fill="#2563eb" font-weight="600" font-family="-apple-system, sans-serif">&#10003; exactly 8</text>

  <!-- separators -->
  <line x1="210" y1="42" x2="210" y2="258" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="420" y1="42" x2="420" y2="258" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="630" y1="42" x2="630" y2="258" stroke="#e5e7eb" stroke-width="1"/>

  <text x="450" y="284" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">Socrates never states the answer. He asks questions, and lets the boy walk into his own error.</text>
</svg>
<figcaption><b>Fig 5 &middot; The slave boy, <i>Meno</i> 82b&#8211;85b.</b> Panel 4: the square built on the diagonal is cut by the original grid into four half-quadrants, each half of a 2&times;2 square &#8212; 4 &times; 2 = 8. The reader sees it rather than takes it on faith. That is the point of the whole exercise.</figcaption>
</figure>

The boy answers instantly and wrongly: *double the side.* Socrates draws it, and the boy sees his four-by-four square is not twice the original but four times it. Fine — the boy tries three. That gives nine, which is closer, and still wrong. And now something happens that Socrates flags explicitly as the turning point (84a–c): the boy stops guessing. He says he does not know.

Socrates makes Meno admit that the boy is *better off* in this state than he was five minutes earlier:

> He did not know before... but he thought he knew, and answered confidently as if he knew, and did not think himself at a loss. Now he does think himself at a loss, and as he does not know, neither does he think he knows... We have made him ready to find out.

Read that again as an engineer. Nothing was added to the boy — no new fact, no demonstration, no gradient step. What changed is that his confidence came into agreement with his competence, and Socrates' claim is that *this alone* made him teachable. Socrates' own image for what he does is a torpedo fish, numbing whatever it touches. The numbing isn't a step on the way to learning; it is the precondition for it.

Which is the design document I had been fumbling toward all week. "Knows it does not know" and "therefore asks" are not two features. They are one, and the ancient version is better specified than mine was.

Only after the boy is genuinely stuck does Socrates draw the diagonal — and the boy sees it himself.

## True opinion, and the statues that run away

The dialogue's other gift, at 97a–98a, is the most useful thing I have read about model evaluation.

Socrates asks what makes knowledge better than merely-correct belief. A man who knows the road to Larissa will guide you there; a man who has never been but happens to hold a *true opinion* about the road will guide you there just as well. For the trip, they are indistinguishable. A true opinion — *orthē doxa* — is as good a guide as knowledge.

Right up until it isn't. Because true opinions, Socrates says, will not stay:

> True opinions are a fine thing and do all sorts of good so long as they stay in their place, but they will not stay long. They run away from a man's mind; so they are not worth much until you tether them by an account of the reason why.

The image is the statues of Daedalus, which legend held were carved so lifelike they would walk off if you didn't tie them down. An untethered true opinion is a statue on a plinth: perfectly correct, perfectly convincing, gone tomorrow. What converts it into knowledge — *epistēmē* — is *aitias logismos*, an account of the reason why. You know why it is true, so it stays put when circumstances move.

<figure class="figure">
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An untethered statue walking off its plinth beside a tethered statue that stays">
  <!-- ===== LEFT: untethered ===== -->
  <text x="225" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309" letter-spacing="1" font-family="-apple-system, sans-serif">TRUE OPINION &#8212; UNTETHERED</text>

  <!-- ghost of where it was -->
  <g opacity="0.22">
    <circle cx="150" cy="120" r="13" fill="none" stroke="#888" stroke-width="2"/>
    <path d="M150,133 L150,186" stroke="#888" stroke-width="2" stroke-linecap="round"/>
    <path d="M150,148 L128,168 M150,148 L172,168" stroke="#888" stroke-width="2" stroke-linecap="round"/>
    <path d="M150,186 L136,224 M150,186 L164,224" stroke="#888" stroke-width="2" stroke-linecap="round"/>
  </g>
  <!-- motion trail -->
  <path d="M172,175 C205,168 232,172 258,178" fill="none" stroke="#b45309" stroke-width="1.6" stroke-dasharray="4 5" opacity="0.75"/>
  <!-- statue mid-stride, off plinth -->
  <g>
    <circle cx="286" cy="112" r="13" fill="none" stroke="#b45309" stroke-width="2.2"/>
    <path d="M286,125 L282,180" stroke="#b45309" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M285,140 L258,152 M285,140 L312,130" stroke="#b45309" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M282,180 L262,222 M282,180 L308,216" stroke="#b45309" stroke-width="2.2" stroke-linecap="round"/>
  </g>
  <!-- plinth (empty) -->
  <rect x="118" y="228" width="64" height="14" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <rect x="106" y="242" width="88" height="10" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.5"/>
  <line x1="60" y1="252" x2="390" y2="252" stroke="#e5e7eb" stroke-width="2"/>
  <text x="225" y="284" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">Correct here. Correct today. Gone the moment</text>
  <text x="225" y="302" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">anything you did not name in the demo changes.</text>

  <!-- divider -->
  <line x1="450" y1="40" x2="450" y2="300" stroke="#e5e7eb" stroke-width="1"/>

  <!-- ===== RIGHT: tethered ===== -->
  <text x="675" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb" letter-spacing="1" font-family="-apple-system, sans-serif">KNOWLEDGE &#8212; TETHERED</text>

  <g>
    <circle cx="675" cy="120" r="13" fill="none" stroke="#2563eb" stroke-width="2.2"/>
    <path d="M675,133 L675,186" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M675,148 L651,168 M675,148 L699,168" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M675,186 L660,224 M675,186 L690,224" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>
  </g>
  <!-- ropes -->
  <path d="M654,166 C620,192 600,220 578,246" fill="none" stroke="#2563eb" stroke-width="1.5" opacity="0.7"/>
  <path d="M696,166 C730,192 750,220 772,246" fill="none" stroke="#2563eb" stroke-width="1.5" opacity="0.7"/>
  <path d="M661,222 C640,232 622,240 604,246" fill="none" stroke="#2563eb" stroke-width="1.5" opacity="0.7"/>
  <path d="M689,222 C710,232 728,240 746,246" fill="none" stroke="#2563eb" stroke-width="1.5" opacity="0.7"/>
  <!-- pins -->
  <circle cx="578" cy="248" r="3.5" fill="#2563eb"/>
  <circle cx="772" cy="248" r="3.5" fill="#2563eb"/>
  <circle cx="604" cy="248" r="3.5" fill="#2563eb"/>
  <circle cx="746" cy="248" r="3.5" fill="#2563eb"/>
  <!-- plinth -->
  <rect x="643" y="228" width="64" height="14" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <rect x="631" y="242" width="88" height="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="510" y1="252" x2="840" y2="252" stroke="#e5e7eb" stroke-width="2"/>
  <text x="675" y="284" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">Bound by an account of the reason why</text>
  <text x="675" y="302" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">&#8212; aitias logismos. It stays.</text>
</svg>
<figcaption><b>Fig 6 &middot; The statues of Daedalus, <i>Meno</i> 97d&#8211;98a.</b> Both statues are correct. Only one of them is still there tomorrow.</figcaption>
</figure>

## Five tethers

Socrates' remedy is to tether the opinion — to tie it down with an account of the reason why. A policy cannot recite an account, so its version has to be operational: a list of things you change that *should not matter*. A policy holding real knowledge is indifferent to all of them. Each one you leave unmeasured is a rope you never tied.

I'd propose five, and they are cheap to state. **Stability**: change what should not matter perceptually — the lighting, the distractors, the camera pose, this mug for that mug — and see whether the policy even notices. **Transfer**: change the instance but not the type, a drawer it has never opened, and see whether it solved the problem or memorised the episode. **Recovery**: disturb it mid-episode — slip the grasp, shove the target, move the goal — and see whether it re-plans or carries on regardless. **Foresight**: make it say what its next action will do *before* it does it, and score the prediction rather than the outcome. **Humility**: score whether its confidence tracks its competence, which is the only one that asks the policy about itself rather than about the world.

<figure class="figure">
<svg viewBox="0 0 900 410" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A statue held down by five labelled tethers">
  <!-- ropes (drawn first, so the statue sits on top) -->
  <path d="M436,152 C392,132 332,118 288,113" fill="none" stroke="#2563eb" stroke-width="1.7" opacity="0.6"/>
  <path d="M464,152 C508,132 568,118 612,113" fill="none" stroke="#2563eb" stroke-width="1.7" opacity="0.6"/>
  <path d="M424,202 C382,220 332,240 288,250" fill="none" stroke="#2563eb" stroke-width="1.7" opacity="0.6"/>
  <path d="M476,202 C518,220 568,240 612,250" fill="none" stroke="#2563eb" stroke-width="1.7" opacity="0.6"/>
  <path d="M450,306 L450,334" fill="none" stroke="#2563eb" stroke-width="1.7" opacity="0.6"/>

  <!-- plinth + statue -->
  <rect x="405" y="273" width="90" height="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <rect x="416" y="260" width="68" height="13" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="450" cy="150" r="15" fill="#ffffff" stroke="#2563eb" stroke-width="2.4"/>
  <path d="M450,165 L450,222" stroke="#2563eb" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M450,181 L424,202 M450,181 L476,202" stroke="#2563eb" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M450,222 L433,258 M450,222 L467,258" stroke="#2563eb" stroke-width="2.4" stroke-linecap="round"/>
  <text x="450" y="296" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">the policy</text>

  <!-- pins -->
  <circle cx="280" cy="112" r="4" fill="#2563eb"/>
  <circle cx="620" cy="112" r="4" fill="#2563eb"/>
  <circle cx="280" cy="251" r="4" fill="#2563eb"/>
  <circle cx="620" cy="251" r="4" fill="#2563eb"/>
  <circle cx="450" cy="340" r="4" fill="#2563eb"/>

  <!-- STABILITY -->
  <text x="266" y="100" text-anchor="end" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Stability</text>
  <text x="266" y="118" text-anchor="end" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">move the lamp, the mug, the camera</text>
  <text x="266" y="134" text-anchor="end" font-size="11.5" fill="#b45309" font-family="-apple-system, sans-serif">without it: <tspan font-weight="600">the Parrot</tspan></text>

  <!-- TRANSFER -->
  <text x="634" y="100" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Transfer</text>
  <text x="634" y="118" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">same skill, an object it never saw</text>
  <text x="634" y="134" font-size="11.5" fill="#b45309" font-family="-apple-system, sans-serif">without it: <tspan font-weight="600">the One-Trick Pony</tspan></text>

  <!-- RECOVERY -->
  <text x="266" y="239" text-anchor="end" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Recovery</text>
  <text x="266" y="257" text-anchor="end" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">shove it mid-episode; can it re-plan?</text>
  <text x="266" y="273" text-anchor="end" font-size="11.5" fill="#b45309" font-family="-apple-system, sans-serif">without it: <tspan font-weight="600">the Glass Dancer</tspan></text>

  <!-- FORESIGHT -->
  <text x="634" y="239" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Foresight</text>
  <text x="634" y="257" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">&#8220;if I do this, then what?&#8221; &#8212; before doing it</text>
  <text x="634" y="273" font-size="11.5" fill="#b45309" font-family="-apple-system, sans-serif">without it: <tspan font-weight="600">the Sleepwalker</tspan></text>

  <!-- HUMILITY -->
  <text x="450" y="362" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Humility</text>
  <text x="450" y="380" text-anchor="middle" font-size="11.5" fill="#555" font-family="-apple-system, sans-serif">is its confidence calibrated to its competence?</text>
  <text x="450" y="398" text-anchor="middle" font-size="11.5" fill="#b45309" font-family="-apple-system, sans-serif">without it: <tspan font-weight="600">the Confident Fool</tspan> &#8212; and this is the load-bearing rope</text>
</svg>
<figcaption><b>Fig 7 &middot; Five tethers.</b> Report them as a vector, never a scalar. If you must have one number, take the <i>geometric</i> mean &#8212; so that a single untied rope cannot be averaged away by four good ones.</figcaption>
</figure>

Four of these are about robustness. The fifth is different in kind, and it is the boy at 84a: **Humility** is the tether that makes the other four improvable, because it is the only one that tells the robot something about itself.

## A success rate is a count of true opinions

Now hold the number we actually ship against those five ropes, and count how many it ties. None.

A success rate is a count of true opinions. Run N episodes, count the wins, report a percentage. That number is the road to Larissa: it tells you the policy got there *this time*. It cannot distinguish a policy that has learned to solve a **type** of problem from one holding a lucky, memorized solution to **these particular episodes** — both produce identical numbers. One bit per episode, sampled suspiciously close to the training data, and quoted to two decimal places.

Every robot in every demo video is a statue on a plinth: beautifully lifelike, genuinely correct, and — the moment someone moves a lamp or starts the episode eight centimetres to the left — walked off in the night.

<div class="pull-quote">A success rate without context does not mean anything.</div>

<figure class="figure">
<svg viewBox="0 0 900 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two policies with identical 85 percent success rates but completely different tether profiles">
  <!-- ===== identical bars ===== -->
  <text x="230" y="26" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">POLICY A</text>
  <text x="650" y="26" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">POLICY B</text>

  <rect x="60" y="42" width="340" height="30" rx="6" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.2"/>
  <rect x="60" y="42" width="289" height="30" rx="6" fill="#2563eb"/>
  <text x="204" y="63" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff" font-family="-apple-system, sans-serif">85% success</text>

  <rect x="480" y="42" width="340" height="30" rx="6" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.2"/>
  <rect x="480" y="42" width="289" height="30" rx="6" fill="#2563eb"/>
  <text x="624" y="63" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff" font-family="-apple-system, sans-serif">85% success</text>

  <text x="450" y="100" text-anchor="middle" font-size="13.5" fill="#888" font-family="-apple-system, sans-serif">Indistinguishable on the slide. The difference is in the ropes.</text>

  <!-- ===== pentagon A ===== -->
  <polygon points="230,175 310.8,233.7 280,328.8 180,328.8 149.2,233.7" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
  <polygon points="230,217.5 270.4,246.9 255,294.4 205,294.4 189.6,246.9" fill="none" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="230" y1="260" x2="230" y2="175" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="230" y1="260" x2="310.8" y2="233.7" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="230" y1="260" x2="280" y2="328.8" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="230" y1="260" x2="180" y2="328.8" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="230" y1="260" x2="149.2" y2="233.7" stroke="#e5e7eb" stroke-width="1"/>
  <polygon points="230,190.3 291.4,240 265.5,308.8 190,315 170.2,240.6" fill="#2563eb" fill-opacity="0.18" stroke="#2563eb" stroke-width="2.2"/>
  <circle cx="230" cy="190.3" r="3" fill="#2563eb"/><circle cx="291.4" cy="240" r="3" fill="#2563eb"/><circle cx="265.5" cy="308.8" r="3" fill="#2563eb"/><circle cx="190" cy="315" r="3" fill="#2563eb"/><circle cx="170.2" cy="240.6" r="3" fill="#2563eb"/>

  <text x="230" y="165" text-anchor="middle" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Stability</text>
  <text x="320" y="230" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Transfer</text>
  <text x="288" y="345" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Recovery</text>
  <text x="172" y="345" text-anchor="end" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Foresight</text>
  <text x="140" y="230" text-anchor="end" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Humility</text>
  <text x="230" y="378" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb" font-family="-apple-system, sans-serif">Tethered</text>
  <text x="230" y="398" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">still 85% in a kitchen it</text>
  <text x="230" y="414" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">has never entered</text>

  <!-- ===== pentagon B ===== -->
  <polygon points="650,175 730.8,233.7 700,328.8 600,328.8 569.2,233.7" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
  <polygon points="650,217.5 690.4,246.9 675,294.4 625,294.4 609.6,246.9" fill="none" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="650" y1="260" x2="650" y2="175" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="650" y1="260" x2="730.8" y2="233.7" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="650" y1="260" x2="700" y2="328.8" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="650" y1="260" x2="600" y2="328.8" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="650" y1="260" x2="569.2" y2="233.7" stroke="#e5e7eb" stroke-width="1"/>
  <polygon points="650,181.8 661.3,256.3 660,273.8 646.5,264.8 637.1,255.8" fill="#b45309" fill-opacity="0.18" stroke="#b45309" stroke-width="2.2"/>
  <circle cx="650" cy="181.8" r="3" fill="#b45309"/><circle cx="661.3" cy="256.3" r="3" fill="#b45309"/><circle cx="660" cy="273.8" r="3" fill="#b45309"/><circle cx="646.5" cy="264.8" r="3" fill="#b45309"/><circle cx="637.1" cy="255.8" r="3" fill="#b45309"/>

  <text x="650" y="165" text-anchor="middle" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Stability</text>
  <text x="740" y="230" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Transfer</text>
  <text x="708" y="345" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Recovery</text>
  <text x="592" y="345" text-anchor="end" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Foresight</text>
  <text x="560" y="230" text-anchor="end" font-size="10.5" fill="#555" font-family="-apple-system, sans-serif">Humility</text>
  <text x="650" y="378" text-anchor="middle" font-size="13" font-weight="700" fill="#b45309" font-family="-apple-system, sans-serif">A statue</text>
  <text x="650" y="398" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">85% on the rehearsed set,</text>
  <text x="650" y="414" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">and nowhere else on Earth</text>
</svg>
<figcaption><b>Fig 8 &middot; The same number, two different objects.</b> Policy B is not a worse version of Policy A. It is a different kind of thing, and the headline metric is structurally incapable of telling them apart.</figcaption>
</figure>

Policy B has a name in this piece: it is the dishwasher failure from the opening, caught in the act. High success rate on its task, steady on the scenes it was scored on — and, as the rest of this section shows, no Foresight, no Recovery, no Humility. The basket was hooked on one finger, with the load never centred over the contact.

We scored that episode a failure, for the record. Someone was watching, and forks on the floor are hard to miss.

But notice how little comfort that should give. **We caught it by luck.** There was no initial condition we could set to make it happen again, no seed to replay, no flag in the harness that says *the load shifted mid-trajectory*. And a failure you cannot reproduce cannot be measured at all — you cannot put a rate on it, A/B a fix against it, or certify anything with respect to it. The aggregate here isn't a weak instrument. It is blind, and it stays blind however many episodes you run, because nothing in the protocol ever *asks* for the disturbance.

Now put it next to the slave boy. He also produced a confident wrong answer — and at the moment it failed, *something in him changed state.* He stopped. He said **I do not know.** Socrates thought that moment was the whole ball game, and I have come to agree, having now watched the alternative at close range: the robot's answer failed in precisely the same way and **nothing in it changed state at all.** It could not stop, because stopping requires noticing, and noticing was not among the things we trained.

One rollout, three missing tethers. **Foresight**: it could not predict that a one-finger grasp on an off-centre load would swing. **Recovery**: once the load shifted, it had no behaviour for re-grasping or re-planning — there was no branch to take. **Humility**: the failure moved its confidence by not one hair. And it is missing them in the most expensive way available: silently, in a mode no aggregate over clean rollouts can see.

## Meno's paradox, answered by a metric

That last rope — Humility, the one the basket rollout never moved — is also the one that unties the paradox. Go back to Fig 4, the fork with no third door.

Socrates escaped it by insisting the answer was already in the boy. I'd escape it with **calibration**, and this is the genuinely useful idea in the whole essay.

The right-hand horn says you cannot search for what you do not know, because you cannot recognize it. True — *but you do not have to recognize the answer in order to recognize the question.* A policy cannot know the correct action in a novel state; that horn holds. What a calibrated policy *can* know is that **this state is one where its own confidence is low**. Not knowledge of the answer. Knowledge of the boundary.

And a boundary is enough, because it converts an impossible search into a request:

<figure class="figure">
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The paradox reopened: calibration turns the dead end into a request-and-learn loop">
  <defs>
    <marker id="ar-live" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4 Z" fill="#2563eb"/>
    </marker>
    <marker id="ar-fade" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4 Z" fill="#c8c8c8"/>
    </marker>
  </defs>

  <!-- faded dead ends -->
  <g opacity="0.4">
    <rect x="40" y="30" width="230" height="38" rx="8" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.4"/>
    <text x="155" y="54" text-anchor="middle" font-size="12.5" fill="#888" font-family="-apple-system, sans-serif">you already know it</text>
    <path d="M155,68 L155,96" stroke="#c8c8c8" stroke-width="1.6" marker-end="url(#ar-fade)"/>
    <text x="155" y="116" text-anchor="middle" font-size="12" fill="#888" font-family="-apple-system, sans-serif">nothing to seek</text>

    <rect x="630" y="30" width="230" height="38" rx="8" fill="#f8f9fa" stroke="#e5e7eb" stroke-width="1.4"/>
    <text x="745" y="54" text-anchor="middle" font-size="12.5" fill="#888" font-family="-apple-system, sans-serif">you do not know it</text>
    <path d="M745,68 L745,96" stroke="#c8c8c8" stroke-width="1.6" marker-end="url(#ar-fade)"/>
    <text x="745" y="116" text-anchor="middle" font-size="12" fill="#888" font-family="-apple-system, sans-serif">cannot recognize it</text>
  </g>

  <!-- the third door -->
  <text x="450" y="34" text-anchor="middle" font-size="11.5" font-weight="700" fill="#2563eb" letter-spacing="1.2" font-family="-apple-system, sans-serif">THE THIRD DOOR</text>

  <rect x="330" y="48" width="240" height="52" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="450" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#1a1a1a" font-family="-apple-system, sans-serif">Know the boundary</text>
  <text x="450" y="89" text-anchor="middle" font-size="12" fill="#555" font-family="-apple-system, sans-serif">of your own knowledge</text>

  <!-- loop -->
  <path d="M450,100 L450,132" stroke="#2563eb" stroke-width="2" marker-end="url(#ar-live)"/>
  <rect x="310" y="138" width="280" height="40" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.6"/>
  <text x="450" y="163" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;I do not know <tspan font-style="italic">this</tspan> state.&#8221;</text>

  <path d="M450,178 L450,204" stroke="#2563eb" stroke-width="2" marker-end="url(#ar-live)"/>
  <rect x="310" y="210" width="280" height="40" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.6"/>
  <text x="450" y="235" text-anchor="middle" font-size="13" fill="#1a1a1a" font-family="-apple-system, sans-serif">&#8220;Show me, starting from here.&#8221;</text>

  <!-- return arc -->
  <path d="M590,230 C700,224 720,150 640,88 C610,66 594,60 574,58" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#ar-live)"/>
  <rect x="612" y="162" width="176" height="38" rx="5" fill="#ffffff"/>
  <text x="700" y="178" text-anchor="middle" font-size="11.5" font-weight="600" fill="#2563eb" font-family="-apple-system, sans-serif">one demonstration,</text>
  <text x="700" y="194" text-anchor="middle" font-size="11.5" font-weight="600" fill="#2563eb" font-family="-apple-system, sans-serif">exactly where it was needed</text>

  <text x="450" y="278" text-anchor="middle" font-size="13" fill="#555" font-family="-apple-system, sans-serif">You cannot search for the answer. You can point at the question &#8212; and that is enough.</text>
</svg>
<figcaption><b>Fig 9 &middot; The paradox, inverted into an interface.</b> This is the same move Socrates makes on the boy at 84a: the numbing comes first, and it is what makes the next demonstration land.</figcaption>
</figure>

The robot that knows what it doesn't know can ask for precisely the experience that converts its next true opinion into knowledge. Inquiry bootstraps. It just needed the boundary, not the answer.

And that is the curious robot I wanted at the top, arrived at from an unexpected direction. Curiosity is not a drive you add to a policy; it is what a calibrated policy *does* once it can feel its own edge. It is also how you grow a small circle: every question is one deliberate step outward, chosen rather than stumbled into. All of it is downstream of that one measurement.

## 闻 heard, 说 inferred, 亲 lived — and the two we aren't scaling

Calibration tells a policy where its knowledge stops. It says nothing about how the knowledge got there — and for the slave boy, that is the more interesting question. He had never studied geometry. So where did his answers come from at all, the wrong ones included? Something in him was already equipped to have opinions about area before anybody asked him one.

Plato's answer is that nothing came from anywhere. The knowledge was always in the boy; Socrates only drew it out. Learning is extraction, not insertion — and it is a beautiful answer that is no use to us whatever, because it helps itself to the soul. Nobody hands us a prior that is already there and merely needs reminding. **We have to build the soul first.** Which turns the question into an engineering one: what do we build it out of?

The Mohists in China, working the same centuries, asked precisely that — not where knowledge ultimately originates, but by which *route* a given piece of it arrived, and whether the route decides if it stays put. Two traditions on the same seam, and the Mohist answer maps onto our training stack with a precision I find hard to dismiss as coincidence.

The 《墨经》 classifies knowledge by **where it came from**: 闻 *wén*, what you were told; 说 *shuō*, what you worked out by inference — the thinking axis; 亲 *qīn*, what you came to know by direct personal contact with the thing.

One caveat, because the line is a spectrum rather than a wall. You could fairly argue that a teleop log, or a recording from a UMI-style handheld gripper rig — a robot end-effector on a stick — is *experience* rather than somebody else's testimony: the trajectory is in the robot's own action space, and the forces are the ones its body would have felt. First-person in every sensorimotor sense.

What makes it 闻 anyway is not sensor fidelity. It is that the robot did not choose it, did not act it, and cannot ask it a follow-up. **亲 is defined by agency, not by resolution.** And the difference bites: a policy that chooses its own actions finds out where *its own* errors lie, while a demonstration only ever shows the path an expert already selected. That is why behaviour cloning compounds error, and most of why DAgger exists. In a demonstration the human is doing the exploring on the robot's behalf — and whether that transfers depends entirely on how well a person can guess what a policy doesn't know.

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
<figcaption><b>Fig 10 &middot; Three sources, one axis scaled.</b> 闻 is not bounded by how much teleop anyone can afford &#8212; glasses, gripper rigs and video are 闻 too. 说 and 亲 are bounded by nothing but our willingness to build them.</figcaption>
</figure>

Read that as a roadmap and the conclusion is uncomfortable. We have spent the decade scaling 闻 — more data, more demos, more logs — and 闻 is *precisely the source that produces true opinion.* It is testimony: the road to Larissa described by someone else. It will get you there, and it will not stay. The other two axes are barely scaled at all, and they are exactly the tethers that were missing — 说 (thinking) is Foresight, 亲 (experience) is Recovery. Scaling data alone cannot produce *epistēmē*, because *epistēmē* is not made of testimony.

It is worth being concrete about how little 说 is really scaled, because the field looks busier on this axis than it is. A VLA maps observation to action. There is no deliberation anywhere in that loop: the model that acts does not reason about what its action is about to do. The standard fix has been to bolt a System 2 on top — a separate reasoning model that plans, hands a subgoal down to a System 1 policy, and then gets out of the way. **Two standalone models, with the thinking sitting upstream of the acting rather than inside it.** Even world-action models, which at least carry a predictive component, mostly spend it generating a plan rather than checking one mid-execution.

Which is precisely why nothing caught the basket. Whatever System 2 was involved had finished thinking before the load ever shifted, and System 1 does not think. Nobody is scaling 说 *in the loop*; we are scaling a preamble.

And the split is not a principled architecture. It is a budget. Robots close their control loop at tens of Hz, and you cannot run a large reasoning model inside that window — so the thinking gets moved somewhere it can take its time, which means off the loop and upstream. The blocker on 说 was never a shortage of ideas about deliberation. It is **compute per action**.

<div class="pull-quote">Nobody has seriously scaled the compute axis in robotics action models.</div>

There are two ways out of that, and the first is oddly under-explored: **let the thinking run in parallel with the acting.** Not a preamble that finishes before the arm moves, and not a monolith that has to complete inside one control step — a slower deliberative process running concurrently, at its own rate, watching the same stream the controller sees, with standing authority to interrupt. The policy keeps acting at 50 Hz. The thinking lands when it lands, and when it disagrees, it preempts.

That is roughly what a person does carrying an awkward load: the hands keep going while something slower notices the thing is tipping and takes over. And it quietly changes the requirement. Deliberation no longer has to beat the control period — only the time it takes for a failure to become unrecoverable. For a basket sliding off one finger that is a few hundred milliseconds, which is an enormously easier target than twenty.

The second way out is to make the model itself cheaper, and it is strange how few people are digging there. Enormous effort goes into scaling parameters and data; almost none goes into **the compute efficiency of a robotics foundation model** — making it cheap enough per step that deliberation fits inside the control budget. And robotics is where that work would pay off first: a robot carries its compute with it, on a battery, against a hard control deadline. There is no larger cluster to phone. Distillation, sparsity and routing, adaptive depth, caching across timesteps, chunking that amortises one forward pass over many actions — unglamorous work, and it is most of what stands between us and a single model that thinks *and* acts at practical latency.

And notice what falls out if you get it. The sane way to spend a variable compute budget is to think longer exactly where you are least sure — which means adaptive compute and the Humility tether are the same signal, read twice. A calibrated policy doesn't only know when to ask a human. It knows when to think.

### Recollection, in three traditions

We left Plato's answer hanging, so pick it back up: if a policy's content is all testimony, put there by somebody else, where does it actually live — and what does *learning* mean when nothing new goes in?

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
<figcaption><b>Fig 11 &middot; Anamnesis as a pretraining story.</b> The correspondence is uncomfortably good &#8212; which is exactly why the disanalogy at the bottom matters.</figcaption>
</figure>

Anyone who has watched a hundred-shot finetune "teach" a model a skill it visibly already had recognises this: we are not writing the capability in, we are addressing something already in the weights — the way Socrates addresses geometry already in the boy.

Where the pictures come apart matters more. Plato's soul is *true by construction* — it saw the Forms, so whatever you recollect is knowledge. A checkpoint ate the internet and a pile of teleop logs, so recollection returns whatever was statistically dominant, which may be right and may be a fluent, beautifully-formed mistake. And unlike Plato's helpless newborn, it is already strikingly capable — which is precisely what makes its errors hard to see. A newborn's ignorance is legible across the room; a checkpoint's speaks in the same confident voice as its competence.

So the three line up: Plato's soul, Mozi's 闻, and a pretrained checkpoint are the same kind of object — a vast inheritance you did not earn, addressable by good questions, and true only as far as its source was. Which settles what a right answer is worth. Eliciting one is not evidence of knowledge. It is evidence of a true opinion, and we already know what those do.

### But how big can 闻 get?

Teleoperation is not the only way to collect 闻. A human wearing camera glasses while cooking dinner is producing it. So is someone holding one of those gripper rigs while they load a dishwasher, which hands you an end-effector trajectory with no robot in the room. So is every instructional video ever uploaded. There is three or four orders of magnitude more of this than there will ever be teleop, none of it costs robot time, and it scales the way corpora actually scale: by harvesting what already exists instead of manufacturing it. So scale it. This is the cheapest large win available.

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
<figcaption><b>Fig 12 &middot; Where 闻 actually comes from.</b> The abundant sources are the ones furthest from the robot&#8217;s own actions &#8212; and every marker on this chart is hollow, because people do not record themselves failing and recovering.</figcaption>
</figure>

But the axis does not change character when you make it bigger. Two structural facts hold across all of it.

**It is outside the body.** Video shows you what happened, not what it felt like or what force was applied — vision underdetermines contact. No quantity of head-cam footage would have told a policy how a basket hooked on one finger loads that finger.

**It is a corpus of successes.** This is the deeper one. People record themselves doing things that work. When it goes wrong it gets retaken, edited out, or never uploaded — and teleop is filtered the same way, because operators reset on failure and you keep the clean episode. So the naturally-occurring supply of 闻 is systematically missing precisely the material Recovery is made of.

Which gives *what should we collect?* a non-obvious answer: **collect against the grain of what people naturally record.** Deliberately capture the fumble and the save, not just the clean run. Keep the near-miss you would normally cut. Instrument for contact and force, not only pixels. Prefer sources where the action already lives in a frame the robot can use — the gripper-on-a-stick beats the head-cam, which beats the tutorial.

And then **label it properly**, the step that actually gets skipped. Footage of a fumble with no annotation of *what went wrong, when, and what fixed it* is worth little more than no footage. Recovery cannot be learned from an unlabelled pile of things going sideways; it has to be legible as a fumble followed by a save. A line I have started repeating to myself:

> There is no bad data. There is only badly labelled data.

Scale 闻 as hard as you can get away with. Just don't mistake a bigger circle for a tethered one. A million hours of things going right is a million true opinions.

Both traditions then insist on the same last thing — that the boundary of your knowledge is part of it:

<div class="zh-quote">
  <div class="zh">知之为知之，不知为不知，是知也。</div>
  <div class="py">zhī zhī wéi zhī zhī, bù zhī wéi bù zhī, shì zhì yě</div>
  <div class="en">When you know a thing, hold that you know it; when you do not know a thing, hold that you do not know it &#8212; <i>that</i> is knowledge.</div>
  <div class="src">Confucius, <i>Analects</i> 2.17</div>
</div>

That is not a proverb about modesty but a definition — the Humility tether stated 2,500 years early, with the *is* in "that is knowledge" doing structural work. A model whose confidence tracks its competence knows something a more accurate but uncalibrated model does not.

Two traditions, four centuries and six thousand miles apart, converging on the same test: **a correct answer is not evidence of knowledge. Surviving a changed world is.**

## How you would actually build one

Everything above is a diagnosis. The build starts where the dialogue does — with the boy.

### First: what does the boy actually have?

He gets from confident error to something worth calling knowledge in ten minutes, with no corpus and no gradient step. Can we buy that by scaling 闻? Two things get him there, and they scale very differently.

**The first is latent structure** — his lived sense of edges, area and halves, which Socrates addresses rather than installs. That is recollection, and **it does scale with 闻**: it is precisely what pretraining buys. Pile it on; the boy's prior is on sale.

**The second is a verifier.** His decisive move is not recall. Socrates draws the four-by-four square and the boy *sees that his own answer failed* — he can count it. In his own domain he has a cheap, unambiguous, human-free check.

**That half does not scale with 闻 at all.** More testimony gives you more recollectable content, not the recognition of error that converts it into knowledge; scale alone buys *more confident* wrong answers. It is why maths and code ran ahead in language models — not easier domains, just buildable checkers.

So the question was never *how much 闻 until the boy appears* but: **what is the robot's diagonal in the dirt?**

And manipulation is luckier than it looks, because the check already ran. **The forks hit the floor.** A visible, self-delivering contradiction, free of charge, requiring no judge. The robot had every sensor needed to register it; what it lacked was a prediction for the world to contradict, and anything at all that was looking.

Which is the whole build in one line. **说 (thinking) supplies the prediction; Humility notices the contradiction; 亲 (experience) buys the correction.** That is the *elenchus* — refutation by question, until the claim collapses — and the boy's state arrives domain by domain, as fast as you can construct the check, not off a scaling curve.

### Then: the build order

Five moves. They are not independent: **2** and **4** are what make the rest compound instead of merely accumulate.

**1. Stop shipping scalars.** Report the vector. A model card that says 85% without saying *held fixed: lighting, object set, initial pose, and the twelve scenes we also trained on* is a press release, not a result. This one is free this quarter, from the eval artifacts already on disk.

**2. Train Humility as an output, not a threshold.** Most uncertainty work is a post-hoc gate on whatever confidence signal falls out — a knob, not a capability. Make abstention something the policy is *trained to emit*, score its calibration, and charge a real penalty for wrong-and-certain — the failure that put three forks on the floor and moved its confidence by not one hair.

**3. Scale 说 alongside the action, not upstream of it.** Not a bigger System 2 handing plans down to an unchanged System 1, but deliberation running concurrently with the controller and free to interrupt it: *where is this load going — and is it still going there?* A world model consulted once at plan time is a research artifact; one that gates the next action is a tether. Adaptive depth is how you afford it.

**4. Scale 亲, and let the robot choose it.** The move nobody is making. Glasses and gripper sticks grow the circle cheaply, but every hour of that is still 闻. 亲 cannot be harvested; it has to be lived, in this body, including the parts that go wrong. So the question is not *how do we get more 亲* but *which 亲 is worth buying?* A calibrated robot answers that.

**5. Certify on the edges, not the average.** We don't license pilots on their pass rate over rehearsed routes, but on crosswinds, engine-out, and the judgment to declare a missed approach. Knowing when to go around *is* the licence. Whatever regime governs robots near people, it will not be a success rate.

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
<figcaption><b>Fig 13 &middot; The loop.</b> 闻 gets you a prior once. 说 and 亲 are what compound &#8212; and the robot&#8217;s own calibrated ignorance is what decides where the expensive axis gets spent.</figcaption>
</figure>

Put **2** and **4** together and the robot starts *aiming its own data collection*. Its uncertainty is a map of its own boundary, and that map is the shopping list: **stop paying for a thousand more demonstrations of the drawer it already opens; buy the one demonstration of the drawer it doesn't.**

The honest counter-argument: while the circle is small, blind collection works fine — nearly any hour lands somewhere useful, and that is how the field got this far. But its yield falls as the circle grows while its cost stays flat; directed collection has the opposite curve. The waste is already visible: operators still recording the drawer the policy opens nine times in ten. Curiosity is not what makes your first ten thousand hours work; it is what makes the next hundred thousand worth buying.

<div class="zh-quote">
  <div class="zh">知行合一</div>
  <div class="py">zhī x&#237;ng h&#233; y&#299;</div>
  <div class="en">Knowledge and action are one. To know and not to act is not yet to know.</div>
  <div class="src">Wang Yangming (王阳明), 1472&#8211;1529</div>
</div>

Wang was arguing with scholars who could recite the classics and could not act on them, and refused to grant they knew anything. Not *incomplete* knowledge. Not knowledge. The only evidence of knowing is what you do in a situation **nobody rehearsed you for** — word for word, the specification for a robot in someone's kitchen.

Physical AGI will not arrive as a checkpoint that finally scores high enough; the number measures the wrong category of thing. It will arrive as a machine that can tell you where its knowledge stops, ask for precisely what it is missing, and act differently tomorrow because of what you showed it today. **Build the boundary first; the competence compounds behind it.**

I went looking for a way to make a robot ask for help and found the problem named, diagnosed and half-solved twenty-four centuries before anyone had a robot to ask it about. The paradox is real: you cannot search for what you do not know. The escape is smaller than it sounds. You never needed the answer.

Everything else is a statue.

---

Written by Jinyu Xie and Claude. The *Meno* came up in one of our design conversations; the argument was worked out across a good many more. Passages from the *Meno* are Plato, trans. W.K.C. Guthrie and G.M.A. Grube, lightly adapted. 闻/说/亲 are from the 《墨经》 (Mohist Canon), Warring States period.
