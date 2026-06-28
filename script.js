/* ============================================================
   LOGIN GATE
   ============================================================ */
(function loginGate(){

  /* ---- accepted answers ---- */
  const MONTHS = {
    chantal: ["october","oct","10"],
    van:     ["may","5"]
  };
  const DAYS   = { chantal: ["24"], van: ["30"] };
  const ANNI   = { month: ["november","nov","11"], day: ["17"], year: ["2022"] };

  function normMonth(v){
    return v.trim().toLowerCase()
      .replace(/^0+/,"");          // strip leading zeros ("09" → "9")
  }
  function normDay(v){ return v.trim().replace(/^0+/,""); }
  function normYear(v){ return v.trim(); }

  function checkMonth(val, list){ return list.includes(normMonth(val)); }
  function checkDay(val, list)  { return list.includes(normDay(val));   }

  const inputs = {
    q1month: document.getElementById("q1month"),
    q1day:   document.getElementById("q1day"),
    q2month: document.getElementById("q2month"),
    q2day:   document.getElementById("q2day"),
    q3month: document.getElementById("q3month"),
    q3day:   document.getElementById("q3day"),
    q3year:  document.getElementById("q3year"),
  };
  const ticks = {
    q1month: document.getElementById("q1monthTick"),
    q1day:   document.getElementById("q1dayTick"),
    q2month: document.getElementById("q2monthTick"),
    q2day:   document.getElementById("q2dayTick"),
    q3month: document.getElementById("q3monthTick"),
    q3day:   document.getElementById("q3dayTick"),
    q3year:  document.getElementById("q3yearTick"),
  };

  const loginBtn  = document.getElementById("loginBtn");
  const shakeMsg  = document.getElementById("loginShakeMsg");
  const loginScreen = document.getElementById("loginScreen");
  const slideshow   = document.getElementById("slideshow");

  /* Live validation — tick appears as soon as field is correct */
  function validateField(inputEl, tickEl, isCorrect){
    if(inputEl.value.trim() === ""){ 
      inputEl.classList.remove("correct","wrong");
      tickEl.classList.remove("show");
      return null; // untouched
    }
    if(isCorrect){
      inputEl.classList.add("correct");
      inputEl.classList.remove("wrong");
      tickEl.classList.add("show");
      return true;
    } else {
      inputEl.classList.remove("correct");
      tickEl.classList.remove("show");
      return false;
    }
  }

  function checkAll(){
    return (
      checkMonth(inputs.q1month.value, MONTHS.chantal) &&
      checkDay(inputs.q1day.value,     DAYS.chantal)   &&
      checkMonth(inputs.q2month.value, MONTHS.van)     &&
      checkDay(inputs.q2day.value,     DAYS.van)       &&
      checkMonth(inputs.q3month.value, ANNI.month)     &&
      checkDay(inputs.q3day.value,     ANNI.day)       &&
      normYear(inputs.q3year.value) === ANNI.year[0]
    );
  }

  /* Attach live listeners */
  inputs.q1month.addEventListener("input", () =>
    validateField(inputs.q1month, ticks.q1month, checkMonth(inputs.q1month.value, MONTHS.chantal)));
  inputs.q1day.addEventListener("input", () =>
    validateField(inputs.q1day,   ticks.q1day,   checkDay(inputs.q1day.value, DAYS.chantal)));
  inputs.q2month.addEventListener("input", () =>
    validateField(inputs.q2month, ticks.q2month, checkMonth(inputs.q2month.value, MONTHS.van)));
  inputs.q2day.addEventListener("input", () =>
    validateField(inputs.q2day,   ticks.q2day,   checkDay(inputs.q2day.value, DAYS.van)));
  inputs.q3month.addEventListener("input", () =>
    validateField(inputs.q3month, ticks.q3month, checkMonth(inputs.q3month.value, ANNI.month)));
  inputs.q3day.addEventListener("input", () =>
    validateField(inputs.q3day,   ticks.q3day,   checkDay(inputs.q3day.value, ANNI.day)));
  inputs.q3year.addEventListener("input", () =>
    validateField(inputs.q3year,  ticks.q3year,  normYear(inputs.q3year.value) === ANNI.year[0]));

  /* Allow pressing Enter from any field */
  Object.values(inputs).forEach(el =>
    el.addEventListener("keydown", e => { if(e.key === "Enter") loginBtn.click(); })
  );

  loginBtn.addEventListener("click", () => {
    shakeMsg.textContent = "";

    if(checkAll()){
      /* Correct — fade out login, reveal slideshow */
      loginScreen.classList.add("fade-out");
      slideshow.classList.add("revealed");
      setTimeout(() => { loginScreen.style.display = "none"; }, 800);
    } else {
      /* Mark wrong fields red */
      const checks = [
        { el: inputs.q1month, ok: checkMonth(inputs.q1month.value, MONTHS.chantal) },
        { el: inputs.q1day,   ok: checkDay(inputs.q1day.value, DAYS.chantal) },
        { el: inputs.q2month, ok: checkMonth(inputs.q2month.value, MONTHS.van) },
        { el: inputs.q2day,   ok: checkDay(inputs.q2day.value, DAYS.van) },
        { el: inputs.q3month, ok: checkMonth(inputs.q3month.value, ANNI.month) },
        { el: inputs.q3day,   ok: checkDay(inputs.q3day.value, ANNI.day) },
        { el: inputs.q3year,  ok: normYear(inputs.q3year.value) === ANNI.year[0] },
      ];
      checks.forEach(({ el, ok }) => {
        if(!ok && el.value.trim() !== ""){
          el.classList.add("wrong");
          setTimeout(() => el.classList.remove("wrong"), 500);
        }
      });
      const anyEmpty = checks.some(({ el }) => el.value.trim() === "");
      shakeMsg.textContent = anyEmpty
        ? "fill in all the blanks first 🌸"
        : "hmm, that doesn't seem right — try again 💕";
    }
  });

})();

/* ============================================================
   SLIDESHOW
   ============================================================ */
(function slideshow(){
  const track   = document.getElementById("slidesTrack");
  const slides  = Array.from(document.querySelectorAll(".slide"));
  const dots    = document.getElementById("dots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const total   = slides.length;
  let current   = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${i + 1} of ${total}`);
    dot.addEventListener("click", () => goTo(i));
    dots.appendChild(dot);
  });
  const dotEls = Array.from(dots.children);

  const peonyEl = document.getElementById("peonyAccent");
  const positions = ["pos-bottom-left", "pos-bottom-right", "pos-top-left", "pos-top-right"];
  const slidePositions = slides.map((_, i) => {
    const order = [0, 3, 1, 2, 0, 3, 1];
    return positions[order[i % order.length]];
  });

  function updatePeony(slideIndex) {
    if (!peonyEl) return;
    peonyEl.classList.add("changing");
    setTimeout(() => {
      positions.forEach(p => peonyEl.classList.remove(p));
      peonyEl.style.top = "";
      peonyEl.style.bottom = "";
      peonyEl.style.left = "";
      peonyEl.style.right = "";
      peonyEl.classList.add(slidePositions[slideIndex]);
      peonyEl.classList.remove("changing");
    }, 350);
  }

  function render(){
    track.style.transform = `translateX(-${current * 100}vw)`;
    slides.forEach((s, i) => s.classList.toggle("in-view", i === current));
    dotEls.forEach((d, i) => {
      d.classList.toggle("active", i === current);
      d.classList.toggle("done", i < current);
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    document.body.setAttribute("data-bloom", slides[current].dataset.stage || "full");
    updatePeony(current);
  }

  function goTo(i){ current = Math.max(0, Math.min(total - 1, i)); render(); }
  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  document.querySelectorAll(".js-next").forEach(btn => btn.addEventListener("click", next));

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft")  prev();
  });

  let touchStartX = null;
  const stage = document.getElementById("slideshow");
  stage.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    touchStartX = null;
  }, { passive: true });

  render();
})();

/* ============================================================
   AMBIENT FALLING PETALS
   ============================================================ */
(function fallingPetals(){
  const field = document.getElementById("petalField");

  function spawn(){
    const petal = document.createElement("div");
    petal.className = "falling-petal";
    const left = Math.random() * 100;
    const size = 10 + Math.random() * 10;
    const duration = 7 + Math.random() * 6;
    const drift = (Math.random() * 80 - 40).toFixed(0) + "px";
    petal.style.left = left + "vw";
    petal.style.width = size + "px";
    petal.style.height = (size * 1.3) + "px";
    petal.style.setProperty("--drift", drift);
    petal.style.animationDuration = duration + "s";
    field.appendChild(petal);
    petal.addEventListener("animationend", () => petal.remove());
  }

  setInterval(spawn, 1400);
  window._spawnPetal = spawn;
})();

/* ============================================================
   PHOTO GALLERY — scatter + drag + lightbox
   ============================================================ */
(function photoGallery(){

  const PHOTOS = [
    { src: "photos/Beach1.jpg",      caption: "you & your flower crown era 🌺 honestly iconic" },
    { src: "photos/Beach2.jpg",      caption: "glowing like the sun itself ☀️ the beach was lucky to have you" },
    { src: "photos/Beach3.jpg",      caption: "saltwater, sunshine, and the prettiest smile 🌊" },
    { src: "photos/Beach4.jpg",      caption: "waving at the camera like you own the ocean 🌸 (you do)" },
    { src: "photos/eating1.jpg",     caption: "our favorite thing — food & each other 🍽️ never skip a meal date" },
    { src: "photos/Jogging1.jpg",    caption: "high above the world and still the best view was you 💙" },
    { src: "photos/Jogging2.jpg",    caption: "adventures with you always hit different 🌿" },
    { src: "photos/Jogging3.jpg",    caption: "thumbs up because this moment was actually perfect 👍🏼" },
    { src: "photos/photocard1.jpg",  caption: "us in a photo booth — chaotic, cute, and very us 🎞️" },
    { src: "photos/point6.jpg",      caption: "night walkers 🌙 we make every street feel like ours" },
    { src: "photos/point61.jpg",     caption: "late nights together are always the best nights 🌃" },
    { src: "photos/point62.jpg",     caption: "stretching into the frame just to be closer 🤗" },
    { src: "photos/Selfie1.jpg",     caption: "sunnies on, unbothered, and absolutely stunning 🕶️" },
    { src: "photos/Selfie2.jpg",     caption: "you make every silly selfie feel like a treasure 💕" },
    { src: "photos/Selfie3.jpg",     caption: "winking at the camera like you already know 😏💗" },
    { src: "photos/Selfie4.jpg",     caption: "the softest selfie in existence — I could look at this forever 🌸" },
    { src: "photos/Call1.jpg",       caption: "late night calls, blurry screen, still the best part of my day 📱" },
    { src: "photos/Call2.jpg",       caption: "even through a screen you make everything feel warmer 💗" },
  ];

  const overlay  = document.getElementById("galleryOverlay");
  const gStage   = document.getElementById("galleryStage");
  const hint     = document.getElementById("galleryHint");
  const closeBtn = document.getElementById("galleryClose");
  const burstBtn = document.querySelector(".js-burst");

  /* ---------- LIGHTBOX ---------- */
  const lightbox  = document.getElementById("lightbox");
  const lbImg     = document.getElementById("lightboxImg");
  const lbClose   = document.getElementById("lightboxClose");
  const lbPrev    = document.getElementById("lightboxPrev");
  const lbNext    = document.getElementById("lightboxNext");
  const lbCounter = document.getElementById("lightboxCounter");
  const lbCaption = document.getElementById("lightboxCaption");
  let lbIndex = 0;

  function openLightbox(idx){
    lbIndex = ((idx % PHOTOS.length) + PHOTOS.length) % PHOTOS.length;
    lbImg.src = PHOTOS[lbIndex].src;
    lbCaption.textContent = PHOTOS[lbIndex].caption;
    lbCounter.textContent = `${lbIndex + 1} / ${PHOTOS.length}`;
    lightbox.classList.add("open");
    lightbox.removeAttribute("aria-hidden");
  }
  function closeLightbox(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click",  () => openLightbox(lbIndex - 1));
  lbNext.addEventListener("click",  () => openLightbox(lbIndex + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
    if (e.key === "ArrowLeft")  openLightbox(lbIndex - 1);
    if (e.key === "Escape")     closeLightbox();
  });

  /* ---------- DRAG ---------- */
  function makeDraggable(card, bounds){
    let startX, startY, origLeft, origTop;
    let globalZ = 200;
    card._dragged = false;

    function onDown(e){
      e.preventDefault();
      card._dragged = false;
      const pt = e.touches ? e.touches[0] : e;
      startX = pt.clientX;
      startY = pt.clientY;
      origLeft = parseFloat(card.style.left) || 0;
      origTop  = parseFloat(card.style.top)  || 0;
      card.style.zIndex = ++globalZ;
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("mouseup",   onUp);
      window.addEventListener("touchend",  onUp);
    }

    function onMove(e){
      e.preventDefault();
      const pt = e.touches ? e.touches[0] : e;
      const dx = pt.clientX - startX;
      const dy = pt.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) card._dragged = true;
      const b = currentBounds || bounds;
      card.style.left = Math.min(Math.max(origLeft + dx, b.minX), b.maxX) + "px";
      card.style.top  = Math.min(Math.max(origTop  + dy, b.minY), b.maxY) + "px";
    }

    function onUp(){
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("touchend",  onUp);
      setTimeout(() => { card._dragged = false; }, 60);
    }

    card.addEventListener("mousedown",  onDown);
    card.addEventListener("touchstart", onDown, { passive: false });
  }

  /* ---------- BUILD GALLERY ---------- */
  // The stage's actual on-screen size is fully controlled by CSS
  // (min(100vw,177.78vh) / min(100vh,56.25vw)), so it can never exceed
  // the real visible viewport at any zoom level. We just measure it.
  let currentBounds = null;

  function getStageSize(){
    const rect = gStage.getBoundingClientRect();
    return { W: rect.width, H: rect.height };
  }

  function buildGallery(){
    gStage.innerHTML = "";

    // Use real viewport size — this is what 100vw/100vh resolves to at any zoom
    const W = window.innerWidth;
    const H = window.innerHeight;

    // Size the stage explicitly to fill the viewport
    gStage.style.width  = W + "px";
    gStage.style.height = H + "px";

    // Card dimensions
    const CARD_W = Math.min(160, Math.floor(W * 0.22));
    const CARD_H = Math.floor(CARD_W * 1.38);

    // Padding so cards (including their ±12° rotation) never poke outside
    const ROT_PAD = Math.ceil(CARD_W * 0.2);
    const TOP_PAD = 60; // clear the hint bar

    const minX = ROT_PAD;
    const maxX = W - CARD_W - ROT_PAD;
    const minY = TOP_PAD;
    const maxY = H - CARD_H - ROT_PAD;

    const bounds = { minX, maxX, minY, maxY };
    currentBounds = bounds;

    PHOTOS.forEach((photo, i) => {
      const card = document.createElement("div");
      card.className = "g-card";
      card.style.width = CARD_W + "px";

      // Tape
      const tape = document.createElement("span");
      tape.className = "g-tape";
      card.appendChild(tape);

      // Photo
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = "";
      img.loading = "lazy";
      card.appendChild(img);

      // Final resting position — guaranteed inside safe zone
      const tx = minX + Math.random() * Math.max(1, maxX - minX);
      const ty = minY + Math.random() * Math.max(1, maxY - minY);
      const tr = -12 + Math.random() * 24; // ±12°

      // Scatter origin: fly in from screen centre
      const sx = (W / 2 - tx - CARD_W / 2).toFixed(1) + "px";
      const sy = (H / 2 - ty - CARD_H / 2).toFixed(1) + "px";
      const sr = (-30 + Math.random() * 60).toFixed(1) + "deg";

      card.style.setProperty("--sx", sx);
      card.style.setProperty("--sy", sy);
      card.style.setProperty("--sr", sr);
      card.style.setProperty("--tr", tr.toFixed(1) + "deg");

      card.style.left   = tx + "px";
      card.style.top    = ty + "px";
      card.style.zIndex = i + 1;
      card.style.animationDelay = (i * 50) + "ms";
      card.classList.add("scattered");

      card.addEventListener("click", () => {
        if (card._dragged) return;
        openLightbox(i);
      });

      makeDraggable(card, bounds);
      gStage.appendChild(card);
    });

    setTimeout(() => hint.classList.add("hide"), 4000);
  }

  /* ---------- OPEN / CLOSE GALLERY ---------- */
  function openGallery(){
    if (window._spawnPetal){
      for (let i = 0; i < 30; i++) setTimeout(window._spawnPetal, i * 50);
    }
    overlay.classList.add("open");
    overlay.removeAttribute("aria-hidden");
    hint.classList.remove("hide");
    buildGallery();
  }

  // Re-measure the CSS-sized stage on resize/zoom and keep every card
  // inside the (re-measured) bounds — the stage itself is always ≤ the
  // real viewport because that's enforced by CSS, not JS.
  function reclampCards(){
    if (!overlay.classList.contains("open")) return;
    const W = window.innerWidth;
    const H = window.innerHeight;
    const cw = Math.min(160, Math.floor(W * 0.22));
    const ch = Math.floor(cw * 1.38);
    const rotPad = Math.ceil(cw * 0.2);
    const minX = rotPad, maxX = Math.max(minX, W - cw - rotPad);
    const minY = 60,     maxY = Math.max(minY, H - ch - rotPad);
    currentBounds = { minX, maxX, minY, maxY };

    Array.from(gStage.children).forEach(card => {
      const left = Math.min(Math.max(parseFloat(card.style.left) || 0, minX), maxX);
      const top  = Math.min(Math.max(parseFloat(card.style.top)  || 0, minY), maxY);
      card.style.left = left + "px";
      card.style.top  = top + "px";
    });
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(reclampCards, 100);
  });

  function closeGallery(){
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    gStage.innerHTML = "";
  }

  if (burstBtn) burstBtn.addEventListener("click", openGallery);
  closeBtn.addEventListener("click", closeGallery);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open") && !lightbox.classList.contains("open")){
      closeGallery();
    }
  });

})();