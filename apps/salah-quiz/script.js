const questions = [
    // --- Tijden van het gebed ---
    {
        question: "Hoeveel verplichte dagelijkse gebeden zijn er voor een moslim?",
        answers: [
            { text: "A) 3", correct: false },
            { text: "B) 5", correct: true },
            { text: "C) 7", correct: false }
        ],
        uitleg: "Er zijn vijf verplichte dagelijkse gebeden voor iedere volwassen, toerekeningsvatbare moslim: Fajr (ochtendsgebed), Dhuhr (middagsgebed), Asr (namiddagsgebed), Maghrib (avondgebed) en Isha (nachtgebed). De verplichting hiervan is vastgesteld door de Koran, de Soennah en de consensus van de geleerden."
    },
    {
        question: "Wanneer begint de tijd voor het Fajr-gebed?",
        answers: [
            { text: "A) Bij zonsopgang", correct: false },
            { text: "B) Bij het aanbreken van het ware ochtendgloren (al-fajr al-sādiq)", correct: true },
            { text: "C) Om middernacht", correct: false }
        ],
        uitleg: "De tijd voor het Fajr-gebed begint bij het aanbreken van het ware ochtendgloren (al-fajr al-sādiq), wanneer het licht horizontaal aan de horizon zichtbaar wordt. Het eindigt bij zonsopgang. Het is aanbevolen het Fajr-gebed vroeg te verrichten, bij het aanbreken van de schemering."
    },
    {
        question: "Wanneer begint de tijd voor het Maghrib-gebed?",
        answers: [
            { text: "A) Wanneer de zon op het hoogste punt staat", correct: false },
            { text: "B) Direct bij zonsondergang", correct: true },
            { text: "C) Een uur na zonsondergang", correct: false }
        ],
        uitleg: "De tijd voor het Maghrib-gebed begint direct bij zonsondergang en eindigt, volgens de correcte mening, wanneer de rode schemering (al-shafaq al-ahmar) aan de horizon volledig verdwijnt. Het is aanbevolen het Maghrib-gebed zo spoedig mogelijk na zonsondergang te verrichten."
    },
    {
        question: "Welk gebed begint wanneer de rode schemering aan de horizon verdwijnt?",
        answers: [
            { text: "A) Asr", correct: false },
            { text: "B) Maghrib", correct: false },
            { text: "C) Isha", correct: true }
        ],
        uitleg: "Het Isha-gebed begint wanneer de rode schemering (al-shafaq al-ahmar) aan de horizon volledig is verdwenen. De tijd loopt door tot het aanbreken van het ware ochtendgloren (al-fajr al-sādiq). Het is aanbevolen het Isha-gebed te verrichten vóór het eerste derde deel van de nacht is verstreken."
    },
    {
        question: "Tot wanneer loopt de tijd van het Asr-gebed?",
        answers: [
            { text: "A) Tot zonsopgang", correct: false },
            { text: "B) Tot zonsondergang", correct: true },
            { text: "C) Tot middernacht", correct: false }
        ],
        uitleg: "De tijd voor het Asr-gebed begint wanneer de schaduw van een object even lang is als het object zelf (plus de schaduw tijdens het middaguur), en eindigt bij zonsondergang. Het is echter makrūh (afgekeurd) om het Asr-gebed zo laat te verrichten dat men slechts één rakaat kan voltooien vóór zonsondergang; de aanbevolen tijd eindigt wanneer de zon geelachtig wordt."
    },

    // --- Aantal rakaat & structuur ---
    {
        question: "Hoeveel fard-rakaat telt het Fajr-gebed?",
        answers: [
            { text: "A) 2", correct: true },
            { text: "B) 3", correct: false },
            { text: "C) 4", correct: false }
        ],
        uitleg: "Het Fajr-gebed bestaat uit 2 fard-rakaat. Hiernaast zijn er 2 sunnah mu'akkadah-rakaat vóór het fard. De sunnah van het Fajr-gebed is bijzonder benadrukt en dient niet te worden nagelaten, zelfs niet tijdens een reis."
    },
    {
        question: "Hoeveel fard-rakaat telt het Dhuhr-gebed?",
        answers: [
            { text: "A) 2", correct: false },
            { text: "B) 3", correct: false },
            { text: "C) 4", correct: true }
        ],
        uitleg: "Het Dhuhr-gebed bestaat uit 4 fard-rakaat. Naast de fard zijn er 4 sunnah mu'akkadah-rakaat vóór het fard en 2 sunnah mu'akkadah-rakaat na het fard. Ook het Asr- en Isha-gebed tellen elk 4 fard-rakaat."
    },
    {
        question: "Welk gebed is het enige van de vijf dagelijkse gebeden met 3 fard-rakaat?",
        answers: [
            { text: "A) Fajr", correct: false },
            { text: "B) Maghrib", correct: true },
            { text: "C) Asr", correct: false }
        ],
        uitleg: "Het Maghrib-gebed heeft als enige van de vijf dagelijkse gebeden 3 fard-rakaat. Alle andere gebeden hebben 2 of 4 fard-rakaat: Fajr heeft 2, Dhuhr, Asr en Isha hebben elk 4. Na de 3 fard-rakaat van het Maghrib zijn er 2 sunnah mu'akkadah-rakaat."
    },
    {
        question: "Wat is de juiste volgorde van handelingen binnen één rakaat?",
        answers: [
            { text: "A) Sujud → Ruku' → Qiyam", correct: false },
            { text: "B) Qiyam (staan) → Ruku' (buiging) → Sujud (neerwerping)", correct: true },
            { text: "C) Ruku' → Qiyam → Sujud", correct: false }
        ],
        uitleg: "Binnen elke rakaat staat men eerst rechtop (qiyam) en reciteert Surah al-Fatiha en een extra gedeelte uit de Koran. Daarna volgt de buiging (ruku'), gevolgd door het rechtop staan (i'tidal), en daarna tweemaal de neerwerping (sujud) met daartussen een zitting. Het handhaven van deze volgorde (tartib) is een pilaar van het gebed."
    },
    {
        question: "Hoe wordt het gebed beëindigd?",
        answers: [
            { text: "A) Door op te staan en de Fatiha opnieuw te lezen", correct: false },
            { text: "B) Door stil te blijven zitten totdat de imam opstaat", correct: false },
            { text: "C) Door tweemaal salam te geven (rechts en links)", correct: true }
        ],
        uitleg: "Het gebed wordt afgesloten door de taslim: men draait het hoofd naar rechts en zegt 'As-Salāmu ʿAlaykum wa Raḥmatullāh', en daarna naar links hetzelfde. Het uitspreken van de taslim is een pilaar (rukn) van het gebed en is verplicht om het gebed af te sluiten."
    },

    // --- Voorwaarden & pilaren ---
    {
        question: "Wat is een voorwaarde (shart) voor de geldigheid van het gebed?",
        answers: [
            { text: "A) Het bidden in een moskee", correct: false },
            { text: "B) Het hebben van een geldige wudu (kleine wassing)", correct: true },
            { text: "C) Het dragen van witte kleding", correct: false }
        ],
        uitleg: "Het hebben van een geldige wudu is een van de voorwaarden voor de geldigheid van het gebed. Andere voorwaarden zijn onder meer: het zijn van moslim, het bereikt hebben van de puberteit, het bedekken van de awrah, het gericht zijn naar de Qiblah, en het bevinden binnen de vastgestelde gebedsttijd."
    },
    {
        question: "Welke richting dient een moslim op te bidden?",
        answers: [
            { text: "A) Richting het Oosten", correct: false },
            { text: "B) Richting Mekka (de Qiblah)", correct: true },
            { text: "C) Richting de dichtstbijzijnde moskee", correct: false }
        ],
        uitleg: "Het gericht zijn in de richting van de Ka'bah in Mekka (de Qiblah) is een voorwaarde voor de geldigheid van het gebed. Bij twijfel over de richting dient men naar best vermogen de Qiblah te bepalen op basis van aanwijzingen en tekens. Als men dit met zekerheid niet kan vaststellen, bidt men op basis van zijn beste inschatting."
    },
    {
        question: "Welk van de volgende is een pilaar (rukn) van het gebed die bij weglating de rakaat ongeldig maakt?",
        answers: [
            { text: "A) Het zachtjes lezen van smeekbeden (du'a) tussen de twee sujuds", correct: false },
            { text: "B) Het reciteren van Surah al-Fatihah in elke rakaat", correct: true },
            { text: "C) Het hardop uitspreken van 'Subhana Rabbiya al-A'la' tijdens sujud", correct: false }
        ],
        uitleg: "Het reciteren van Surah al-Fatihah is een pilaar (rukn) van elke rakaat. Wanneer deze pilaar bewust of per ongeluk wordt weggelaten, is de rakaat ongeldig. De smeekbeden tussen de sujuds en de dhikr tijdens de sujud zijn sunnah, maar geen pilaar."
    },
    {
        question: "Wat moet er bedekt zijn tijdens het gebed bij een vrouw?",
        answers: [
            { text: "A) Alleen het hoofd", correct: false },
            { text: "B) Het gehele lichaam, behalve het gezicht en de handen", correct: true },
            { text: "C) Het gebed is geldig ongeacht de kleding", correct: false }
        ],
        uitleg: "Voor een vrouw is de gehele awrah tijdens het gebed het gehele lichaam, met uitzondering van het gezicht en de handen. Voor een man is de minimale awrah het gebied tussen de navel en de knieën. Het bedekken van de awrah is een voorwaarde (shart) voor de geldigheid van het gebed."
    },
    {
        question: "Waardoor wordt de wudu verbroken?",
        answers: [
            { text: "A) Door te boeren", correct: false },
            { text: "B) Door iets onaangeraakts aan te raken", correct: false },
            { text: "C) Door diep te slapen in een liggende of leunende positie", correct: true }
        ],
        uitleg: "Slapen in een liggende of leunende positie verbreekt de wudu, omdat er in die staat darmgas (wind) ongemerkt kan ontsnappen. Slapen in een stevige zittende houding waarbij men niet wegglijdt verbreekt de wudu niet. Andere wudu-brekers zijn: ontlasting of urineren, het verlies van bezinning, en het aanraken van de geslachtsdelen met de blote hand."
    },

    // --- Wat maakt het gebed ongeldig ---
    {
        question: "Wat maakt het gebed ongeldig?",
        answers: [
            { text: "A) Niezen tijdens het gebed", correct: false },
            { text: "B) Opzettelijk spreken tijdens het gebed", correct: true },
            { text: "C) Stilletjes in jezelf denken aan iets anders", correct: false }
        ],
        uitleg: "Opzettelijk spreken tijdens het gebed maakt het gebed ongeldig. Gedachten en afleidingen maken het gebed niet ongeldig, hoewel men zijn concentratie (khushu') dient te bewaren. Niezen op zichzelf is geen bezwaar; men mag echter niet hardop 'alhamdulillah' zeggen als reactie op niezen, want dat telt als spreken."
    },
    {
        question: "Maakt het verlaten van de Qiblah-richting het gebed ongeldig?",
        answers: [
            { text: "A) Nee, het is alleen makrūh", correct: false },
            { text: "B) Ja, wanneer het borststuk zich van de Qiblah afwendt zonder geldige reden", correct: true },
            { text: "C) Alleen als men meer dan een minuut de verkeerde kant op staat", correct: false }
        ],
        uitleg: "Wanneer het borststuk zich zonder geldige reden volledig afwendt van de Qiblah, wordt het gebed ongeldig. Het enigszins draaien van het hoofd zonder het borststuk af te wenden, is makrūh (afgekeurd) maar maakt het gebed niet ongeldig. Bij ernstig gevaar of ziekte gelden andere regels."
    },
    {
        question: "Verbreekt luid lachen het gebed?",
        answers: [
            { text: "A) Nee, zolang het stil blijft", correct: false },
            { text: "B) Ja, luid lachen (waarbij een hoorbaar geluid wordt gemaakt) maakt het gebed ongeldig", correct: true },
            { text: "C) Nee, lachen is altijd toegestaan", correct: false }
        ],
        uitleg: "Luid lachen (qahqahah) — waarbij men een hoorbaar geluid maakt — maakt het gebed ongeldig. Glimlachen of stilletjes lachen (tasabbum) zonder hoorbaar geluid maakt het gebed niet ongeldig, maar is afgeraden omdat het indruist tegen de vereiste eerbiedigheid (khushu') in het gebed."
    },
    {
        question: "Wat dient iemand te doen die vergeet een pilaar van het gebed te verrichten?",
        answers: [
            { text: "A) Het gebed volledig opnieuw beginnen", correct: false },
            { text: "B) De pilaar alsnog uitvoeren als het nog kan, of sujud al-sahw verrichten aan het einde", correct: true },
            { text: "C) Het gebed gewoon afronden; vergissingen worden vergeven", correct: false }
        ],
        uitleg: "Als iemand een pilaar vergeet, dient hij deze alsnog uit te voeren zodra hij het beseft, mits hij nog niet dezelfde pilaar in de volgende rakaat heeft bereikt. Heeft hij die al bereikt, dan telt de latere pilaar als vervanging en dient hij aan het einde sujud al-sahw te verrichten. Pilaren kunnen nooit volledig worden overgeslagen zonder dat de rakaat ongeldig wordt."
    },
    {
        question: "Wat is sujud al-sahw?",
        answers: [
            { text: "A) Een extra gebed dat verricht wordt als men een gebed heeft gemist", correct: false },
            { text: "B) Twee neerwerpingen aan het einde van het gebed ter compensatie van vergissingen", correct: true },
            { text: "C) Een speciaal vrijdagsgebed", correct: false }
        ],
        uitleg: "Sujud al-sahw zijn twee neerwerpingen die aan het einde van het gebed worden verricht ter compensatie van bepaalde vergissingen, zoals het per ongeluk weglaten van een sunnah-handeling of twijfel over het aantal rakaat. Ze worden verricht vóór of na de taslim, afhankelijk van de reden. Sujud al-sahw kan een tekortkoming compenseren, maar vervangt geen weggelaten pilaar."
    }
];

const CATEGORIES = [
    "Tijden",      // vragen 1–5
    "Positie & houdingen",    // vragen 6–10
    "Voorwaarden", // vragen 11–15
    "Geldigheid"             // vragen 16–20
];

function getCategoryLabel(idx) {
    if (idx < 5)  return CATEGORIES[0];
    if (idx < 10) return CATEGORIES[1];
    if (idx < 15) return CATEGORIES[2];
    return CATEGORIES[3];
}

let currentIdx = 0;
let score = 0;
let firstTry = true;
let completionTracked = false;
let completionTrackingRequested = false;
let completionTrackingRetries = 0;
let quizStartTracked = false;

function trackEvent(path, title) {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
        window.goatcounter.count({
            path,
            title,
            event: true
        });
        return true;
    }
    return false;
}

window.restartQuiz = function restartQuiz() {
    location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
    const characterImg = document.getElementById("character-img");
    const resultContainer = document.getElementById("result-container");
    const restartBtn = document.getElementById("restart-btn");
    const qTextElement = document.getElementById("question-text");
    const btnContainer = document.getElementById("answer-buttons");
    const scoreText = document.getElementById("score-display");
    const progressBar = document.getElementById("progress-bar");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const uitlegContainer = document.getElementById("uitleg-container");
    const uitlegTekst = document.getElementById("uitleg-tekst");
    const nextBtn = document.getElementById("next-btn");
    const shareBtn = document.getElementById("whatsapp-share-btn");
    const categoryBadge = document.getElementById("category-badge");

    if (
        !characterImg ||
        !resultContainer ||
        !qTextElement ||
        !btnContainer ||
        !scoreText ||
        !progressBar ||
        !uitlegContainer ||
        !uitlegTekst ||
        !nextBtn
    ) {
        return;
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", window.restartQuiz);
    }

    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const websiteUrl = window.location.href;
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net een leuke kennisquiz over het gebed gedaan. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, "_blank");
            trackEvent("salah-quiz/gedeeld-whatsapp", "Kennisquiz over het gebed gedeeld via WhatsApp");
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (trackEvent("salah-quiz/quiz-voltooid", "Deelnemer heeft de kennisquiz over het gebed afgerond")) {
            completionTracked = true;
            return;
        }

        if (completionTrackingRetries < 10) {
            completionTrackingRetries++;
            setTimeout(trackQuizCompleted, 500);
        }
    }

    window.addEventListener("load", () => {
        if (completionTrackingRequested && !completionTracked) {
            trackQuizCompleted();
        }
    });

    function resetState() {
        while (btnContainer.firstChild) {
            btnContainer.removeChild(btnContainer.firstChild);
        }
    }

    function disableAllAnswerButtons() {
        btnContainer.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
        });
    }

    function showQuestion() {
        resetState();
        firstTry = true;
        resultContainer.classList.add("hide");
        uitlegContainer.classList.add("hide");

        const currentQuestion = questions[currentIdx];
        qTextElement.innerText = currentQuestion.question;
        progressBar.style.width = `${(currentIdx / questions.length) * 100}%`;

        if (categoryBadge) categoryBadge.innerText = getCategoryLabel(currentIdx);

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            button.onclick = () => selectAnswer(button, answer.correct);
            btnContainer.appendChild(button);
        });

        qTextElement.classList.remove("fade-in-element");
        characterImg.classList.remove("fade-in-element", "celebrate", "shake");
        void qTextElement.offsetWidth;
        void characterImg.offsetWidth;
        characterImg.src = "images/mw-neutral.png";
        qTextElement.classList.add("fade-in-element");
        characterImg.classList.add("fade-in-element");
    }

    function selectAnswer(btn, isCorrect) {
        if (btn.disabled) {
            return;
        }
        trackEvent(
            isCorrect ? "salah-quiz/antwoord-goed" : "salah-quiz/antwoord-fout",
            isCorrect ? "Salah quiz antwoord goed" : "Salah quiz antwoord fout"
        );

        const huidigeVraag = questions[currentIdx];

        if (isCorrect) {
            btn.classList.add("correct");
            characterImg.src = "images/mw-happy.png";
            characterImg.classList.add("celebrate");
            if (correctSound) {
                correctSound.currentTime = 0;
                correctSound.play().catch(() => {});
            }
            if (firstTry) {
                score++;
                scoreText.innerText = `Score: ${score}`;
            }
        } else {
            btn.classList.add("wrong");
            firstTry = false;
            characterImg.src = "images/mw-sad.png";
            characterImg.classList.remove("shake");
            void characterImg.offsetWidth;
            characterImg.classList.add("shake");
            if (wrongSound) {
                wrongSound.currentTime = 0;
                wrongSound.play().catch(() => {});
            }
        }

        disableAllAnswerButtons();
        uitlegTekst.innerText = huidigeVraag.uitleg;
        uitlegContainer.classList.remove("hide");
    }

    function showResult() {
        resetState();
        uitlegContainer.classList.add("hide");
        progressBar.style.width = "100%";
        qTextElement.innerText = "Māshā Allāh! Je hebt de Kennisquiz over het gebed afgerond.";
        scoreText.innerHTML = `Eindscore: ${score} van de ${questions.length}<br><br>Moge Allah ons allen helpen ons gebed te onderhouden met aandacht, eerbiedigheid en toewijding. Āmīn!`;
        resultContainer.classList.remove("hide");
        characterImg.src = "images/prayer_end.png";
        characterImg.classList.add("end");

        if (typeof confetti === "function") {
            const duration = 3000;
            const end = Date.now() + duration;
            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ["#d4af37", "#ffffff", "#f1c40f"]
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ["#d4af37", "#ffffff", "#f1c40f"]
                });
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }

        trackQuizCompleted();
    }

    nextBtn.addEventListener("click", () => {
        uitlegContainer.classList.add("hide");
        currentIdx++;
        if (currentIdx < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    showQuestion();
    if (!quizStartTracked) {
        trackEvent("salah-quiz/quiz-gestart", "Salah quiz gestart");
        quizStartTracked = true;
    }
});
