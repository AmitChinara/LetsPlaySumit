const riddles = [
  {
    q: "I speak without a mouth and hear without ears. What am I?",
    options: ["Echo", "Wind", "Shadow", "Voice"],
    answer: "Echo"
  },
  {
    q: "I have keys but no locks. What am I?",
    options: ["Keyboard", "Piano", "Map", "Code"],
    answer: "Keyboard"
  },
  {
    q: "I have a face and two hands but no arms. What am I?",
    options: ["Clock", "Watch", "Mirror", "Robot"],
    answer: "Clock"
  },
  {
    q: "What has to be broken before you can use it?",
    options: ["Egg", "Glass", "Seal", "Code"],
    answer: "Egg"
  },
  {
    q: "I’m tall when young, and short when old. What am I?",
    options: ["Candle", "Tree", "Building", "Stick"],
    answer: "Candle"
  },
  {
    q: "What has one eye but cannot see?",
    options: ["Needle", "Storm", "Camera", "Button"],
    answer: "Needle"
  },
  {
    q: "What gets wetter the more it dries?",
    options: ["Towel", "Sponge", "Cloth", "Rain"],
    answer: "Towel"
  },
  {
    q: "What has legs but doesn’t walk?",
    options: ["Table", "Chair", "Bed", "Desk"],
    answer: "Table"
  },
  {
    q: "What runs but never walks?",
    options: ["Water", "Clock", "Car", "Wind"],
    answer: "Water"
  },
  {
    q: "What has a neck but no head?",
    options: ["Bottle", "Shirt", "Guitar", "Jar"],
    answer: "Bottle"
  }
];

let current = 0;
let score = 0;
let isAnswered = false;

const riddleBox = document.getElementById("riddleBox");
const optionsDiv = document.getElementById("options");
const dropZone = document.getElementById("dropZone");
const scoreSpan = document.getElementById("score");
const table = document.getElementById("resultTable");

function loadRiddle() {
  const r = riddles[current];

  isAnswered = false;

  riddleBox.innerText = r.q;
  optionsDiv.innerHTML = "";

  dropZone.innerText = "Drop Answer Here";
  dropZone.classList.remove("correct", "wrong");

  // use fixed options (NO RANDOM)
  r.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.draggable = true;

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text", opt);
    });

    optionsDiv.appendChild(div);
  });
}

// allow drop
dropZone.addEventListener("dragover", e => e.preventDefault());

// drop logic
dropZone.addEventListener("drop", e => {
  if (isAnswered) return;

  isAnswered = true;

  const selected = e.dataTransfer.getData("text");
  const correct = riddles[current].answer;

  dropZone.innerText = selected;

  if (selected === correct) {
    score += 10;
    dropZone.classList.add("correct");
  } else {
    score -= 5;
    dropZone.classList.add("wrong");

    setTimeout(() => {
      dropZone.innerText = correct;
    }, 2000);
  }

  // add to table
  const row = table.insertRow();
  row.insertCell(0).innerText = riddles[current].q;
  row.insertCell(1).innerText = selected;
  row.insertCell(2).innerText = correct;

  scoreSpan.innerText = score;

  // disable dragging
  document.querySelectorAll(".option").forEach(opt => {
    opt.draggable = false;
  });

  // next question
  setTimeout(() => {
    current++;

    if (current < riddles.length) {
      loadRiddle();
    } else {
      alert("Game Over! Final Score: " + score);
    }
  }, 2000);
});

// start
loadRiddle();