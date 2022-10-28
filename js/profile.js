//dark mode button

const bodyElement = document.querySelector('[data-js="body"]');
const toggleBtn = document.querySelector('[data-js="button__dark-mode"]');
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  bodyElement.classList.add("body--dark");
  localStorage.setItem("dark-mode", "enabled");
  console.log("Clicked dark mode button");
};

const disableDarkMode = () => {
  bodyElement.classList.remove("body--dark");
  localStorage.setItem("dark-mode", "disabled");
  console.log("Clicked dark mode button");
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
