const answerB1 = document.querySelector('[data-js="p__answerB1"]');
const btnAnswerB1 = document.querySelector('[data-js="btnAnswerB1"]');

btnAnswerB1.addEventListener("click", () => {
  answerB1.classList.toggle("show-answer");
});
const answerB4 = document.querySelector('[data-js="p__answerB4"]');
const btnAnswerB4 = document.querySelector('[data-js="btnAnswerB4"]');

btnAnswerB4.addEventListener("click", () => {
  answerB4.classList.toggle("show-answer");
});
const answerB5 = document.querySelector('[data-js="p__answerB5"]');
const btnAnswerB5 = document.querySelector('[data-js="btnAnswerB5"]');

btnAnswerB5.addEventListener("click", () => {
  answerB5.classList.toggle("show-answer");
});
const answerB7 = document.querySelector('[data-js="p__answerB7"]');
const btnAnswerB7 = document.querySelector('[data-js="btnAnswerB7"]');

btnAnswerB7.addEventListener("click", () => {
  answerB7.classList.toggle("show-answer");
});
const answerB10 = document.querySelector('[data-js="p__answerB10"]');
const btnAnswerB10 = document.querySelector('[data-js="btnAnswerB10"]');

btnAnswerB10.addEventListener("click", () => {
  answerB10.classList.toggle("show-answer");
});

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", () => {
  const currentPos = window.scrollY;

  const heightWin = window.innerHeight;

  const heightWeb = document.body.clientHeight;

  const percentPos = Math.round(((currentPos + heightWin) / heightWeb) * 100);

  progressBar.style.width = percentPos + "%";
});
