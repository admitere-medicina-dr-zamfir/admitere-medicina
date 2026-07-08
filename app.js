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
    let necompletate = 0;

    for (let i = 1; i <= totalIntrebari; i++) {
        const raspuns = document.querySelector(`input[name="q${i}"]:checked`);

        if (!raspuns) {
            necompletate++;
            continue;
        }

        if (raspuns.value === barem[i]) {
            corecte++;
        }
    }

    const gresite = totalIntrebari - corecte - necompletate;
    const procent = ((corecte / totalIntrebari) * 100).toFixed(2);

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
                <p><strong>Greșite:</strong> ${gresite}</p>
                <p><strong>Necompletate:</strong> ${necompletate}</p>
            </div>
        </div>
    `;
}

genereazaIntrebari();
pornesteTimer();