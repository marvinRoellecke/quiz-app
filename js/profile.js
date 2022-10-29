//dark mode button

const bodyElement = document.querySelector('[data-js="body"]');
const headerElement = document.querySelector('[data-js="header"]');
const footerElement = document.querySelector('[data-js="footer"]');
const toggleBtn = document.querySelector('[data-js="button__dark-mode"]');
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
const quizCardB1 = document.querySelector('[data-js="quizCardB1"]');
const quizCardB4 = document.querySelector('[data-js="quizCardB4"]');
const quizCardB5 = document.querySelector('[data-js="quizCardB5"]');
const quizCardB7 = document.querySelector('[data-js="quizCardB7"]');
const quizCardB10 = document.querySelector('[data-js="quizCardB10"]');
const profileCard = document.querySelector('[data-js="profileCard"]');
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  bodyElement.classList.add("body--dark");
  headerElement.classList.add("header--dark");
  footerElement.classList.add("footer--dark");
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
  quizCardB1.classList.add("quiz-card--dark");
  quizCardB4.classList.add("quiz-card--dark");
  quizCardB5.classList.add("quiz-card--dark");
  quizCardB7.classList.add("quiz-card--dark");
  quizCardB10.classList.add("quiz-card--dark");
  profileCard.classList.add("quiz-card--dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  bodyElement.classList.remove("body--dark");
  headerElement.classList.remove("header--dark");
  footerElement.classList.remove("footer--dark");
  quizCard1.classList.remove("quiz-card--dark");
  quizCard2.classList.remove("quiz-card--dark");
  quizCard3.classList.remove("quiz-card--dark");
  quizCard4.classList.remove("quiz-card--dark");
  quizCard5.classList.remove("quiz-card--dark");
  quizCard6.classList.remove("quiz-card--dark");
  quizCard7.classList.remove("quiz-card--dark");
  quizCard8.classList.remove("quiz-card--dark");
  quizCard9.classList.remove("quiz-card--dark");
  quizCard10.classList.remove("quiz-card--dark");
  quizCardB1.classList.remove("quiz-card--dark");
  quizCardB4.classList.remove("quiz-card--dark");
  quizCardB5.classList.remove("quiz-card--dark");
  quizCardB7.classList.remove("quiz-card--dark");
  quizCardB10.classList.remove("quiz-card--dark");
  profileCard.classList.remove("quiz-card--dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

/*toggleButton.addEventListener("click", () => {
  bodyElement.classList.add("body--dark");
  localStorage.setItem("dark-mode", "enabled");
  console.log("Clicked dark mode button");
});*/

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
