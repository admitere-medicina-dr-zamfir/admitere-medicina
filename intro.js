
document.addEventListener("DOMContentLoaded", () => {
  const oldIntro = document.getElementById("intro");
  if (oldIntro) oldIntro.remove();

  const app = document.getElementById("app");
  if (app) app.classList.remove("app-hidden");

  const overlay = document.createElement("div");
  overlay.id = "introCinematic";
  overlay.innerHTML = `
    <button id="introSkip" type="button">Sari peste</button>
    <div class="intro-c-stage">
      <svg class="intro-c-svg" viewBox="0 0 800 520" aria-label="Intro animat Admitere Medicină">
        <defs>
          <linearGradient id="introGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f6df9f"/>
            <stop offset="52%" stop-color="#d6b15f"/>
            <stop offset="100%" stop-color="#9d762a"/>
          </linearGradient>
          <linearGradient id="introBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#67d0ff"/>
            <stop offset="100%" stop-color="#0874c4"/>
          </linearGradient>
          <filter id="introGlow">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <path class="intro-c-pulse"
          d="M70 260 H210 L235 260 L250 220 L270 310 L290 245 L310 260 H730"
          fill="none" stroke="url(#introGold)" stroke-width="4"/>

        <g class="intro-c-book">
          <path d="M250 365 Q330 330 395 370 V430 Q325 390 250 420 Z"
            fill="none" stroke="url(#introGold)" stroke-width="8"/>
          <path d="M550 365 Q470 330 405 370 V430 Q475 390 550 420 Z"
            fill="none" stroke="url(#introGold)" stroke-width="8"/>
          <path d="M400 370 V435" fill="none" stroke="url(#introGold)" stroke-width="7"/>
        </g>

        <g>
          <path class="intro-c-draw" d="M400 110 V350"
            fill="none" stroke="url(#introGold)" stroke-width="12" stroke-linecap="round"/>
          <path class="intro-c-draw" d="M340 150 Q400 80 460 150"
            fill="none" stroke="url(#introGold)" stroke-width="10" stroke-linecap="round"/>
          <path class="intro-c-draw"
            d="M430 160 C520 185 510 235 425 255 C340 275 350 325 435 340"
            fill="none" stroke="url(#introGold)" stroke-width="10" stroke-linecap="round"/>
        </g>

        <g class="intro-c-dna">
          <path d="M375 155 C425 185 425 225 375 255 C325 285 325 325 375 350"
            fill="none" stroke="url(#introBlue)" stroke-width="7"/>
          <path d="M425 155 C375 185 375 225 425 255 C475 285 475 325 425 350"
            fill="none" stroke="url(#introBlue)" stroke-width="7"/>
          <g stroke="#79dbff" stroke-width="4">
            <line x1="383" y1="175" x2="417" y2="175"/>
            <line x1="365" y1="210" x2="435" y2="210"/>
            <line x1="365" y1="290" x2="435" y2="290"/>
            <line x1="383" y1="330" x2="417" y2="330"/>
          </g>
        </g>
      </svg>

      <h1 class="intro-c-title">ADMITERE MEDICINĂ</h1>
      <p class="intro-c-doctor">dr. Zamfir Alexandru</p>
      <p class="intro-c-motto">Pregătire • Evaluare • Performanță</p>
      <div class="intro-c-dots"><span></span><span></span><span></span></div>
    </div>`;

  document.body.appendChild(overlay);

  const closeIntro = () => {
    overlay.classList.add("intro-out");
    setTimeout(() => overlay.remove(), 950);
  };

  document.getElementById("introSkip").addEventListener("click", closeIntro);
  setTimeout(closeIntro, 5600);
});
