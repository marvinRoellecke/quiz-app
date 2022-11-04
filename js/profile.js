//dark mode button

const bodyElement = document.querySelector('[data-js="body"]');
const headerElement = document.querySelector('[data-js="header"]');
const footerElement = document.querySelector('[data-js="footer"]');
const progressBarDark = document.querySelector('[data-js="progress-bar"]');
const toggleBtn = document.querySelector('[data-js="button__dark-mode"]');
const profileContent = document.querySelector('[data-js="profile__main"]');

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  bodyElement.classList.add("body--dark");
  headerElement.classList.add("header--dark");
  footerElement.classList.add("footer--dark");
  progressBarDark.classList.add("progress-bar--dark");
  profileContent.classList.add("quiz-card--dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  bodyElement.classList.remove("body--dark");
  headerElement.classList.remove("header--dark");
  footerElement.classList.remove("footer--dark");
  progressBarDark.classList.remove("progress-bar--dark");
  profileContent.classList.remove("quiz-card--dark");
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

toggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
