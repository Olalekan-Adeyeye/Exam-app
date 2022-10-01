const indexForm = document.getElementById("index-form");

indexForm.addEventListener('submit', function(event){
    event.preventDefault()
    let formData = new FormData(event.target);
    let email = formData.get("email")
    localStorage.setItem("email", email);
    sessionStorage.setItem("accountValidated", true)
    console.log(sessionStorage.getItem("accountValidated"))
    window.location = "start.html"
})