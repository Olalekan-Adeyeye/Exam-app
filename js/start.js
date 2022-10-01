// Quiz questions
var questions = [
  {
    question:
      "Who lost to Donald Trump in the American Presidential Election?",
    option: [
      "Narendra Modi",
      "Emmanuel Macron",
      "Kim Jong Il",
      "Hilary Clinton",
    ],
    answer: 3,
    checked: false,
    answerPicked: -1,
  },
  {
    question: "In 2019, Coronavirus was first detected in",
    option: [
      "Silicon Valley, USA",
      "Wuhan, China",
      "Gangnam, South Korea",
      "Kuala Lumpur, Malaysia",
    ],
    answer: 1,
    checked: false,
    answerPicked: -1,
  },
  {
    question: 'Which country has the nickname "Uncle Sam"?',
    option: ["Samoa", "Russia", "USA", "England"],
    answer: 2,
    checked: false,
    answerPicked: -1,
  },
  {
    question: "The Bermuda Triangle is also known as",
    option: [
      "The Devil's Triangle",
      "Valley of the Deads",
      "The Apocalypse Zone",
      "Earth's Paradise",
    ],
    answer: 0,
    checked: false,
    answerPicked: -1,
  },
  {
    question: "India is famous for her",
    option: [
      "Food culture",
      "Tourism centers",
      "Beautiful women",
      "Film Industry",
    ],
    answer: 3,
    checked: false,
    answerPicked: -1,
  },
];

// DOM interaction
const questionText = document.getElementById("question");
const options = document.getElementsByClassName("option-text");
const optionContainer =
  document.getElementsByClassName("option-container");
const counter = document.getElementById("counter");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submit = document.getElementById("submit");
const got = document.querySelector(".got");
const over = document.querySelector(".over");
const all = document.querySelector(".all");
const third = document.querySelector(".third");
const ok = document.querySelector("#ok");
const image = document.querySelector("#image");
const second = document.querySelector(".second");
const ok2 = document.querySelector("#ok2");
const help = document.querySelector("#help");

// global variables
let score = 0;
let num = 0;
let timeGiven = 1200000;
let min = null;
let sec = null;

function timer() {
  min = Math.floor(timeGiven / 1000 / 60);
  sec = (timeGiven / 1000) % 60;
  if(min <= 0 && sec <= 0){
    mins.textContent = "00";
    secs.textContent = "00";
    window.location = "result.html"
  }
  else{
    mins.textContent = min < 10 ? "0" + min : min;
      secs.textContent = sec < 10 ? "0" + sec : sec;
  }
}

setInterval(() => {
  timeGiven -= 1000;
  timer();
}, 1000);

function loadQuestion() {
  counter.textContent = num + 1;
  questionText.textContent = questions[num].question;
  for (let i = 0; i < questions[i].option.length; i++) {
    options[i].textContent = questions[num].option[i];
  }
}

function checkSelection() {
  if (questions[num].checked) {
    optionContainer[questions[num].answerPicked].classList.add("chosen");
  }
}

function hideBtn() {
  if (num > 0) prevBtn.classList.remove("hidden");
  else prevBtn.classList.add("hidden");
  if (num + 1 == questions.length) nextBtn.classList.add("hidden");
  else nextBtn.classList.remove("hidden");
}

function clearSelection() {
  for (let j = 0; j < optionContainer.length; j++) {
    optionContainer[j].classList.remove("chosen");
  }
}

nextBtn.addEventListener("click", function () {
  if (num < questions.length - 1) {
    num += 1;
    loadQuestion();
  }
  hideBtn();
  clearSelection();
  checkSelection();
});

prevBtn.addEventListener("click", function () {
  if (num > 0) {
    num -= 1;
    loadQuestion();
  }
  hideBtn();
  clearSelection();
  checkSelection();
});

function chooseAnswerOnCursor(){
  for (let i = 0; i < optionContainer.length; i++) {
    optionContainer[i].addEventListener("click", function () {
      clearSelection();
      questions[num].checked = true;
      questions[num].answerPicked = i;
      optionContainer[i].classList.add("chosen");
    });
  }
}

chooseAnswerOnCursor()

function totalScore() {
  score = 0
  for (let j = 0; j < questions.length; j++) {
    if (questions[j].answer == questions[j].answerPicked) {
      score += 1;
    }
  }
  console.log(score);
}

submit.addEventListener("click", function () {
  let checkSubmit = confirm("This action CANNOT be reversed.\nARE YOU SURE?");
  totalScore();
  if(checkSubmit) window.location = "result.html"
});

window.onload = function () {
  loadQuestion();
};

window.addEventListener("keypress", function (e){
  for (let i = 0; i < 4; i++){
    if(e.keyCode == 97 + i){
      chooseAnswerOnKeyPress(i)
    }
  }
    if (e.keyCode == 110) {
        num += 1
        loadQuestion()
    }
    console.log(e.keyCode)
})

function chooseAnswerOnKeyPress(clicked){
        clearSelection();
        questions[num].checked = true;
        questions[num].answerPicked = clicked;
        optionContainer[clicked].classList.add("chosen");
}
