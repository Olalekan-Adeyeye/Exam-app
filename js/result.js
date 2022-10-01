const email = localStorage.getItem("email")
const container = document.getElementById("container")
container.innerHTML = `
    <h2 class="center">Your exam has been submitted</h2>
    <p class="small center">Your result has been sent to you at ${email}</p>
    `
localStorage.removeItem("email")