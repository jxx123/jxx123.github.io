"use strict";
/* viz_export static shim (prepended by apprentice.eval.viz_export — the live
   frontend is untouched): /api/* JSON routes map onto exported .json files;
   media URLs keep their file extension and pass through unchanged. */
(() => {
  const realFetch = window.fetch.bind(window);
  window.fetch = (path, ...rest) => {
    if (typeof path === "string" && path.startsWith("/api/")) {
      const rel = path.slice(1);
      path = /\.\w+$/.test(rel) ? rel : rel + ".json";
    }
    return realFetch(path, ...rest);
  };
})();
/* apprentice pipeline viz — API-driven frontend (backend: apps/viz/backend) */
"use strict";
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);
let ROUNDS = {}, PRED = {videos: [], stills: []}, ep = null;
let playing = null, actAnim = null;

const CEILING = 0.58;

$("pipe").innerHTML = ["frame+state+instr", "backbone (CPT)", "z tokens",
  "LAM decoder", "robot", "world model dv+verdict"]
  .map((s, i) => `<b class="${i === 1 || i === 2 ? "hot" : ""}">${s}</b>${i < 5 ? "→" : ""}`).join(" ");

function tokClass(t) {
  if (t.startsWith("<|sv") || t.startsWith("<|bostate") || t.startsWith("<|eostate") || t.startsWith("<|emb")) return "st";
  if (t.startsWith("<|z") || t.startsWith("<|boz") || t.startsWith("<|eoz")) return "z";
  if (t.startsWith("<|dv") || t.startsWith("<|bov") || t.startsWith("<|eov")) return "dv";
  if (t.startsWith("<|verdict")) return "vd";
  if (t.startsWith("<|")) return "ctl";
  return "tx";
}

function chips(el, toks, extra) {
  el.innerHTML = toks.map(t =>
    `<span class="tok ${extra || tokClass(t)}">${t.replace(/</g, "&lt;")}</span>`).join("");
  return [...el.querySelectorAll(".tok")];
}

async function api(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`${path}: ${r.status}`);
  return r.json();
}

async function init() {
  [ROUNDS, PRED] = await Promise.all([api("/api/rounds"), api("/api/predictions")]);
  const rsel = $("round");
  rsel.innerHTML = Object.keys(ROUNDS).map(r => `<option>${r}</option>`).join("");
  rsel.onchange = () => { fillEpisodes(); loadSelected(); };
  $("episode").onchange = loadSelected;
  $("play").onclick = () => ep && render();
  addEventListener("resize", () => { if (ep) { drawZ(); drawActs(true); } });
  fillEpisodes();
  loadSelected();
}

function fillEpisodes() {
  const eps = ROUNDS[$("round").value].episodes;
  // successes first — they are rarer and more interesting
  const sorted = [...eps].sort((a, b) =>
    (b.outcome === "succ") - (a.outcome === "succ") || a.idx - b.idx);
  $("episode").innerHTML = sorted.map(e =>
    `<option value="${e.idx}">${e.outcome === "succ" ? "✓" : "✗"} ${e.idx} · ${e.task.replaceAll("_", " ").slice(0, 34)}</option>`).join("");
}

async function loadSelected() {
  const round = $("round").value, idx = $("episode").value;
  try { ep = await api(`/api/episode/${round}/${idx}`); } catch { ep = null; return; }
  render();
}

function render() {
  $("instr").textContent = `“${ep.instruction}”`;

  initStepper();

  // dv grid — real ids color the first cells, filler completes the frame
  const dg = $("dvgrid"); dg.innerHTML = "";
  const cells = [];
  for (let i = 0; i < 256; i++) {
    const d = document.createElement("div");
    const id = ep.dv_next[i];
    d.style.background = id !== undefined
      ? `hsl(${[258, 262, 250, 268][id % 4]} 60% ${28 + (id % 37)}%)`
      : `hsl(256 30% ${18 + (i * 7) % 22}%)`;
    dg.appendChild(d); cells.push(d);
  }

  // prediction slot
  const slot = $("predslot");
  if (PRED.videos.length) {
    slot.innerHTML = PRED.videos.slice(0, 3).map(u => {
      const acc = (u.match(/acc([0-9.]+)/) || [])[1];
      return `<video class="pix" controls muted loop playsinline src="${u}"></video>
        <div class="note">imagination ${acc ? `· dv match ${(+acc * 100).toFixed(0)}%` : ""} — left observed, right model-imagined (Cosmos-decoded)</div>`;
    }).join("");
  } else if (PRED.stills.length) {
    slot.innerHTML = `<img class="frame" src="${PRED.stills[0]}">
      <div class="note">left: observed · right: model-predicted</div>`;
  } else {
    slot.innerHTML = `<div class="note tight">prediction render pending — the dv grid at left is
      this episode’s real token payload.</div>`;
  }

  // verdict panel: real running verdicts when the episode has them
  const rv = ep.running_verdicts || [];
  const final3 = ["ongoing", "success", "failure"];
  $("vdtokens").innerHTML = final3.map(k =>
    `<span class="tok vd" style="opacity:${rv.length ? (rv[rv.length - 1] === k ? 1 : .35) : (k === "ongoing" ? 1 : .35)}">&lt;|verdict_${k}|&gt;</span>`).join(" ");
  $("vdnote").textContent = rv.length
    ? `running self-verdicts: ${rv.join(" → ")} (truth: ${ep.success ? "success" : "failure"})`
    : ep.success
      ? "self-judged “ongoing” here (truth: success) — the class-prior collapse the balanced E-corpus targets."
      : "self-judged “ongoing” (truth: failure). This episode is now a verdict_failure training document.";

  const ob = $("outbadge");
  ob.className = "badge " + (ep.success ? "ok" : "fail");
  ob.textContent = ep.success ? "env label: SUCCESS" : "env label: FAILURE";

  // live scoreboard across all discovered rounds
  const rows = Object.entries(ROUNDS).reverse().map(([r, v]) => {
    const s = v.metrics.policy_success_rate;
    return s == null ? "" : bar(r, s, r === ep.round ? "var(--c-z)" : "#566080");
  }).join("");
  $("metrics").innerHTML = rows + bar("ceiling", CEILING, "var(--c-state)");

  drawZ(); drawActs(true);
  animate([], cells);
}

function bar(label, v, color) {
  return `<div class="metric"><span style="width:9ch">${label}</span>
    <div class="bar"><i style="width:${100 * v / CEILING}%;background:${color}"></i></div>
    <span>${(100 * v).toFixed(1)}%</span></div>`;
}

function animate(toks, cells) {
  if (playing) cancelAnimationFrame(playing);
  if (RM) { toks.concat(cells).forEach(t => t.classList.add("seen")); return; }
  toks.forEach(t => t.classList.remove("seen"));
  cells.forEach(c => c.classList.remove("seen"));
  let i = 0, j = 0; const t0 = performance.now();
  const step = now => {
    const k = Math.floor((now - t0) / 90);
    while (i < Math.min(k, toks.length)) toks[i++].classList.add("seen");
    const k2 = Math.floor((now - t0 - toks.length * 90) / 14);
    while (j < Math.min(Math.max(0, k2), cells.length)) cells[j++].classList.add("seen");
    if (i < toks.length || j < cells.length) playing = requestAnimationFrame(step);
    else drawActs();
  };
  playing = requestAnimationFrame(step);
}

function drawZ() {
  const c = $("ztrace"), x = c.getContext("2d");
  const W = c.width = c.clientWidth * 2, H = c.height = 240;
  x.clearRect(0, 0, W, H);
  const n = Math.max(ep.z.length, 1), bw = W / n;
  ep.z.forEach((z, i) => {
    x.fillStyle = i === chunk ? "#FFB03A" : `hsl(${(z * 47) % 360} 65% 45%)`;
    x.fillRect(i * bw + 1, H - 24 - (z + 1) * (H - 40) / 12, bw - 2, (z + 1) * (H - 40) / 12);
    if (i % 5 === 0) { x.fillStyle = "#8B96AD"; x.font = "18px ui-monospace"; x.fillText(i, i * bw + 2, H - 6); }
  });
  x.fillStyle = "#E4E9F4"; x.font = "20px ui-monospace"; x.fillText("z code per chunk →", 8, 22);
}

function drawActs(instant) {
  const c = $("acts"), x = c.getContext("2d");
  const W = c.width = c.clientWidth * 2, H = c.height = 420;
  const A = ep.actions, n = A.length, dims = A[0]?.length || 0;
  if (!dims) return;
  const cols = ["#4EC9E8", "#3FCF8E", "#FFB03A", "#FF5D73", "#9F8CFF", "#C9D4EA", "#7C6CFF"];
  let lim = 1e-6; A.forEach(r => r.forEach(v2 => lim = Math.max(lim, Math.abs(v2))));
  const draw = frac => {
    x.clearRect(0, 0, W, H);
    x.strokeStyle = "#232B3D"; x.beginPath(); x.moveTo(0, H / 2); x.lineTo(W, H / 2); x.stroke();
    for (let d = 0; d < dims; d++) {
      x.strokeStyle = cols[d % 7]; x.lineWidth = 2.4; x.beginPath();
      const m = Math.max(2, Math.floor(n * frac));
      for (let i = 0; i < m; i++) {
        const px = i / (n - 1) * W, py = H / 2 - (A[i][d] / lim) * (H / 2 - 18);
        i ? x.lineTo(px, py) : x.moveTo(px, py);
      }
      x.stroke();
    }
    x.fillStyle = "#8B96AD"; x.font = "18px ui-monospace";
    x.fillText(`4 steps per z chunk · ${dims} dims · normalized`, 8, H - 10);
    ep.action_names.forEach((nm, d) => {
      x.fillStyle = cols[d % 7]; x.fillText(nm, 8 + d * Math.max(90, W / dims / 1.6), 24);
    });
  };
  if (instant || RM) { draw(1); return; }
  if (actAnim) cancelAnimationFrame(actAnim);
  const t0 = performance.now();
  const tick = now => {
    const f = Math.min(1, (now - t0) / 2600); draw(f);
    if (f < 1) actAnim = requestAnimationFrame(tick);
  };
  actAnim = requestAnimationFrame(tick);
}

init();

/* ---- synchronized step player: chunk = 1 z = 4 actions = 4 frames ---- */
const FPS = 15, STEPS = 4;
let chunk = 0, auto = false;

function initStepper() {
  const v = $("stepvid");
  v.src = ep.video; chunk = 0; auto = false;
  $("st-auto").textContent = "⏵ auto";
  v.onloadedmetadata = () => showChunk(0, true);
  v.ontimeupdate = () => {
    if (!auto) return;
    const c = Math.min(Math.floor(v.currentTime * FPS / STEPS), ep.z.length - 1);
    if (c !== chunk) showChunk(c, false);
    if (v.ended || c >= ep.z.length - 1) setAuto(false);
  };
  $("st-next").onclick = () => { setAuto(false); showChunk(Math.min(chunk + 1, ep.z.length - 1), true); };
  $("st-prev").onclick = () => { setAuto(false); showChunk(Math.max(chunk - 1, 0), true); };
  $("st-reset").onclick = () => { setAuto(false); showChunk(0, true); };
  $("st-auto").onclick = () => setAuto(!auto);
}

function setAuto(on) {
  auto = on;
  const v = $("stepvid");
  $("st-auto").textContent = on ? "⏸ pause" : "⏵ auto";
  if (on) { if (v.ended) v.currentTime = 0; v.playbackRate = 0.5; v.play(); }
  else v.pause();
}

function showChunk(c, seek) {
  chunk = c;
  const v = $("stepvid");
  if (seek) v.currentTime = c * STEPS / FPS + 0.001;
  $("st-pos").textContent = `chunk ${c + 1}/${ep.z.length} · sim steps ${c * 4}–${c * 4 + 3}`;
  // context tokens AT THIS STEP: current frame + this chunk's real state bins
  const sv = (ep.sv_per_chunk && ep.sv_per_chunk[c]) || ep.sv_tokens;
  const hist = ep.z.slice(Math.max(0, c - 6), c).map(z => `<|z_${z}|>`);
  const ctxEl = $("stepctx");
  ctxEl.innerHTML =
    `<span class="tok vis seen">[frame t=${c * 4}]</span>` +
    chips(document.createElement("div"), sv).map(t => t.outerHTML).join("") +
    `<span class="tok tx seen">“${ep.instruction}”</span>` +
    `<span class="tok ctl seen">&lt;|outcome_success|&gt;</span>` +
    (hist.length ? `<span class="note"> …prior z: </span>` +
      hist.map(t => `<span class="tok z seen z-hist">${t.replace(/</g, "&lt;")}</span>`).join("") : "") +
    `<span class="tok ctl seen">&lt;|boz|&gt;</span>` +
    `<span class="tok z seen" style="font-size:.95rem">&lt;|z_${ep.z[c]}|&gt;</span>` +
    `<span class="gencur"></span>`;
  ctxEl.querySelectorAll(".tok").forEach(t => t.classList.add("seen"));
  // decoder box: z + state + latent -> 4 actions
  $("stepdec").innerHTML =
    `<span class="tok z seen">&lt;|z_${ep.z[c]}|&gt;</span><span class="arrow">＋</span>` +
    `<span class="box st">state s${c * 4}</span><span class="arrow">＋</span>` +
    `<span class="box dv">frame latent</span><span class="arrow">→ ZDecoder →</span>` +
    `<span class="box">4 raw actions ↓</span>`;
  drawStepActs(c); drawZ(); drawActsCursor(c);
}

function drawStepActs(c) {
  const cv = $("stepacts"), x = cv.getContext("2d");
  const W = cv.width = cv.clientWidth * 2, H = cv.height = 300;
  x.clearRect(0, 0, W, H);
  const rows = ep.actions.slice(c * 4, c * 4 + 4);
  const dims = rows[0]?.length || 0;
  let lim = 1e-6; ep.actions.forEach(r => r.forEach(v2 => lim = Math.max(lim, Math.abs(v2))));
  const cols = ["#4EC9E8", "#3FCF8E", "#FFB03A", "#FF5D73", "#9F8CFF", "#C9D4EA", "#7C6CFF"];
  const bw = W / (STEPS * (dims + 1));
  rows.forEach((r, s2) => {
    r.forEach((val, d) => {
      const h = (val / lim) * (H / 2 - 30);
      const px = (s2 * (dims + 1) + d) * bw + 4;
      x.fillStyle = cols[d % 7];
      x.fillRect(px, H / 2 - Math.max(h, 0), bw - 2, Math.abs(h) || 1);
    });
    x.fillStyle = "#8B96AD"; x.font = "16px ui-monospace";
    x.fillText(`step ${c * 4 + s2}`, s2 * (dims + 1) * bw + 4, H - 8);
  });
  x.strokeStyle = "#232B3D"; x.beginPath(); x.moveTo(0, H / 2); x.lineTo(W, H / 2); x.stroke();
}

function drawActsCursor(c) {
  drawActs(true);
  const cv = $("acts"), x = cv.getContext("2d");
  const px = ((c * 4 + 2) / Math.max(ep.actions.length - 1, 1)) * cv.width;
  x.strokeStyle = "#FFB03A"; x.lineWidth = 3;
  x.beginPath(); x.moveTo(px, 0); x.lineTo(px, cv.height); x.stroke();
}
