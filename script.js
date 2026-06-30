<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>For Chantal 🌸</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="paper-grain" aria-hidden="true"></div>
<div class="petal-field" id="petalField" aria-hidden="true"></div>

<div class="peony-accent" id="peonyAccent" aria-hidden="true">
  <img src="assets/Peonyborder1.png" alt="" class="peony-accent-img" id="peonyImg">
</div>

<!-- LOGIN SCREEN -->
<div class="login-screen" id="loginScreen">
  <div class="login-card">
    <p class="login-eyebrow">only for someone special</p>
    <h1 class="login-title">prove it's you 🌸</h1>
    <p class="login-sub">answer these three to unlock something made just for you</p>
    <div class="login-fields">
      <div class="login-group" id="q1group">
        <label class="login-label">Chantal's birth month &amp; day</label>
        <div class="login-row">
          <div class="login-input-wrap">
            <input class="login-input" id="q1month" type="text" placeholder="month" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q1monthTick">✓</span>
          </div>
          <div class="login-input-wrap">
            <input class="login-input" id="q1day" type="text" placeholder="day" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q1dayTick">✓</span>
          </div>
        </div>
        <p class="login-error" id="q1err"></p>
      </div>
      <div class="login-group" id="q2group">
        <label class="login-label">Van's birth month &amp; day</label>
        <div class="login-row">
          <div class="login-input-wrap">
            <input class="login-input" id="q2month" type="text" placeholder="month" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q2monthTick">✓</span>
          </div>
          <div class="login-input-wrap">
            <input class="login-input" id="q2day" type="text" placeholder="day" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q2dayTick">✓</span>
          </div>
        </div>
        <p class="login-error" id="q2err"></p>
      </div>
      <div class="login-group" id="q3group">
        <label class="login-label">the day we became us 💕</label>
        <div class="login-row login-row-3">
          <div class="login-input-wrap">
            <input class="login-input" id="q3month" type="text" placeholder="month" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q3monthTick">✓</span>
          </div>
          <div class="login-input-wrap">
            <input class="login-input" id="q3day" type="text" placeholder="day" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q3dayTick">✓</span>
          </div>
          <div class="login-input-wrap">
            <input class="login-input" id="q3year" type="text" placeholder="year" autocomplete="off" spellcheck="false">
            <span class="login-tick" id="q3yearTick">✓</span>
          </div>
        </div>
        <p class="login-error" id="q3err"></p>
      </div>
    </div>
    <button class="btn-pill login-btn" id="loginBtn" type="button">open it 🌸</button>
    <p class="login-shake-msg" id="loginShakeMsg"></p>
  </div>
</div>

<main class="slideshow slideshow-hidden" id="slideshow">
  <div class="slides-track" id="slidesTrack">

    <!-- SLIDE 1 — COVER -->
    <section class="slide" data-stage="bud">
      <div class="slide-content cover-content">
        <p class="eyebrow">a little something for</p>
        <h1 class="title-script">Chantal</h1>
        <p class="full-name">Chantal Jeremy Marcelino</p>
        <p class="subtitle">an apology, told one petal at a time</p>
        <button class="btn-pill js-next" type="button">open it gently <span aria-hidden="true">→</span></button>
        <p class="hint">swipe, click the arrows, or use ← → on your keyboard</p>
      </div>
    </section>

    <!-- SLIDE 2 — US -->
    <section class="slide" data-stage="opening">
      <div class="slide-content split-content">
        <div class="photo-frame tilt-left">
          <img src="photos/eating1.jpg" alt="The two of us">
          <span class="tape tape-pink"></span>
        </div>
        <div class="text-block">
          <p class="eyebrow">chapter one</p>
          <h2 class="title-script">Us</h2>
          <p class="lorem">We already have so many beautiful moments together, and each one adds another layer to the story of us, making it richer and more meaningful with every passing day. I want to continue creating more of these special memories with you.</p>
        </div>
      </div>
    </section>

    <!-- SLIDE 3 — A MEMORY -->
    <section class="slide" data-stage="half">
      <div class="slide-content split-content reverse">
        <div class="text-block">
          <p class="eyebrow">a memory</p>
          <h2 class="title-script">That day</h2>
          <p class="lorem">This was our first time taking a photo together in this booth. It was also the day you came home from Singapore, and I'm really happy we got to spend that day together. I hope we get to do this again soon. Maybe next time, it'll be in Singapore — with me by your side.</p>
        </div>
        <div class="photo-frame tilt-right">
          <img src="photos/photocard1.jpg" alt="A memory together">
          <span class="tape tape-gold"></span>
        </div>
      </div>
    </section>

    <!-- SLIDE 4 — ANOTHER MEMORY -->
    <section class="slide" data-stage="half">
      <div class="slide-content split-content">
        <div class="two-frames">
          <div class="photo-frame tilt-left">
            <img src="photos/Call1.jpg" alt="A call together">
            <span class="tape tape-pink"></span>
          </div>
          <div class="photo-frame tilt-right">
            <img src="photos/Call2.jpg" alt="Another call together">
            <span class="tape tape-gold"></span>
          </div>
        </div>
        <div class="text-block">
          <p class="eyebrow">another memory</p>
          <h2 class="title-script">And this one too</h2>
          <p class="lorem">This is one of the first calls we made together. We're both young and playful, and it's amazing how much fun we have together. We're going to continue making more memories like this.</p>
        </div>
      </div>
    </section>

    <!-- SLIDE 5 — THE APOLOGY -->
    <section class="slide" data-stage="full">
      <div class="slide-content cover-content apology-content">
        <div class="apology-layout">

          <div class="apology-letter letter-fade">
            <p class="eyebrow">what I need to say</p>
            <h2 class="title-script">I'm sorry</h2>

            <p class="letter-para">I'm so sorry, Mahal, for everything I've done. I know I hurt you, made you overthink, and even pushed you to the point where you wanted to give up. I never wanted any of that to happen. I feel so guilty for making you feel that way, and I truly regret everything I did.</p>

            <span class="letter-divider">· · ·</span>

            <p class="letter-para">I really want us to keep making memories together and create even more in the future. Please don't get tired of me, love. I'll do my best to understand you and be better for us.</p>

            <span class="letter-divider">· · ·</span>

            <p class="letter-para">I also want to apologize because I know I'm not at my best right now. I'm not the same golden retriever energy you first met. I've been dealing with my own problems too, but that's never an excuse for hurting you. I'll work on myself and make it up to you through my actions, not just my words.</p>

            <span class="letter-divider">· · ·</span>

            <p class="letter-para">I'm sorry for hiding things from you. Because of that, I know I broke your trust and made you overthink. I'm truly sorry for making you feel that way. I know trust isn't something I can ask for back — it has to be earned, and I'll do everything I can to earn it again.</p>

            <span class="letter-divider">· · ·</span>

            <p class="letter-para">About the gifts... I hope you know they weren't meant to make up for what I did or to buy your forgiveness. They weren't given because I expected anything in return. I gave them simply because I wanted to do something thoughtful for you and hopefully bring you even a little comfort. Whether you forgive me or not is completely your choice, and I'll always respect that. I never want you to feel pressured or like you owe me anything because of them.</p>

            <span class="letter-divider">· · ·</span>

            <p class="letter-para">I hope one day you can forgive me for all the mistakes I've made. More than anything, I hope we can work through this together.</p>

            <p class="letter-para letter-sign">I love you. 🌸</p>
          </div>

          <div class="catcry-col">
            <img src="photos/catcry.gif" alt="crying cat" class="catcry-gif">
            <span class="catcry-label">me rn fr</span>
            <span class="scroll-cue">↑ scroll ↑</span>
          </div>

        </div>
      </div>
    </section>

    <!-- SLIDE 6 — THE PROMISE -->
    <section class="slide" data-stage="full">
      <div class="slide-content cover-content">
        <p class="eyebrow">moving forward</p>
        <h2 class="title-script">What I promise</h2>
        <p class="lorem lorem-wide">I promise to be more present and attentive to your feelings, to communicate better, and to work on myself so that I can be the person you deserve.</p>
      </div>
    </section>

    <!-- SLIDE 7 — CLOSING -->
    <section class="slide" data-stage="full-fall">
      <div class="slide-content cover-content closing-content">
        <p class="eyebrow">always</p>
        <h2 class="title-script">I love you, Chantal</h2>
        <p class="lorem">I love you more than words can say, Chantal, My Love. You are the light of my life, and I am so grateful to have you by my side.</p>
        <div class="photo-frame tilt-left closing-photo">
          <img src="photos/eating1.jpg" alt="Our favorite photo">
          <span class="tape tape-gold"></span>
        </div>
        <button class="btn-pill js-burst" type="button">tap this peony 🌸</button>
      </div>
    </section>

  </div>

  <button class="nav-arrow prev" id="prevBtn" aria-label="Previous slide">‹</button>
  <button class="nav-arrow next" id="nextBtn" aria-label="Next slide">›</button>
  <nav class="dots" id="dots" aria-label="Slide progress"></nav>
</main>

<!-- PHOTO GALLERY OVERLAY -->
<div class="gallery-overlay" id="galleryOverlay" aria-hidden="true">
  <div class="gallery-hint" id="galleryHint">
    <span>✨ swipe the cards to arrange them &nbsp;·&nbsp; tap any photo to view</span>
  </div>
  <div class="gallery-stage" id="galleryStage"></div>
  <button class="gallery-close" id="galleryClose" aria-label="Close gallery">✕</button>
</div>

<!-- Lightbox -->
<div class="lightbox" id="lightbox" aria-hidden="true">
  <button class="lightbox-close" id="lightboxClose" aria-label="Close photo">✕</button>
  <button class="lightbox-prev" id="lightboxPrev" aria-label="Previous photo">‹</button>
  <img class="lightbox-img" id="lightboxImg" src="" alt="">
  <button class="lightbox-next" id="lightboxNext" aria-label="Next photo">›</button>
  <div class="lightbox-info">
    <p class="lightbox-caption" id="lightboxCaption"></p>
    <p class="lightbox-counter" id="lightboxCounter"></p>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
