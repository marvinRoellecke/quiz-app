//dark mode button

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="button__dark-mode"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("body--dark");
  console.log("Clicked dark mode button");
});