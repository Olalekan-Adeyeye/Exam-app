import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js"; 
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCw_n-vsnT66exVkUsEw7fiwmFqW8hZdXI",
    authDomain: "onlineexam-app.firebaseapp.com",
    projectId: "onlineexam-app",
    storageBucket: "onlineexam-app.appspot.com",
    messagingSenderId: "826076436146",
    appId: "1:826076436146:web:b9fc384214f50491b5dbab",
    measurementId: "G-GTSELQ92T2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signIn(email, password, errormsg, toggleButton){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.replace("start.html")
        toggleButton.classList.add
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        errormsg.classList.remove('hidden')
        toggleButton.innerHTML = "SIGN IN"
        toggleButton.classList.remove("disabled")
    });

}

function logOut(){
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });    
}

function isUserLoggedIn(){
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.replace("index.html") 
        }
    });
}


export {signIn, logOut,isUserLoggedIn}