const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ul = document.querySelector(`#ingredients`);
// console.log(ul);
// const createEls = ingredients.map(ingredient => {
//   const li = document.createElement("li");
//   console.log(li);
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// });
// ul.append(...createEls);

const ul = document.querySelector("#ingredients");
console.log(ul)

const liEls = ingredients.map(ingredient => {
const li = document.createElement("li");
li.textContent= ingredient;
li.classList.add("item");
return li;
});
ul.append(...liEls);
