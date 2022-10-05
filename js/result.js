import { logOut, isUserLoggedIn } from "./auth.js"

logOut()
const email = localStorage.getItem("email")
const container = document.getElementById("container")
const submit = document.getElementById("submit")
container.innerHTML = `
    <h2 class="center">Your exam has been successfully submitted</h2>
    <p class="small center">Your result has been sent to you at ${email}</p>
    `

submit.addEventListener('click', function(e){
    e.preventDefault()
    window.location.replace("index.html")
})