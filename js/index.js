//show / hide answers

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
