function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
button.addEventListener(`click`, () => {
span.textContent = body.style.backgroundColor = getRandomHexColor();
  // span.textContent = `${getRandomHexColor()}` ;
});