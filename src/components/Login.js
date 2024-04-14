import React ,{useState} from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import './stylelog.css';
import {Helmet} from "react-helmet";

const Login = () => {

    const navigate =useNavigate();

        const [email,setEmail]=useState({email:"",errorStyle:""});
        const [password,setPassword]=useState({password:"",errorStyle:""});

        const signIn =()=>{
          if(email.email==="")
          {
             setEmail({email:"",errorStyle:"1px solid red"});
            
          }
          else if(password.password==="")
          {
            setPassword({password:"",errorStyle:"1px solid red"});
          }
          else{
            signInWithEmailAndPassword(auth, email.email, password.password)
            .then(() => {
                // If sign-in is successful, navigate to Dashboard
                navigate("/Dashboard");
                setEmail("");
                setPassword("");
            })
            .catch(error => {
                // If there's an error, check if it's due to invalid credentials
                if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                    // Handle the error by alerting the user that the credentials are incorrect
                    alert("User does not exist or invalid credentials. Please sign in.");
                } else {
                    // For other errors, display the default error message
                    alert(error.message);
                }
            });
        
          }
        }
      
  return (
   
      <center>
         <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <meta name="generator" content=""/>
        </Helmet>
        <br />
        <br />
        <br />
        <br />
        <br />
      <div class="main">
      <div class="container a-container" id="a-container">
        <div class="form" id="a-form" >
          <h2 class="form_title title" >SIGN IN</h2>
          <input class="form__input" style={{border:email["errorStyle"]}}  placeholder={email.errorStyle==="" ? 'Enter Email' : 'Please fill the details ⚠️'} type="email" onChange={(e) =>setEmail({email:e.target.value,errorStyle:""}) }/>
          <input class="form__input" style={{border:password["errorStyle"]}} placeholder={password.errorStyle==="" ? 'Enter password' : 'Please fill the details ⚠️'} onChange={(e) =>setPassword({password:e.target.value,errorStyle:""}) }/>
          <button class="form__button button" submit onClick={()=>signIn()} >SIGN IN</button>
        </div>
      </div>
      <div class="container b-container" id="b-container">
        <div class="form" id="b-form" >
          <h2 class="form_title title">Sign in to Website</h2>

 
          <button class="form__button button submit">SIGN IN</button>
        </div>
      </div>
      <div class="switch" id="switch-cnt">
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div class="switch__container" id="switch-c1">
          <h2 class="switch__title title">SKCET IT LIBRARY</h2>
          <p class="switch__description description">For student portal ,please login with your personal info</p>
          <button class="switch__button button switch-btn" onClick={()=>navigate("/SignUP")}>SIGN UP</button>
        </div>
      </div>
    </div>  
    </center>
    
  
  )
}

export default Login;