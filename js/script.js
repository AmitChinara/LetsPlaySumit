const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");
const optionsBox = document.getElementById("optionsBox");
const dropZone = document.getElementById("dropZone");
const hintBox = document.getElementById("hintBox");
const nextBtn = document.getElementById("nextBtn");

let dragged = null;

let qIndex = 0;
let stepIndex = 0;
let phase = "info";

let completedSteps = [];
let isCompleted = false;

/* -----------------------------
   SOLVER
------------------------------ */
const solve = (qIndex) => {
    const answers = {
        0: 6, 1: 7, 2: 8, 3: 5, 4: 7,
        5: 7, 6: 7, 7: 5, 8: 6, 9: 7
    };
    return answers[qIndex] ?? "?";
};

/* -----------------------------
   RENDER UI (CLEAN)
------------------------------ */
const renderUI = () => {

    const q = gameData[qIndex];
    if (!q) return;

    const steps = phase === "info" ? q.infoSteps : q.solutionSteps;
    const step = steps?.[stepIndex];

    questionBox.innerHTML = q.question;

    answerBox.innerHTML = "";

    // ✅ render only learning steps (NO solution duplication)
    completedSteps.forEach(s => {
        answerBox.innerHTML += `<div class="answer-item">${s}</div>`;
    });

    // 🔥 FINAL STATE: show only solution once
    if (isCompleted) {

        hintBox.innerText = "🎉 Completed! Click Next Question";

        answerBox.innerHTML += `
            <div class="answer-item active-step">
                x = ${solve(qIndex)}
            </div>
        `;

        return;
    }

    // STEP VIEW
    if (step) {

        hintBox.innerText = step.blank;

        answerBox.innerHTML += `
            <div class="answer-item active-step">
                ${step.blank}
            </div>
        `;

        optionsBox.innerHTML = step.options.map(opt => `
            <div class="option" draggable="true" data-type="${opt.type}">
                ${opt.text}
            </div>
        `).join("");
    }
};

/* -----------------------------
   DRAG LOGIC
------------------------------ */
document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("option")) {
        dragged = e.target;
    }
});

dropZone.addEventListener("dragover", (e) => e.preventDefault());

dropZone.addEventListener("drop", () => {

    const q = gameData[qIndex];
    const steps = phase === "info" ? q.infoSteps : q.solutionSteps;
    const step = steps[stepIndex];

    if (!step) return;

    const selected = dragged.dataset.type;

    if (selected !== step.answer) {
        dropZone.classList.add("wrong");
        setTimeout(() => dropZone.classList.remove("wrong"), 500);
        return;
    }

    dropZone.classList.add("correct");

    // ✅ IMPORTANT: NEVER STORE SOLUTION
    if (step.answer !== "sol") {
        completedSteps.push(dragged.innerText);
    }

    setTimeout(() => {
        dropZone.classList.remove("correct");
        nextStep();
    }, 400);
});

/* -----------------------------
   STEP CONTROL
------------------------------ */
const nextStep = () => {

    const q = gameData[qIndex];
    const steps = phase === "info" ? q.infoSteps : q.solutionSteps;

    stepIndex++;

    if (stepIndex >= steps.length) {

        if (phase === "info") {

            phase = "solution";
            stepIndex = 0;

        } else {

            isCompleted = true;

            nextBtn.disabled = false;
            nextBtn.classList.add("enabled");

            renderUI();
            return;
        }
    }

    renderUI();
};

/* -----------------------------
   NEXT QUESTION
------------------------------ */
nextBtn.addEventListener("click", () => {

    qIndex++;
    phase = "info";
    stepIndex = 0;
    completedSteps = [];
    isCompleted = false;

    nextBtn.disabled = true;
    nextBtn.classList.remove("enabled");

    renderUI();
});

/* -----------------------------
   INIT
------------------------------ */
renderUI();