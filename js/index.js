console.clear();

const pAnswerElement = document.querySelector('[data-js="p__answer"]');
const answerButton = document.querySelector('[data-js="button__answer"]');

//answer button

const pAnswerElement2 = document.querySelector('[data-js="p__answer2"]');
const answerButton2 = document.querySelector('[data-js="button__answer2"]');

answerButton2.addEventListener("click", () => {
  pAnswerElement2.classList.toggle("hidden");
  console.log("Clicked answer button");
});

answerButton.addEventListener("click", () => {
  pAnswerElement.classList.toggle("hidden");
  console.log("Clicked answer button");
});
