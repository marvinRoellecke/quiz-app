//show / hide answers
const bodyElement = document.querySelector('[data-js="body"]');
const headerElement = document.querySelector('[data-js="header"]');
const footerElement = document.querySelector('[data-js="footer"]');
const progressBarDark = document.querySelector('[data-js="progress-bar"]');
let darkMode = localStorage.getItem("dark-mode");

const quizCard1 = document.querySelector('[data-js="quizCard1"]');
const quizCard2 = document.querySelector('[data-js="quizCard2"]');
const quizCard3 = document.querySelector('[data-js="quizCard3"]');
const quizCard4 = document.querySelector('[data-js="quizCard4"]');
const quizCard5 = document.querySelector('[data-js="quizCard5"]');
const quizCard6 = document.querySelector('[data-js="quizCard6"]');
const quizCard7 = document.querySelector('[data-js="quizCard7"]');
const quizCard8 = document.querySelector('[data-js="quizCard8"]');
const quizCard9 = document.querySelector('[data-js="quizCard9"]');
const quizCard10 = document.querySelector('[data-js="quizCard10"]');

const enableDarkMode = () => {
  bodyElement.classList.add("body--dark");
  headerElement.classList.add("header--dark");
  footerElement.classList.add("footer--dark");
  progressBarDark.classList.add("progress-bar--dark");
  quizCard1.classList.add("quiz-card--dark");
  quizCard2.classList.add("quiz-card--dark");
  quizCard3.classList.add("quiz-card--dark");
  quizCard4.classList.add("quiz-card--dark");
  quizCard5.classList.add("quiz-card--dark");
  quizCard6.classList.add("quiz-card--dark");
  quizCard7.classList.add("quiz-card--dark");
  quizCard8.classList.add("quiz-card--dark");
  quizCard9.classList.add("quiz-card--dark");
  quizCard10.classList.add("quiz-card--dark");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

const answer = document.querySelector('[data-js="p__answer"]');
const btnAnswer = document.querySelector('[data-js="btnAnswer"]');

btnAnswer.addEventListener("click", () => {
  answer.classList.toggle("show-answer");
});

const answer2 = document.querySelector('[data-js="p__answer2"]');
const btnAnswer2 = document.querySelector('[data-js="btnAnswer2"]');

btnAnswer2.addEventListener("click", () => {
  answer2.classList.toggle("show-answer");
});

const answer3 = document.querySelector('[data-js="p__answer3"]');
const btnAnswer3 = document.querySelector('[data-js="btnAnswer3"]');

btnAnswer3.addEventListener("click", () => {
  answer3.classList.toggle("show-answer");
});

const answer4 = document.querySelector('[data-js="p__answer4"]');
const btnAnswer4 = document.querySelector('[data-js="btnAnswer4"]');

btnAnswer4.addEventListener("click", () => {
  answer4.classList.toggle("show-answer");
});

const answer5 = document.querySelector('[data-js="p__answer5"]');
const btnAnswer5 = document.querySelector('[data-js="btnAnswer5"]');

btnAnswer5.addEventListener("click", () => {
  answer5.classList.toggle("show-answer");
});

const answer6 = document.querySelector('[data-js="p__answer6"]');
const btnAnswer6 = document.querySelector('[data-js="btnAnswer6"]');

btnAnswer6.addEventListener("click", () => {
  answer6.classList.toggle("show-answer");
});

const answer7 = document.querySelector('[data-js="p__answer7"]');
const btnAnswer7 = document.querySelector('[data-js="btnAnswer7"]');

btnAnswer7.addEventListener("click", () => {
  answer7.classList.toggle("show-answer");
});

const answer8 = document.querySelector('[data-js="p__answer8"]');
const btnAnswer8 = document.querySelector('[data-js="btnAnswer8"]');

btnAnswer8.addEventListener("click", () => {
  answer8.classList.toggle("show-answer");
});

const answer9 = document.querySelector('[data-js="p__answer9"]');
const btnAnswer9 = document.querySelector('[data-js="btnAnswer9"]');

btnAnswer9.addEventListener("click", () => {
  answer9.classList.toggle("show-answer");
});

const answer10 = document.querySelector('[data-js="p__answer10"]');
const btnAnswer10 = document.querySelector('[data-js="btnAnswer10"]');

btnAnswer10.addEventListener("click", () => {
  answer10.classList.toggle("show-answer");
});

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", () => {
  const currentPos = window.scrollY;

  const heightWin = window.innerHeight;

  const heightWeb = document.body.clientHeight;

  const percentPos = Math.round(((currentPos + heightWin) / heightWeb) * 100);

  progressBar.style.width = percentPos + "%";
});
