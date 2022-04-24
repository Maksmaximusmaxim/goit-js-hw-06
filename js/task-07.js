const span = document.querySelector(`#text`);
const input = document.querySelector(`#font-size-control`);
input.addEventListener(`input` , ()=> 
    span.style.fontSize  = `${input.value}px`
);