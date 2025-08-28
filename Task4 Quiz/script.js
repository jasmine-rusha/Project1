const questions = [
  {
    text: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "HO2"],
    answerIndex: 1
  },
  {
    text: "Which planet is known as the Blue Planet?",
    options: ["Earth", "Mars", "Neptune", "Venus"],
    answerIndex: 0
  },
  {
    text: "What part of the cell contains genetic material?",
    options: ["Nucleus", "Cytoplasm", "Mitochondria", "Cell membrane"],
    answerIndex: 0
  },
  {
    text: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answerIndex: 2
  },
  {
    text: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
    answerIndex: 0
  },
  {
    text: "Which organ in the human body purifies blood?",
    options: ["Lungs", "Heart", "Kidneys", "Liver"],
    answerIndex: 2
  },
  {
    text: "Which planet is the largest in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    answerIndex: 1
  },
  {
    text: "Which vitamin is produced when your skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    answerIndex: 2
  },
  {
    text: "Which element has the chemical symbol 'Au'?",
    options: ["Silver", "Gold", "Aluminium", "Argon"],
    answerIndex: 1
  },
  {
    text: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "80°C"],
    answerIndex: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.text;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${index}">${option}`;
    optionsEl.appendChild(label);
  });

  progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  nextBtn.disabled = true;
}

optionsEl.addEventListener("change", () => {
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    const answer = parseInt(selected.value);
    if (answer === questions[currentQuestion].answerIndex) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
