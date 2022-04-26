const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, (e)=>{
    if(e.currentTarget.value.length != input.dataset.length){
         
         input.classList.add(`invalid`);
         input.classList.remove(`valid`);

       } else{
        input.classList.remove(`invalid`);
          input.classList.add(`valid`);
        }
     
}
)
