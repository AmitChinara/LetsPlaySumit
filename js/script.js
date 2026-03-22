// script.js
const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

const quizData = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", // apples
    options: ["Apple", "Apples", "Applees", "Appls"],
    answer: "Apples"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048315.png", // boxes
    options: ["Box", "Boxs", "Boxes", "Boxess"],
    answer: "Boxes"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/616/616430.png", // cats
    options: ["Cat", "Cats", "Cates", "Catss"],
    answer: "Cats"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", // dogs
    options: ["Dog", "Dogs", "Doges", "Dogss"],
    answer: "Dogs"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png", // buses
    options: ["Bus", "Buss", "Buses", "Busies"],
    answer: "Buses"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", // children
    options: ["Child", "Childs", "Children", "Childes"],
    answer: "Children"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", // men
    options: ["Man", "Mans", "Men", "Mens"],
    answer: "Men"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png", // women
    options: ["Woman", "Womans", "Women", "Womens"],
    answer: "Women"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", // teeth
    options: ["Tooth", "Tooths", "Teeth", "Toothes"],
    answer: "Teeth"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907253.png", // feet
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
