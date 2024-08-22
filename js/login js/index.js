import {signupForm} from "./signup";
import {loginForm} from "./login";

const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

