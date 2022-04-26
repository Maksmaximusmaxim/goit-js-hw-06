const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);
console.log(span)
input.addEventListener(`input`, (e) => {span.textContent = e.currentTarget.value
if(input.value == ``){
    span.textContent = "Anonymous";
};})
