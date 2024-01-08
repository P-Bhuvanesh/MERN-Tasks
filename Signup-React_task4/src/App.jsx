import React, { useEffect } from "react";
import './App.css'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const App = () => {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("logIn");
    const main = document.getElementById("main");
    
    signUpButton.addEventListener("click", () => {
      main.classList.add("right-panel-active");
    });
    signInButton.addEventListener("click", () => {
      main.classList.remove("right-panel-active");
    });
  }, []);
  

  return (
    <div className="container" id='main'>
      <div className='signup'>
        <form action="#">
          <h1>Create Account</h1>
          <div className="options">
            <a href="#"> <GoogleIcon/> </a>
            <a href="#"> <GitHubIcon/> </a>
            <a href="#"> <LinkedInIcon/> </a>
          </div>
          <span>or use email for registration</span>
          <input type="text" placeholder='Enter username' required/>
          <input type="email" placeholder='Enter your mail' required />
          <input type="password" placeholder='Enter your password' required />
          <input type="password" placeholder='Re-enter your password' required/>
          <button>SignUp</button>
        </form>
      </div>
      <div className="login">
        <form action="#">
          <h1>Login</h1>
          <div className="options">
            <a href="#"> <GoogleIcon/> </a>
            <a href="#"> <GitHubIcon/> </a>
            <a href="#"> <LinkedInIcon/> </a>
          </div>
          <span>or enter the username and password</span>
          <input type="text" placeholder='Enter the username' />      
          <input type="password" placeholder='Enter the password' />
          <a href="#">Forgot password ?</a>
          <button>Login</button>
        </form>
      </div>
      <div className="over">
        <div className="overlay">
          <div className="right">
            <h1>New to community</h1>
            <p>Enter your details and be one among us</p>
            <button className='signUp' id='signUp'>Signup</button>
          </div>
          <div className="left">
            <h1>Already a member of our community</h1>
            <p>Rejoin with us by logging in</p>
            <button className='logIn' id='logIn'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
