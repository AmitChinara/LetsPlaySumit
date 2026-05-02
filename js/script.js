const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");
const hintBox = document.getElementById("hintBox");
const inputField = document.getElementById("inputField");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");

let qIndex = 0;
let stepIndex = 0;
let completedSteps = [];
let isCompleted = false;

/* ----------------------------- */
const normalize = (val) =>
    val.toLowerCase().replace(/\s+/g, "");

/* ----------------------------- */
const isCorrect = (input, answers) => {
    const val = normalize(input);
    return answers.some(ans => normalize(ans) === val);
};

/* ----------------------------- */
const renderUI = () => {

    const q = gameData[qIndex];
    if (!q) return;

    const step = q.steps[stepIndex];

    questionBox.innerHTML = q.question;

    answerBox.innerHTML = "";

    completedSteps.forEach(s => {
        answerBox.innerHTML += `<div class="answer-item">${s}</div>`;
    });

    if (isCompleted) {
        hintBox.innerText = "🎉 Completed!";
        inputField.style.display = "none";
        submitBtn.style.display = "none";
        return;
    }

    hintBox.innerText = step.blank;

    answerBox.innerHTML += `
        <div class="answer-item active-step">
            ${step.blank}
        </div>
    `;

    inputField.value = "";
    inputField.focus();
};

/* ----------------------------- */
const handleSubmit = () => {

    const q = gameData[qIndex];
    const step = q.steps[stepIndex];

    const input = inputField.value;

    if (!isCorrect(input, step.answers)) {
        inputField.classList.add("wrong");
        setTimeout(() => inputField.classList.remove("wrong"), 500);
        return;
    }

    inputField.classList.add("correct");

    // 🔥 IMPORTANT CHANGE HERE
    completedSteps.push(step.display);

    setTimeout(() => {
        inputField.classList.remove("correct");
        nextStep();
    }, 400);
};

submitBtn.addEventListener("click", handleSubmit);

inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSubmit();
});

/* ----------------------------- */
const nextStep = () => {

    const q = gameData[qIndex];

    stepIndex++;

    if (stepIndex >= q.steps.length) {

        isCompleted = true;

        nextBtn.disabled = false;
        nextBtn.classList.add("enabled");

        renderUI();
        return;
    }

    renderUI();
};

/* ----------------------------- */
nextBtn.addEventListener("click", () => {

    qIndex++;
    stepIndex = 0;
    completedSteps = [];
    isCompleted = false;

    nextBtn.disabled = true;
    nextBtn.classList.remove("enabled");

    inputField.style.display = "block";
    submitBtn.style.display = "block";

    renderUI();
});

/* ----------------------------- */
renderUI();