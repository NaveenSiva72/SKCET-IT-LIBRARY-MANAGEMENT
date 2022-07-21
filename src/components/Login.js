import React ,{useState} from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import './stylelog.css';
import {Helmet} from "react-helmet";

const Login = () => {

    const navigate =useNavigate();

        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");

        const signIn =()=>{
            console.log("owuesgheoiuawgebholgawsjnpbh;kj");
            signInWithEmailAndPassword(auth , email , password)
            .then(auth => navigate("/Dashboard"))
            setEmail("")
            setPassword("")
            .catch(error=>alert(error))
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
          <h2 class="form_title title">SIGN IN</h2>
          <input class="form__input"  placeholder='Email' onChange={(e) =>setEmail(e.target.value) }/>
          <input class="form__input" placeholder='Password' type="password" onChange={(e) =>setPassword(e.target.value) }/>
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
          <button class="switch__button button switch-btn">SIGN IN</button>
        </div>
      </div>
    </div>  
    </center>
    
  
  )
}

export default Login