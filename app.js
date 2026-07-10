const container = document.getElementById("questions");
const progress = document.getElementById("progress");
const timerElement = document.getElementById("timer");
const intro = document.getElementById("intro");
const app = document.getElementById("app");
const skipIntro = document.getElementById("skipIntro");

let timp = durataMinute * 60;
let timerInterval;
let testPredat = false;

function citesteBarem(text) {
    const rezultat = {};
    text.replace(/\s/g, "").split(",").forEach(item => {
        const [nr, litera] = item.split("-");
        if (nr && litera) rezultat[Number(nr)] = litera.toUpperCase();
    });
    return rezultat;
}

const barem = citesteBarem(baremText);

document.getElementById("titluTest").innerText = numeTest;
document.getElementById("dataAfisata").innerHTML =
    `Data testului: <strong>${dataTest}</strong>`;

function inchideIntro() {
    intro.classList.add("intro-hidden");
    app.classList.remove("app-hidden");
    setTimeout(() => intro.remove(), 900);
}

skipIntro.addEventListener("click", inchideIntro);
setTimeout(inchideIntro, 4200);

function genereazaIntrebari() {
    container.innerHTML = "";

    for (let i = 1; i <= totalIntrebari; i++) {
        const div = document.createElement("div");
        div.className = "question";

        const variante = ["A", "B", "C", "D", "E"]
            .map(litera => `
                <label class="answer-option">
                    <input
                        type="radio"
                        name="q${i}"
                        value="${litera}"
                        onchange="actualizeazaProgres()"
                    >
                    <span>${litera}</span>
                </label>
            `).join("");

        div.innerHTML = `
            <div class="question-number">${i}</div>
            <div class="answers">${variante}</div>
        `;

        container.appendChild(div);
    }
}

function actualizeazaProgres() {
    let completate = 0;

    for (let i = 1; i <= totalIntrebari; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            completate++;
        }
    }

    progress.innerHTML =
        `Întrebări completate: <strong>${completate} / ${totalIntrebari}</strong>`;
}

function afiseazaTimp() {
    const minute = Math.floor(timp / 60);
    const secunde = timp % 60;
    timerElement.innerHTML =
        `Timp rămas: <strong>${minute}:${String(secunde).padStart(2, "0")}</strong>`;
}

function pornesteTimer() {
    afiseazaTimp();

    timerInterval = setInterval(() => {
        timp--;
        afiseazaTimp();

        if (timp === 15 * 60) {
            alert("Mai aveți 15 minute.");
        }

        if (timp === 5 * 60) {
            alert("Mai aveți 5 minute.");
        }

        if (timp <= 0) {
            clearInterval(timerInterval);
            predaTest(true);
        }
    }, 1000);
}

function predaTest(automat = false) {
    if (testPredat) return;

    const nume = document.getElementById("nume").value.trim();

    if (!nume) {
        if (automat) {
            alert("Timpul a expirat, dar numele candidatului nu este completat.");
            return;
        }

        alert("Te rog introdu numele și prenumele.");
        return;
    }

    if (!automat) {
        const completate = document.querySelectorAll(
            '#questions input[type="radio"]:checked'
        ).length;

        const lipsa = totalIntrebari - completate;
        const mesaj = lipsa > 0
            ? `Mai sunt ${lipsa} întrebări necompletate. Doriți să predați?`
            : "Doriți să predați lucrarea?";

        if (!confirm(mesaj)) return;
    }

    testPredat = true;
    clearInterval(timerInterval);

    let corecte = 0;
    const gresite = [];
    const necompletate = [];

    for (let i = 1; i <= totalIntrebari; i++) {
        const raspuns = document.querySelector(`input[name="q${i}"]:checked`);

        if (!raspuns) {
            necompletate.push(i);
            continue;
        }

        if (raspuns.value === barem[i]) {
            corecte++;
        } else {
            gresite.push({
                intrebare: i,
                raspunsElev: raspuns.value,
                raspunsCorect: barem[i]
            });
        }
    }

    const procent = ((corecte / totalIntrebari) * 100).toFixed(2);
    const timpFolositSecunde = durataMinute * 60 - Math.max(timp, 0);
    const minuteFolosite = Math.floor(timpFolositSecunde / 60);
    const secundeFolosite = timpFolositSecunde % 60;

    const randuriGresite = gresite.length
        ? gresite.map(item => `
            <tr>
                <td>${item.intrebare}</td>
                <td class="wrong"><strong>${item.raspunsElev}</strong></td>
                <td class="correct"><strong>${item.raspunsCorect}</strong></td>
            </tr>
        `).join("")
        : `
            <tr>
                <td colspan="3">Nu există răspunsuri greșite.</td>
            </tr>
        `;

    const listaNecompletate = necompletate.length
        ? necompletate.join(", ")
        : "Nicio întrebare necompletată.";

    const baremComplet = Array.from({ length: totalIntrebari }, (_, index) => {
        const nr = index + 1;
        return `<div class="key-cell">${nr}: <b>${barem[nr]}</b></div>`;
    }).join("");

    document.body.innerHTML = `
        <main class="app-shell">
            <header class="site-header">
                <div class="brand">
                    <img src="assets/logo.svg" alt="Logo" class="brand-logo">
                    <div>
                        <h1>${numeTest}</h1>
                        <h2>Admitere Medicină – dr. Zamfir Alexandru</h2>
                        <p>Data testului: <strong>${dataTest}</strong></p>
                    </div>
                </div>
            </header>

            <div class="container">
                <section class="result-card">
                    <h2>${automat ? "Timpul a expirat. Lucrarea a fost predată automat." : "Lucrarea a fost predată cu succes."}</h2>
                    <p><strong>Candidat:</strong> ${nume}</p>
                    <p><strong>Timp utilizat:</strong> ${minuteFolosite} min ${secundeFolosite} sec</p>

                    <div class="score-grid">
                        <div class="score-box">
                            Punctaj
                            <strong>${corecte} / ${totalIntrebari}</strong>
                        </div>
                        <div class="score-box correct">
                            Corecte
                            <strong>${corecte}</strong>
                        </div>
                        <div class="score-box wrong">
                            Greșite
                            <strong>${gresite.length}</strong>
                        </div>
                    </div>

                    <p><strong>Procent:</strong> ${procent}%</p>
                    <p class="unanswered"><strong>Necompletate:</strong> ${necompletate.length}</p>
                </section>

                <section class="result-card">
                    <h2>Întrebările greșite</h2>
                    <table class="result-table">
                        <thead>
                            <tr>
                                <th>Întrebarea</th>
                                <th>Răspunsul elevului</th>
                                <th>Răspunsul corect</th>
                            </tr>
                        </thead>
                        <tbody>${randuriGresite}</tbody>
                    </table>
                </section>

                <section class="result-card">
                    <h2>Întrebările necompletate</h2>
                    <p>${listaNecompletate}</p>
                </section>

                <section class="result-card">
                    <button
                        class="toggle-button"
                        type="button"
                        onclick="
                            const zona = document.getElementById('baremComplet');
                            const deschis = zona.hidden === false;
                            zona.hidden = deschis;
                            this.textContent = deschis
                                ? 'AFIȘEAZĂ BAREMUL COMPLET'
                                : 'ASCUNDE BAREMUL COMPLET';
                        "
                    >
                        AFIȘEAZĂ BAREMUL COMPLET
                    </button>

                    <div id="baremComplet" class="answer-key-grid" hidden>
                        ${baremComplet}
                    </div>
                </section>
            </div>

            <footer>
                © 2026 Admitere Medicină – dr. Zamfir Alexandru
            </footer>
        </main>
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

genereazaIntrebari();
pornesteTimer();
