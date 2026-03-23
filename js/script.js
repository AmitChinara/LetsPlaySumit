const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

const quizData = [
  { image: "images/apples.jpg", answer: "Apples" },
  { image: "images/box.jpg", answer: "Box" },
  { image: "images/cats.jpg", answer: "Cats" },
  { image: "images/dogs.jpg", answer: "Dogs" },
  { image: "images/bus.jpg", answer: "Bus" },
  { image: "images/children.jpg", answer: "Children" },
  { image: "images/man.jpg", answer: "Man" },
  { image: "images/women.jpg", answer: "Women" },
  { image: "images/teeth.jpg", answer: "Teeth" },
  { image: "images/feet.jpg", answer: "Feet" }
];

let currentQuestion = 0;
let score = 0;

const questionImage = document.getElementById("questionImage");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const scoreSpan = document.getElementById("score");
const progressBar = document.getElementById("progress");
const feedback = document.getElementById("answerFeedback");
const board = document.getElementById("answerBoard");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionImage.src = q.image;

  progressBar.style.width =
    (currentQuestion / quizData.length) * 100 + "%";

  userInput.value = "";
  feedback.innerText = "";
}

submitBtn.onclick = () => {
  const q = quizData[currentQuestion];

  const userAnswer = userInput.value.trim().toLowerCase();
  const correctAnswer = q.answer.toLowerCase();

  let isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
    score += 10;
    correctSound.play();
  } else {
    feedback.innerText = "❌ Correct answer: " + q.answer;
    feedback.style.color = "red";
    score -= 5;
    wrongSound.play();
  }

  scoreSpan.innerText = score;

  // Add to board
  const li = document.createElement("li");
  li.classList.add(isCorrect ? "correct" : "wrong");
  li.innerText = `Q${currentQuestion + 1}: ${userInput.value || "(blank)"} → ${q.answer}`;
  board.appendChild(li);

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      progressBar.style.width = "100%";
      feedback.innerText = "🎉 Quiz Finished! Score: " + score;
      feedback.style.color = "blue";
    }
  }, 1000);
};

// Allow Enter key
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

loadQuestion();
