const app = document.getElementById("app");

let questionIndex = 0;
let phase = "info";
let stepIndex = 0;
let draggedItem = null;

let finalInfo = [];
let finalSolution = [];

// render UI
function render() {
    const currentQ = gameData[questionIndex];
    const steps = phase === "info" ? currentQ.infoSteps : currentQ.solutionSteps;
    const step = steps[stepIndex];

    let html = `
        <div class="box">
            <p>${currentQ.question}</p>
        </div>

        <div class="main-container">

            <!-- LEFT PANEL -->
            <div class="left-panel">
                <div class="box">
                    <h3>Your Answer 👇</h3>

                    <b>Given:</b>
                    ${finalInfo.length ? finalInfo.map(i => `<p>${i}</p>`).join("") : "<p>---</p>"}

                    <b>Solution:</b>
                    ${finalSolution.length ? finalSolution.map(s => `<p>${s}</p>`).join("") : "<p>---</p>"}
                </div>
            </div>

            <!-- RIGHT PANEL -->
            <div class="right-panel">

                <div class="box">
                    <h3>${phase === "info" ? "Fill Given Information" : "Build Solution"}</h3>

                    <div class="drop-box" data-answer="${step.answer}">
                        ${step.blank}
                    </div>
                </div>

                <div class="box">
                    ${step.options.map(o => `
                        <div class="option" draggable="true" data-type="${o.type}">
                            ${o.text}
                        </div>
                    `).join("")}
                </div>

            </div>

        </div>
    `;

    app.innerHTML = html;
}

render();

// drag start
document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("option")) {
        draggedItem = e.target;
    }
});

// allow drop
document.addEventListener("dragover", (e) => {
    if (e.target.classList.contains("drop-box")) {
        e.preventDefault();
    }
});

// drop logic
document.addEventListener("drop", (e) => {
    if (e.target.classList.contains("drop-box")) {

        if (draggedItem.dataset.type === e.target.dataset.answer) {

            // show in drop area
            e.target.innerHTML = draggedItem.innerHTML;
            e.target.classList.add("correct");

            // store answer
            if (phase === "info") {
                finalInfo.push(draggedItem.innerHTML);
            } else {
                finalSolution.push(draggedItem.innerHTML);
            }

            // wait 2 sec then move next
            setTimeout(() => {
                stepIndex++;

                const currentQ = gameData[questionIndex];
                const steps = phase === "info" ? currentQ.infoSteps : currentQ.solutionSteps;

                if (stepIndex < steps.length) {
                    render();
                } else {
                    if (phase === "info") {
                        phase = "solution";
                        stepIndex = 0;
                        render();
                    } else {
                        showFinal();
                    }
                }

            }, 2000);

        } else {
            e.target.classList.add("wrong");

            setTimeout(() => {
                e.target.classList.remove("wrong");
            }, 1000);
        }
    }
});

// final screen
function showFinal() {
    let html = `
        <div class="box">
            <h2>✅ Final Solution</h2>

            <h3>Given:</h3>
            ${finalInfo.map(i => `<p>${i}</p>`).join("")}

            <h3>Solution:</h3>
            ${finalSolution.map(s => `<p>${s}</p>`).join("")}
        </div>
    `;

    if (questionIndex < gameData.length - 1) {
        html += `<button onclick="nextQuestion()">Next Question ➡️</button>`;
    } else {
        html += `<h3>🎉 All Questions Completed!</h3>`;
    }

    app.innerHTML = html;
}

// next question
function nextQuestion() {
    questionIndex++;
    phase = "info";
    stepIndex = 0;
    finalInfo = [];
    finalSolution = [];
    render();
}