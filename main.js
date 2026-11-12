// ---------------------------------------------------------------------------
// Intro sequence. Reorder, retime or swap scenes here.
//   ms:      how long the scene stays on screen (images / stars)
//   caption: line shown at the bottom, per language
//   turn:    true = swings in around the bottom-centre point; otherwise a slow, even dissolve
//   exit:    'fade' = a turning image fades out where it is instead of swinging away
//   zoom:    slow zoom-in while on screen (e.g. 1.12 = ends 12% closer)
//   fadeIn:  how long this image takes to dissolve in (ms), if not the default
//   tone:    colours for the names and subtitle panels (see TONES)
// ---------------------------------------------------------------------------
const SCENES = [
  { id: 'bang',     video: 'assets/bang.mp4', bang: true, tone: 'night' },   // 5 s big bang, fades into the stars
  { id: 'stars',    stars: true, ms: 7000, tone: 'night' },
  { id: 'universe', image: 'assets/universe.jpg', ms: 5000, turn: true, tone: 'nebula', caption: { en: 'Across countless galaxies…', te: 'లెక్కలేనన్ని నక్షత్ర మండలాల నడుమ…' } },
  { id: 'earth',    image: 'assets/earth.jpg',    ms: 5000, turn: true, exit: 'fade', tone: 'ocean', caption: { en: '…on one blue planet…', te: '…ఈ భూమండలంపై…' } },
  { id: 'sunrise0', image: 'assets/sunrise0.jpg', ms: 5000, tone: 'amber', caption: { en: '…as a new day rises…', te: '…కొత్త రోజు ఉదయిస్తుండగా…' } },
  { id: 'sunrise1', image: 'assets/sunrise1.jpg', ms: 5000, zoom: 1.12, tone: 'dawn', caption: { en: '…on the banks of the Godavari…', te: '…గోదావరి తీరాన…' } },
  { id: 'zoom',     video: 'assets/zoom.mp4', rate: 1.5, tone: 'forest', caption: { en: '…in the temple town of Draksharamam…', te: '…పుణ్యక్షేత్రం ద్రాక్షారామంలో…' } },
  { id: 'venue',    image: 'assets/venue.jpg',    fadeIn: 1500, ms: 2000, final: true, zoom: 1.15, tone: 'stone' },   // clear for 2 s, then darkens behind the details   // no caption: the details card opens with 'Together with their families'
];

// ---------------------------------------------------------------------------
// Telugu text. English text lives in index.html; each data-i18n key below
// replaces the element's content on the Telugu page.
// ---------------------------------------------------------------------------
const TE = {
  title: 'హారిక & రఘు · 18 డిసెంబర్ 2026',
  menu: 'మెనూ',
  nav_wedding: 'వివాహం', nav_reception: 'విందు', nav_location: 'ప్రదేశం',
  nav_rsvp: 'మీ రాక', nav_photos: 'చిత్రాలు', nav_gifts: 'కానుకలు',
  names: 'హారిక & రఘు',
  names_alt: 'Harika &amp; Raghu',
  together: 'ఇరు కుటుంబాల ఆశీస్సులతో',
  final_names: 'హారిక <span class="amp">&amp;</span> రఘు',
  parents: 'సుభాషిణి, బాలాజీ గార్ల కుమార్తె<span class="dot"> · </span><br class="br-mobile">మాధవి, వెంకటేశ్వర రావు గార్ల కుమారుడు',
  wedding: 'వివాహం',
  final_wedding: 'శుక్రవారం, 18 డిసెంబర్ 2026<br>ముహూర్తం: తెల్లవారుజాము 3:45<br>ద్రాక్షారామం ఆలయం',
  reception: 'విందు',
  final_reception: 'శుక్రవారం, 18 డిసెంబర్ 2026<br>ఉదయం 11:30 నుండి మధ్యాహ్నం 2:00 వరకు<br>D1 కన్వెన్షన్, రాజమహేంద్రవరం',
  scroll: 'మరిన్ని వివరాలకు కిందికి జరపండి',
  enter: 'ప్రవేశించండి',
  skip: 'దాటవేయి',
  wedding_eyebrow: 'వివాహం',
  date: 'శుక్రవారం, 18 డిసెంబర్ 2026',
  muhurtham: 'ముహూర్తం: తెల్లవారుజాము 3:45',
  wedding_address: 'ద్రాక్షారామం ఆలయం<br>3-152, ఆంధ్రా బ్యాంక్ వీధి, చంద్ర వీధి, ద్రాక్షారామం, ఆంధ్రప్రదేశ్ 533262',
  dress: 'వస్త్రధారణ: సంప్రదాయ దక్షిణ భారత దుస్తులు',
  maps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
  reception_eyebrow: 'విందు',
  reception_time: 'ఉదయం 11:30 నుండి మధ్యాహ్నం 2:00 వరకు',
  reception_address: 'D1 కన్వెన్షన్<br>1, వాకర్స్ రోడ్, వెంకటేశ్వర నగర్, రాజమహేంద్రవరం, ఆంధ్రప్రదేశ్ 533103',
  getting_there: 'ఎలా చేరుకోవాలి',
  map_wedding: 'వివాహం · ద్రాక్షారామం ఆలయం',
  map_reception: 'విందు · D1 కన్వెన్షన్, రాజమహేంద్రవరం',
  by_air: 'విమానంలో',
  by_air_text: 'సమీప విమానాశ్రయం: రాజమండ్రి విమానాశ్రయం (RJA), మధురపూడి.',
  by_rail: 'రైలులో',
  by_rail_text: 'సమీప రైల్వే స్టేషన్: రాజమండ్రి (RJY), చెన్నై–హౌరా ప్రధాన మార్గంలో ఉంది.',
  by_road: 'రోడ్డు మార్గంలో',
  by_road_text: 'ప్రధాన నగరాల నుండి రాజమండ్రికి నేరుగా APSRTC, ప్రైవేట్ బస్సులు అందుబాటులో ఉన్నాయి.',
  pickup: 'మేము తీసుకువెళ్తాము',
  pickup_text: 'రాజమండ్రి నుండి సుమారు 42 కి.మీ. దూరంలోని ద్రాక్షారామం వివాహానికి మేము మిమ్మల్ని తీసుకువెళ్తాము. మీ రాక వివరాలను రఘుకు తెలపండి: <a href=\"tel:+918639993299\">+91 86399 93299</a>.',
  cd_days: 'రోజులు', cd_hours: 'గంటలు', cd_mins: 'నిమిషాలు', cd_secs: 'సెకన్లు',
  rsvp_title: 'మీరు వస్తున్నారా?',
  rsvp_text: 'తప్పనిసరి కాదు, కానీ ఏర్పాట్లకు ఉపయోగపడుతుంది. మీ పేరు, ఎంత మంది, ఏ కార్యక్రమాలకు వస్తున్నారో తెలపండి.',
  rsvp_button: 'మీ రాక తెలపండి (Google Form)',
  moments: 'జ్ఞాపకాలు',
  photo: 'ఫోటో',
  album: 'ఫోటో ఆల్బమ్',
  gift_title: 'మీ రాకే మాకు కానుక',
  gift_text: 'దయచేసి బహుమతులు ఏమీ తీసుకురాకండి… బంగారం లాంటి తేలికైనవి అయితే తప్ప <span class="wink">😉</span>',
  footer: 'హారిక & రఘు · 18 డిసెంబర్ 2026',
  contact: 'సందేహాలుంటే రఘుకు ఫోన్ చేయండి: <a href=\"tel:+918639993299\">+91 86399 93299</a>',
  credits: 'మ్యాప్ చిత్రాలు: Google Earth. [ప్లేస్‌హోల్డర్: అంతరిక్ష చిత్రాల క్రెడిట్స్]',
  mute: 'సంగీతం ఆపండి',
  unmute: 'సంగీతం వినండి',
};

const $ = (id) => document.getElementById(id);
const layersRoot = $('layers'), stage = $('top');
const names = $('names'), namesMain = $('names-main'), caption = $('caption'), finalCard = $('final');
const gate = $('gate'), enterBtn = $('enter'), skipBtn = $('skip'), soundBtn = $('sound'), langBtn = $('lang');
const prevBtn = $('prev'), nextBtn = $('next');
const tracks = { en: $('bgm-en'), te: $('bgm-te') };
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let running = false, started = false, currentScene = null;
const timers = [];
const wait = (ms) => new Promise((r) => timers.push(setTimeout(r, ms)));

// ---------- Language ----------
const EN = { title: document.title, mute: 'Mute music', unmute: 'Play music' };
document.querySelectorAll('[data-i18n]').forEach((el) => { EN[el.dataset.i18n] ??= el.innerHTML; });

let lang = new URLSearchParams(location.search).get('lang');
if (lang !== 'te' && lang !== 'en') { try { lang = localStorage.getItem('lang'); } catch (e) {} }
if (lang !== 'te') lang = 'en';

function t(key) { return (lang === 'te' ? TE[key] : EN[key]) ?? EN[key]; }

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  splitNames();
  langBtn.textContent = lang === 'te' ? 'English' : 'తెలుగు';
  langBtn.lang = lang === 'te' ? 'en' : 'te';
  soundBtn.setAttribute('aria-label', t(muted ? 'unmute' : 'mute'));
  if (currentScene && currentScene.caption && caption.classList.contains('show')) caption.textContent = currentScene.caption[lang];
}

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  lang = lang === 'te' ? 'en' : 'te';
  try { localStorage.setItem('lang', lang); } catch (e) {}
  const url = new URL(location.href); url.searchParams.set('lang', lang); history.replaceState(null, '', url);
  applyLang();
  updateAudio();
});

// Split the main names into letters (grapheme clusters, so Telugu stays intact) for the slow reveal
function splitNames() {
  const text = namesMain.textContent;
  const parts = typeof Intl.Segmenter === 'function'
    ? [...new Intl.Segmenter(lang, { granularity: 'grapheme' }).segment(text)].map((s) => s.segment)
    : [...text];
  namesMain.innerHTML = parts.map((ch, i) =>
    `<span class="${ch === ' ' ? 'space' : ''}" style="transition-delay:${i * 110}ms">${ch === ' ' ? '&nbsp;' : ch === '&' ? '&amp;' : ch}</span>`
  ).join('');
}

// ---------- Panel colours per scene ----------
// panel = translucent background, ink = text, accent = Telugu line + thin border.
// They change smoothly with each scene (CSS transitions on the panels).
const TONES = {
  night:  { panel: 'rgba(7, 11, 31, 0.6)',     ink: '#f6f1e4', accent: '#d9b46a' },
  nebula: { panel: 'rgba(38, 9, 12, 0.62)',    ink: '#fbeee6', accent: '#f2b58c' },
  ocean:  { panel: 'rgba(4, 20, 44, 0.62)',    ink: '#eef5ff', accent: '#9ccaff' },
  amber:  { panel: 'rgba(42, 26, 10, 0.6)',    ink: '#fff6e8', accent: '#ffcc73' },
  dawn:   { panel: 'rgba(255, 243, 230, 0.72)', ink: '#3b2414', accent: '#a2501d' },
  forest: { panel: 'rgba(8, 28, 22, 0.62)',    ink: '#f2f7ee', accent: '#e6d28a' },
  stone:  { panel: 'rgba(30, 21, 13, 0.62)',   ink: '#f8efe2', accent: '#d9b46a' },
};
function setTone(name) {
  const tn = TONES[name] || TONES.night;
  stage.style.setProperty('--panel', tn.panel);
  stage.style.setProperty('--ink', tn.ink);
  stage.style.setProperty('--accent', tn.accent);
}
setTone('night');

// ---------- Turning sky ----------
// The stars and the 'turn' images rotate clockwise around one point at the bottom
// centre of the screen, like stars in a telescope timelapse. Turning images keep their
// normal size (no zoom), so the starfield shows around them as they turn. Each one swings
// up from flat on the left while dissolving in, keeps turning slowly while on screen,
// then swings away to the right and fades as the next one arrives on top.
// The other images simply dissolve in and out.
const ENTER_MS = 2600;   // swing in / swing out
const FADE_MS = 3000;    // slow dissolve in / out
const JUMP_MS = 700;     // quick fade when moving with the arrows
const BANG_FADE_MS = 1500; // big bang dissolving into the stars
const HOLD_TILT = 6;     // degrees either side of upright while on screen

let W = 0, H = 0;

// ---------- Build layers ----------
SCENES.forEach((s) => {
  if (s.stars) return;
  const el = document.createElement(s.video ? 'video' : 'div');
  el.className = 'layer' + (s.turn ? ' turn' : '');
  if (s.video) {
    el.src = s.video; el.muted = true; el.playsInline = true; el.preload = 'auto';
  } else {
    el.style.backgroundImage = `url(${s.image})`;
  }
  s.el = el;
  layersRoot.appendChild(el);
});

// ---------- Starfield: turns around the same bottom-centre point ----------
const canvas = $('stars'), ctx = canvas.getContext('2d');
let stars = [], starsOn = false;
const STAR_SPEED = (2 * HOLD_TILT * Math.PI / 180) / 5000;   // same pace as the images (radians per ms)
function resizeStars() {
  W = stage.clientWidth; H = stage.clientHeight;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const maxR = Math.hypot(W / 2, H);
  stars = Array.from({ length: Math.round((W * H) / 1800) }, () => ({
    a: -Math.random() * Math.PI,                 // upper half around the pivot
    r: Math.sqrt(Math.random()) * maxR,
    s: Math.random() * 1.3 + 0.3,
    tw: Math.random() * Math.PI * 2,
  }));
}
let lastT = 0;
function drawStars(time) {
  if (!starsOn) return;
  const dt = lastT ? Math.min(time - lastT, 50) : 16; lastT = time;
  const cx = W / 2, cy = H;
  ctx.fillStyle = 'rgb(0,0,8)';
  ctx.fillRect(0, 0, W, H);
  for (const st of stars) {
    st.a += STAR_SPEED * dt;                     // clockwise
    if (st.a > 0) st.a -= Math.PI;               // wrap below the horizon back to the left
    const alpha = 0.55 + 0.45 * Math.sin(time / 700 + st.tw);
    ctx.fillStyle = `rgba(246,241,228,${alpha})`;
    ctx.beginPath(); ctx.arc(cx + Math.cos(st.a) * st.r, cy + Math.sin(st.a) * st.r, st.s, 0, Math.PI * 2); ctx.fill();
  }
  requestAnimationFrame(drawStars);
}
function setStars(on) {
  canvas.classList.toggle('off', !on);
  if (on && !starsOn) { starsOn = true; lastT = 0; requestAnimationFrame(drawStars); }
  if (!on) timers.push(setTimeout(() => { starsOn = false; }, 1600));
}
addEventListener('resize', resizeStars);
resizeStars();
setStars(true);

// ---------- Scene helpers ----------
function setCaption(s) {
  caption.classList.remove('show');
  timers.push(setTimeout(() => {
    const text = s.caption ? s.caption[lang] : '';
    caption.textContent = text;
    if (text) caption.classList.add('show');
  }, 700));
}

// One turning image's life: swing in + dissolve, slow turn, swing out + fade.
// inMs = JUMP_MS starts it upright with a quick fade (used by the arrows).
function turn(s, holdMs, inMs) {
  const fadeExit = s.exit === 'fade', outMs = fadeExit ? FADE_MS : ENTER_MS;
  const T = inMs + holdMs + outMs, a = inMs / T, b = (inMs + holdMs) / T;
  const from = inMs === JUMP_MS ? `rotate(${-HOLD_TILT}deg)` : 'rotate(-90deg)';
  // fade exit: keep turning at the same slow pace while it fades, instead of swinging away
  const end = fadeExit ? `rotate(${HOLD_TILT + (2 * HOLD_TILT * outMs) / holdMs}deg)` : 'rotate(90deg)';
  s.el.animate([
    { transform: from, easing: 'cubic-bezier(.3,.55,.45,1)' },
    { transform: `rotate(${-HOLD_TILT}deg)`, offset: a, easing: 'linear' },
    { transform: `rotate(${HOLD_TILT}deg)`, offset: b, easing: fadeExit ? 'linear' : 'cubic-bezier(.55,0,.7,.45)' },
    { transform: end },
  ], { duration: T, fill: 'forwards' });
  s.el.animate([
    { opacity: 0, easing: 'ease-in-out' }, { opacity: 1, offset: a }, { opacity: 1, offset: b }, { opacity: 0 },
  ], { duration: T, fill: 'forwards' });
}

// Dissolve in, hold, dissolve out as the next one arrives on top
function dissolve(s, holdMs, inMs) {
  const T = inMs + holdMs + FADE_MS, a = inMs / T, b = (inMs + holdMs) / T;
  s.el.animate([
    { opacity: 0, easing: 'ease-in-out' }, { opacity: 1, offset: a }, { opacity: 1, offset: b, easing: 'ease-in-out' }, { opacity: 0 },
  ], { duration: T, fill: 'forwards' });
  if (s.zoom) slowZoom(s, T);
}

// Gentle zoom-in (Ken Burns) from full size to s.zoom over ms
function slowZoom(s, ms) {
  s.el.animate([{ transform: 'scale(1)' }, { transform: `scale(${s.zoom})` }], { duration: ms, easing: 'ease-out', fill: 'forwards' });
}
// The mandapam keeps slowly zooming in and out behind the details, for as long as the page is open
const BREATHE_MS = 20000;      // one way (in, or out)
function breathe(s) {
  s.el.animate([{ transform: 'scale(1)' }, { transform: `scale(${s.zoom})` }],
    { duration: BREATHE_MS, easing: 'ease-in-out', iterations: Infinity, direction: 'alternate' });
}

const VIDEO_END_HOLD_MS = 1000;   // keep a video's last frame on screen this long before it fades
function videoHoldMs(s, inMs) {
  const d = s.el.duration;
  return (isFinite(d) && d > 0 ? d * 1000 : 16000) / (s.rate || 1) - inMs + VIDEO_END_HOLD_MS;
}

function resetLayer(x) {
  x.el.getAnimations().forEach((an) => an.cancel());
  x.el.style.opacity = 0;
  x.el.style.transform = '';
  if (x.video) x.el.pause();
}

// ---------- The sequence ----------
// play(i) runs the intro from scene i onward. Moving with the arrows starts a new run;
// 'run' tells an older run to stop.
let run = 0, index = 0;
const FIRST_IMAGE = SCENES.findIndex((x) => !x.stars && !x.bang);

async function play(from, jumped) {
  const me = ++run;
  running = true;
  skipBtn.hidden = false;
  prevBtn.hidden = nextBtn.hidden = false;
  for (let i = from; i < SCENES.length; i++) {
    if (me !== run || !running) return;
    const s = SCENES[i], inMs = jumped && i === from ? JUMP_MS : (s.fadeIn || (s.turn ? ENTER_MS : FADE_MS));
    index = i; currentScene = s;
    setCaption(s);
    if (s.tone) setTone(s.tone);
    prevBtn.disabled = i <= FIRST_IMAGE;

    if (s.bang) {                                // big bang, then fade into the turning stars
      s.el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' });
      s.el.currentTime = 0;
      s.el.play().catch(() => {});
      const d = isFinite(s.el.duration) && s.el.duration > 0 ? s.el.duration * 1000 : 5000;
      await wait(Math.max(0, d - BANG_FADE_MS));
      if (me !== run || !running) return;
      s.el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: BANG_FADE_MS, easing: 'ease-in-out', fill: 'forwards' });
      await wait(BANG_FADE_MS / 2);              // names start as the stars come through
      continue;
    }
    if (s.stars) {
      names.classList.add('show');
      await wait(s.ms);
      names.classList.add('docked');
      continue;
    }
    names.classList.add('show', 'docked');
    if (s.turn) setStars(true);                  // stars show around turning images
    else timers.push(setTimeout(() => setStars(false), inMs));   // hidden once a full-screen image is in
    if (s.final) {
      s.el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: inMs, easing: 'ease-in-out', fill: 'forwards' });
      if (s.zoom) breathe(s);
      await wait(inMs + (s.ms ?? 0));               // fade in, stay clear, then the details come over it
      if (me === run && running) showFinal(s);
      return;
    }
    let hold = s.ms || 5000;
    if (s.video) {
      s.el.currentTime = 0;
      s.el.playbackRate = s.rate || 1;
      s.el.play().catch(() => {});
      hold = Math.max(2000, videoHoldMs(s, inMs));
    }
    (s.turn ? turn : dissolve)(s, hold, inMs);
    await wait(inMs + hold);                     // next scene starts as this one leaves
  }
}

function runIntro() { play(0, false); }

// Arrows: jump to the previous / next scene, then carry on playing from there
function goTo(i) {
  if (!running) return;
  i = Math.max(FIRST_IMAGE, i);
  if (i >= SCENES.length) { showFinal(null); return; }
  timers.forEach(clearTimeout); timers.length = 0;
  SCENES.forEach((x) => { if (x.el) resetLayer(x); });
  play(i, true);
}

function showFinal(fin) {
  const wasRunning = running;
  running = false;
  run++;
  timers.forEach(clearTimeout); timers.length = 0;
  const last = SCENES.find((x) => x.final);
  SCENES.forEach((x) => { if (x.el && x !== last) resetLayer(x); });
  if (!(fin && wasRunning)) {                    // skipped: fade the temple straight in
    last.el.getAnimations().forEach((an) => an.cancel());
    last.el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1400, fill: 'forwards' });
    if (last.zoom) breathe(last);
    setTone(last.tone);
  }
  last.el.classList.add('final-bg');
  setStars(false);
  caption.classList.remove('show');
  names.classList.add('gone');
  finalCard.classList.add('show');
  skipBtn.hidden = true;
  prevBtn.hidden = nextBtn.hidden = true;
  document.body.classList.remove('intro-running');
  document.body.classList.add('intro-done');
}

// ---------- Music: English page plays bgm-1, Telugu page plays bgm-2 ----------
let muted = false;
try { muted = localStorage.getItem('muted') === '1'; } catch (e) {}

// Both tracks play from the first tap; only the current language's track is audible,
// so switching language is instant (and works on phones, which ignore volume changes).
function updateAudio() {
  tracks.en.muted = muted || lang !== 'en';
  tracks.te.muted = muted || lang !== 'te';
}
function startMusic() {
  updateAudio();
  tracks.en.play().catch(() => {});
  tracks.te.play().catch(() => {});
}
function setMuted(m) {
  muted = m;
  updateAudio();
  soundBtn.setAttribute('aria-pressed', String(m));
  soundBtn.setAttribute('aria-label', t(m ? 'unmute' : 'mute'));
  try { localStorage.setItem('muted', m ? '1' : '0'); } catch (e) {}
}
soundBtn.addEventListener('click', (e) => { e.stopPropagation(); setMuted(!muted); });
document.addEventListener('visibilitychange', () => {
  if (!started) return;
  Object.values(tracks).forEach((a) => (document.hidden ? a.pause() : a.play().catch(() => {})));
});

// ---------- Start, skip ----------
enterBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  started = true;
  startMusic();                            // first thing in the tap, so it plays at once
  gate.classList.add('hidden');
  soundBtn.hidden = false;
  setMuted(muted);
  if (reduceMotion) showFinal(null);
  else runIntro();
});

function skip() { if (running) showFinal(null); }
skipBtn.addEventListener('click', (e) => { e.stopPropagation(); skip(); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(index - 1); });
nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(index + 1); });
addEventListener('wheel', skip, { passive: true });
addEventListener('keydown', (e) => {
  if (!running) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
  else if ([' ', 'ArrowDown', 'PageDown', 'Escape', 'Enter'].includes(e.key)) { e.preventDefault(); skip(); }
});
// Phones: swipe left / right to move between scenes, swipe up to skip to the details
let touch0 = null;
addEventListener('touchstart', (e) => { touch0 = e.touches[0]; }, { passive: true });
addEventListener('touchend', (e) => {
  if (!touch0 || !running) return;
  const dx = e.changedTouches[0].clientX - touch0.clientX, dy = e.changedTouches[0].clientY - touch0.clientY;
  touch0 = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
  else if (dy < -50) skip();
}, { passive: true });
stage.addEventListener('click', () => { if (running) skip(); });

// ---------- Menu ----------
const menuToggle = $('menu-toggle'), menuLinks = $('menu-links');
menuToggle.addEventListener('click', () => {
  const open = menuLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
menuLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { menuLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }
});
// Highlight the section on screen
const links = [...menuLinks.querySelectorAll('a')];
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) links.forEach((a) => a.classList.toggle('current', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach((s) => io.observe(s));

// Placeholder links: do nothing until real links are added
document.querySelectorAll('[data-placeholder]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));

// ---------- Countdown to the muhurtham ----------
const WEDDING = new Date('2026-12-18T03:45:00+05:30');
const cd = { box: $('countdown'), d: $('cd-days'), h: $('cd-hours'), m: $('cd-mins'), s: $('cd-secs') };
function tick() {
  const ms = WEDDING - Date.now();
  if (ms <= 0) { cd.box.hidden = true; return; }
  const pad = (n) => String(n).padStart(2, '0');
  cd.d.textContent = Math.floor(ms / 864e5);
  cd.h.textContent = pad(Math.floor(ms / 36e5) % 24);
  cd.m.textContent = pad(Math.floor(ms / 6e4) % 60);
  cd.s.textContent = pad(Math.floor(ms / 1e3) % 60);
}
tick();
setInterval(tick, 1000);

applyLang();
