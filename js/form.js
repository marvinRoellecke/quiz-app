//dark mode button

const bodyElement = document.querySelector('[data-js="body"]');
const headerElement = document.querySelector('[data-js="header"]');
const footerElement = document.querySelector('[data-js="footer"]');
const progressBarDark = document.querySelector('[data-js="progress-bar"]');

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  bodyElement.classList.add("body--dark");
  headerElement.classList.add("header--dark");
  footerElement.classList.add("footer--dark");
  progressBarDark.classList.add("progress-bar--dark");

  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  bodyElement.classList.remove("body--dark");
  headerElement.classList.remove("header--dark");
  footerElement.classList.remove("footer--dark");
  progressBarDark.classList.remove("progress-bar--dark");

  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

const form = document.querySelector('[data-js="form"]');
const mainNewCards = document.querySelector('[data-js="new-cards"]');

function createNewCard(newCard) {
  //const test = document.createElement("p");
  //sectionNewCards.append(test);

  const newSection = document.createElement("section");
  newSection.classList.add("quiz-card");
  newSection.classList.add("question");
  newSection.setAttribute("data-js", "quizCardC1");

  newSection.innerHTML = `
  <button
  type="button"
  class="button__bookmark"
  data-js="quiz-card__button-bookmarkC1"
>
  <svg
    data-js="quiz-card__bookmarkC1"
    class="quiz-card__bookmark"
    height="24"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
</button>
<span class="quiz-card__title"><h2>#c1</h2></span>
  `;
  mainNewCards.append(newSection);

  const newQuestion = document.createElement("p");
  newQuestion.classList.add("p__question");
  newQuestion.textContent = newCard.question;
  newSection.append(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("p__answer");
  newAnswer.classList.add("show-answer");
  newAnswer.setAttribute("data-js", "p__answerC1");
  newAnswer.textContent = newCard.answer;
  newSection.append(newAnswer);

  const newButton = document.createElement("button");
  newButton.classList.add("button__answer");
  newButton.setAttribute("data-js", "btnAnswerC1");
  newButton.setAttribute("type", "button");
  newButton.textContent = "Show Answer";
  newSection.append(newButton);

  const newAside = document.createElement("aside");
  newAside.classList.add("quiz-card__tag");
  newSection.append(newAside);

  const newTag = document.createElement("span");
  newTag.textContent = newCard.tag;
  newAside.append(newTag);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = {
    question: event.target.elements.question.value,
    answer: event.target.elements.answer.value,
    tag: event.target.elements.tag.value,
  };
  createNewCard(newCard);
  console.log(newCard);

  const answerC1 = document.querySelector('[data-js="p__answerC1"]');
  const btnAnswerC1 = document.querySelector('[data-js="btnAnswerC1"]');

  btnAnswerC1.addEventListener("click", () => {
    answerC1.classList.toggle("show-answer");
    if (answerC1.classList.contains("show-answer")) {
      btnAnswerC1.textContent = "Show Answer";
    } else {
      btnAnswerC1.textContent = "Hide Answer";
    }
  });

  const quizCardBookmarkC1 = document.querySelector(
    '[data-js="quiz-card__bookmarkC1"]'
  );
  const btnBookmarkC1 = document.querySelector(
    '[data-js="quiz-card__button-bookmarkC1"]'
  );

  btnBookmarkC1.addEventListener("click", () => {
    quizCardBookmarkC1.classList.toggle("quiz-card__bookmark--checked");
  });

  event.target.elements.question.focus();
  event.target.reset();
});

const charCountQuestion = document.querySelector(
  '[data-js="charCountQuestion"]'
);
const charCountAnswer = document.querySelector('[data-js="charCountAnswer"]');
const inputQuestion = document.querySelector('[data-js="inputQuestion"]');
const inputAnswer = document.querySelector('[data-js="inputAnswer"]');

inputQuestion.addEventListener("input", (event) => {
  const letterCount = inputQuestion.value.length;

  const lettersLeft = 150 - letterCount;

  charCountQuestion.textContent = `${lettersLeft} characters left`;
});

inputAnswer.addEventListener("input", (event) => {
  const letterCount = inputAnswer.value.length;

  const lettersLeft = 150 - letterCount;

  charCountAnswer.textContent = `${lettersLeft} characters left`;
});

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", () => {
  const currentPos = window.scrollY;

  const heightWin = window.innerHeight;

  const heightWeb = document.body.clientHeight;

  const percentPos = Math.round((currentPos / (heightWeb - heightWin)) * 100);

  progressBar.style.width = percentPos + "%";
});
