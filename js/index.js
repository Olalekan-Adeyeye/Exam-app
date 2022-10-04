import {signIn } from "./auth.js";

const togglePassword = document.getElementById("toggle-password")
const password = document.getElementById("password")
const indexForm = document.getElementById("index-form");
const submit = document.getElementById("submit")
const errorMsg = document.getElementById("error-msg")

indexForm.addEventListener('submit', function(event){
    event.preventDefault()
    let formData = new FormData(event.target);
    let email = formData.get("email")
    localStorage.setItem('email', email)
    errorMsg.classList.add("hidden")
    submit.innerHTML = `<span class="wait">PLEASE WAIT  </span><img class="loading-spinner" src="/Images/loading-spinner.png">`
    signIn(email, password.value, errorMsg, submit)
    submit.classList.add('disabled')

})

togglePassword.addEventListener('click', function(){
    if (password.type == "password"){
        password.type = "text"
        togglePassword.src = "images/password-hidden.png"
    }
    else{
        password.type = "password"
        togglePassword.src = "images/password-shown.png"
    }
})