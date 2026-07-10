const container = document.getElementById("questions");
const progress = document.getElementById("progress");

let timp = durataMinute * 60;
let timerInterval;

function citesteBarem(text) {
    const rezultat = {};
    text.replace(/\s/g, "").split(",").forEach(item => {
        const [nr, litera] = item.split("-");
        if (nr && litera) rezultat[Number(nr)] = litera.toUpperCase();
    });
    return rezultat;
}

const barem = citesteBarem(baremText);

document.querySelector("header h1").innerText = numeTest;
document.querySelector("header h2").innerText = "Admitere Medicină – dr. Zamfir Alexandru";
document.querySelector("header p").innerHTML = `Data testului: <strong>${dataTest}</strong>`;

function genereazaIntrebari() {
    container.innerHTML = "";

    for (let i = 1; i <= totalIntrebari; i++) {
        const div = document.createElement("div");
        div.className = "question";

        div.innerHTML = `
            <h3>Întrebarea ${i}</h3>
            <div class="answers">
                ${["A", "B", "C", "D", "E"].map(litera => `
                    <label>
                        <input type="radio" name="q${i}" value="${litera}" onchange="actualizeazaProgres()">
                        ${litera}
                    </label>
                `).join("")}
            </div>
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

    progress.innerHTML = `Întrebări completate: ${completate} / ${totalIntrebari}`;
}

function pornesteTimer() {
    document.getElementById("timer").innerHTML = `Timp rămas: ${durataMinute}:00`;

    timerInterval = setInterval(() => {
        timp--;

        const minute = Math.floor(timp / 60);
        const secunde = timp % 60;

        document.getElementById("timer").innerHTML =
            `Timp rămas: ${minute}:${secunde < 10 ? "0" : ""}${secunde}`;

        if (timp <= 0) {
            clearInterval(timerInterval);
            predaTest();
        }
    }, 1000);
}

function predaTest() {
    const nume = document.getElementById("nume").value.trim();

    if (!nume) {
        alert("Te rog introdu numele și prenumele.");
        return;
    }

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

    const randuriGresite = gresite.length
        ? gresite.map(item => `
            <tr>
                <td>${item.intrebare}</td>
                <td style="color:#b30000; font-weight:bold;">${item.raspunsElev}</td>
                <td style="color:#198754; font-weight:bold;">${item.raspunsCorect}</td>
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

    const randuriBarem = Array.from(
        { length: totalIntrebari },
        (_, index) => {
            const nr = index + 1;
            return `
                <tr>
                    <td>${nr}</td>
                    <td style="color:#198754; font-weight:bold;">${barem[nr]}</td>
                </tr>
            `;
        }
    ).join("");

    clearInterval(timerInterval);

    document.body.innerHTML = `
        <header>
            <h1>${numeTest}</h1>
            <h2>Admitere Medicină – dr. Zamfir Alexandru</h2>
            <p>Data testului: <strong>${dataTest}</strong></p>
        </header>

        <div class="container">
            <div class="info">
                <h2>Lucrarea a fost predată cu succes.</h2>

                <p><strong>Candidat:</strong> ${nume}</p>
                <p><strong>Punctaj:</strong> ${corecte} / ${totalIntrebari}</p>
                <p><strong>Procent:</strong> ${procent}%</p>
                <p><strong>Corecte:</strong> ${corecte}</p>
                <p><strong>Greșite:</strong> ${gresite.length}</p>
                <p><strong>Necompletate:</strong> ${necompletate.length}</p>
            </div>

            <div class="info">
                <h2>Întrebările greșite</h2>

                <table style="width:100%; border-collapse:collapse; text-align:center;">
                    <thead>
                        <tr>
                            <th style="border:1px solid #ccc; padding:10px;">Întrebarea</th>
                            <th style="border:1px solid #ccc; padding:10px;">Răspunsul elevului</th>
                            <th style="border:1px solid #ccc; padding:10px;">Răspunsul corect</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${randuriGresite}
                    </tbody>
                </table>
            </div>

            <div class="info">
                <h2>Întrebările necompletate</h2>
                <p>${listaNecompletate}</p>
            </div>

            <div class="info">
                <button
                    type="button"
                    onclick="
                        const sectiune = document.getElementById('baremComplet');
                        sectiune.style.display =
                            sectiune.style.display === 'none' ? 'block' : 'none';
                        this.innerText =
                            sectiune.style.display === 'none'
                            ? 'AFIȘEAZĂ BAREMUL COMPLET'
                            : 'ASCUNDE BAREMUL COMPLET';
                    "
                >
                    AFIȘEAZĂ BAREMUL COMPLET
                </button>

                <div id="baremComplet" style="display:none; margin-top:20px;">
                    <h2>Baremul complet</h2>

                    <table style="width:100%; border-collapse:collapse; text-align:center;">
                        <thead>
                            <tr>
                                <th style="border:1px solid #ccc; padding:10px;">Întrebarea</th>
                                <th style="border:1px solid #ccc; padding:10px;">Răspuns corect</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${randuriBarem}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
genereazaIntrebari();
pornesteTimer();
