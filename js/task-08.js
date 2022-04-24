const  button = document.querySelector(`button`);
const form = document.querySelector(`.login-form`)

form.addEventListener(`submit`, (e)=> {
    e.preventDefault();
    if(e.currentTarget.email.value ==="" || e.currentTarget.password.value === ""  ){
        return window.alert("я для кого форму делал ? - а ну вернись и заполни")
    }
   const formData= new FormData(e.currentTarget);
const elements = {
    email:e.currentTarget.email.value,
    pass:e.currentTarget.password.value,
}
    console.log(`email:${elements.email}  pass:${elements.pass}`)
    e.currentTarget.reset();
})
