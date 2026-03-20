// script.js
const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

const quizData = [
  {
    image: "images/sun.png",
    options: ["Sun", "Moon", "Earth", "Mars"],
    answer: "Sun"
  },
  {
    image: "images/moon.png",
    options: ["Sun", "Moon", "Star", "Planet"],
    answer: "Moon"
  },
  {
    image: "images/earth.png",
    options: ["Mars", "Earth", "Jupiter", "Saturn"],
    answer: "Earth"
  },
  {
    image: "images/lion.png",
    options: ["Tiger", "Lion", "Leopard", "Cheetah"],
    answer: "Lion"
  },
  {
    image: "images/tiger.png",
    options: ["Lion", "Tiger", "Cat", "Dog"],
    answer: "Tiger"
  },
  {
    image: "images/elephant.png",
    options: ["Rhino", "Elephant", "Hippo", "Buffalo"],
    answer: "Elephant"
  },
  {
    image: "images/apple.png",
    options: ["Mango", "Banana", "Apple", "Orange"],
    answer: "Apple"
  },
  {
    image: "images/banana.png",
    options: ["Apple", "Banana", "Grapes", "Papaya"],
    answer: "Banana"
  },
  {
    image: "images/car.png",
    options: ["Bike", "Bus", "Car", "Truck"],
    answer: "Car"
  },
  {
    image: "images/airplane.png",
    options: ["Helicopter", "Airplane", "Rocket", "Drone"],
    answer: "Airplane"
  }
];

let currentQuestion = 0;
let score = 0;

const questionImage = document.getElementById("questionImage");
const optionsDiv = document.getElementById("options");
const scoreSpan = document.getElementById("score");
const progressBar = document.getElementById("progress");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionImage.src = q.image;
  optionsDiv.innerHTML = "";

  progressBar.style.width = ((currentQuestion) / quizData.length) * 100 + "%";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => {
      if (option === q.answer) {
        score += 10;
        correctSound.play();
      } else {
        score -= 5;
        wrongSound.play();
      }

      scoreSpan.innerText = score;
      currentQuestion++;

      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        progressBar.style.width = "100%";
        setTimeout(() => {
          alert("Quiz Finished! Final Score: " + score);
        }, 300);
      }
    };

    optionsDiv.appendChild(btn);
  });
}

loadQuestion();
