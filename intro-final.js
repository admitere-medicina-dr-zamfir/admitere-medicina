
document.addEventListener("DOMContentLoaded", () => {
  // Elimină intro-urile mai vechi, ca să nu se suprapună.
  document.getElementById("intro")?.remove();
  document.getElementById("introCinematic")?.remove();
  document.getElementById("logoIntro")?.remove();

  const overlay = document.createElement("div");
  overlay.id = "finalLogoIntro";
  overlay.innerHTML = `
    <button id="finalSkip" type="button">Sari peste</button>

    <div class="final-intro-stage">
      <svg class="final-intro-svg" viewBox="0 0 800 800"
           role="img" aria-label="Logo animat Admitere Medicină">
        <defs>
          <linearGradient id="finalGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff0b4"/>
            <stop offset="45%" stop-color="#d6b15f"/>
            <stop offset="100%" stop-color="#8d6722"/>
          </linearGradient>
          <linearGradient id="finalPaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#eee6d6"/>
          </linearGradient>
          <filter id="finalGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <circle class="final-draw final-circle" cx="400" cy="350" r="270"
          fill="none" stroke="url(#finalGold)" stroke-width="10"/>

        <path class="final-draw final-staff" d="M400 170 V515"
          fill="none" stroke="url(#finalGold)" stroke-width="18"
          stroke-linecap="round"/>

        <circle cx="400" cy="150" r="24" fill="url(#finalGold)"/>

        <path class="final-draw final-snake"
          d="M430 215
             C520 235 525 300 435 325
             C330 355 335 425 435 452
             C485 465 475 505 425 515"
          fill="none" stroke="url(#finalGold)" stroke-width="18"
          stroke-linecap="round" stroke-linejoin="round"/>

        <path class="final-draw final-snake-head"
          d="M430 215 Q458 195 485 214 Q463 227 440 230"
          fill="none" stroke="url(#finalGold)" stroke-width="12"
          stroke-linecap="round" stroke-linejoin="round"/>

        <g class="final-book">
          <path d="M180 510 Q290 455 392 520 V650 Q285 585 180 625 Z"
            fill="url(#finalPaper)" stroke="url(#finalGold)" stroke-width="10"/>
          <path d="M620 510 Q510 455 408 520 V650 Q515 585 620 625 Z"
            fill="url(#finalPaper)" stroke="url(#finalGold)" stroke-width="10"/>
          <path d="M400 520 V655" stroke="url(#finalGold)" stroke-width="9"/>
        </g>

        <g class="final-spark" filter="url(#finalGlow)">
          <path d="M400 65 V125 M370 95 H430"
            stroke="#ffe99e" stroke-width="7" stroke-linecap="round"/>
          <path d="M382 77 L418 113 M418 77 L382 113"
            stroke="#ffe99e" stroke-width="4" stroke-linecap="round"/>
        </g>
      </svg>

      <img class="final-logo-image" src="logo-final.png"
           alt="Admitere Medicină – dr. Zamfir Alexandru">

      <div class="final-intro-caption">
        Pregătire • Evaluare • Performanță
      </div>
    </div>`;

  document.body.appendChild(overlay);

  const closeIntro = () => {
    overlay.classList.add("final-intro-hide");
    setTimeout(() => overlay.remove(), 950);
  };

  document.getElementById("finalSkip")?.addEventListener("click", closeIntro);

  // Durata totală a intro-ului.
  setTimeout(closeIntro, 6500);
});
