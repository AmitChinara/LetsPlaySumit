const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

const quizData = [
  {
    image: "images/apples.jpg",
    options: ["Apple", "Apples", "Applees", "Appls"],
    answer: "Apples"
  },
  {
    image: "images/box.jpg",
    options: ["Box", "Boxs", "Boxes", "Boxess"],
    answer: "Boxes"
  },
  {
    image: "images/cats.jpg",
    options: ["Cat", "Cats", "Cates", "Catss"],
    answer: "Cats"
  },
  {
    image: "images/dogs.jpg",
    options: ["Dog", "Dogs", "Doges", "Dogss"],
    answer: "Dogs"
  },
  {
    image: "images/bus.jpg",
    options: ["Bus", "Buss", "Buses", "Busies"],
    answer: "Buses"
  },
  {
    image: "images/children.jpg",
    options: ["Child", "Childs", "Children", "Childes"],
    answer: "Children"
  },
  {
    image: "images/man.jpg",
    options: ["Man", "Mans", "Men", "Mens"],
    answer: "Men"
  },
  {
    image: "images/women.jpg",
    options: ["Woman", "Womans", "Women", "Womens"],
    answer: "Women"
  },
  {
    image: "images/teeth.jpg",
    options: ["Tooth", "Tooths", "Teeth", "Toothes"],
    answer: "Teeth"
  },
  {
    image: "images/feet.jpg",
    options: ["Foot", "Foots", "Feet", "Feets"],
    answer: "Feet"
  }
];

let currentQuestion = 0;
let score = 0;

const questionImage = document.getElementById("questionImage");
const optionsDiv = document.getElementById("options");
const scoreSpan = document.getElementById("score");
const progressBar = document.getElementById("progress");
const feedback = document.getElementById("answerFeedback");
const board = document.getElementById("answerBoard");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionImage.src = q.image;
  optionsDiv.innerHTML = "";
  progressBar.style.width = (currentQuestion / quizData.length) * 100 + "%";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => handleAnswer(option, q, btn);

    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(selected, q, btn) {
  const buttons = optionsDiv.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  let isCorrect = selected === q.answer;

  if (isCorrect) {
    btn.classList.add("correct");
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
    score += 10;
    correctSound.play();
  } else {
    btn.classList.add("wrong");

    buttons.forEach(b => {
      if (b.innerText === q.answer) {
        b.classList.add("correct");
      }
    });

    feedback.innerText = "❌ Correct: " + q.answer;
    feedback.style.color = "red";
    score -= 5;
    wrongSound.play();
  }

  scoreSpan.innerText = score;

  // Add to board
  const li = document.createElement("li");
  li.classList.add(isCorrect ? "correct" : "wrong");
  li.innerText = `Q${currentQuestion + 1}: ${selected} → ${q.answer}`;
  board.appendChild(li);

  setTimeout(() => {
    feedback.innerText = "";
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      progressBar.style.width = "100%";
      feedback.innerText = "🎉 Finished! Score: " + score;
      feedback.style.color = "blue";
    }
  }, 1000);
}

loadQuestion();