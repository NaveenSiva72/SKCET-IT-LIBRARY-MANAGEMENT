import React ,{useState} from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import './stylelog.css';
import {Helmet} from "react-helmet";
import { border } from '@chakra-ui/react';

const SignUP = () => {
    
    const navigate =useNavigate(); 
    const [userName,setUserName]=useState({userName:'',errorStyle:""});
    const [emailId,setEmailId]=useState({userEmail:"",errorStyle:""});
    const [password,setPassword]=useState({userPassword:"",errorStyle:""});
    const [confirmPassword,setConfirmPassword]=useState({userConfirmPassword:"",errorStyle:""});
    
    const call=()=>{
        if(userName.userName === '') {setUserName({userName:'' , errorStyle:"1px solid red"}) ;  }
        if(emailId.userEmail ==='') {setEmailId({userEmail:'' , errorStyle:"1px solid red"}) ; } 
        password.userPassword ==='' ? setPassword({userPassword:'' , errorStyle:"1px solid red"}) : setPassword({userPassword:password.userPassword , errorStyle:""}) 
        confirmPassword.userConfirmPassword ==='' ? setConfirmPassword({userConfirmPassword:'' , errorStyle:"1px solid red"}) : setConfirmPassword({userConfirmPassword:confirmPassword.userConfirmPassword , errorStyle:""}) 
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
          <h2 class="form_title title">SIGN UP</h2>
          <input class="form__input" style={{border:userName["errorStyle"]}}  placeholder={userName.errorStyle==="" ? 'Enter User Name' : 'Please fill the details ⚠️'} onChange={(e)=>setUserName({userName:e.target.value,errorStyle:""})}/>
          <input class="form__input"  style={{border:emailId["errorStyle"]}}  placeholder={emailId.errorStyle==="" ? 'Enter Email ID' : 'Please fill the details ⚠️'} type="email" onChange={(e)=>setEmailId({userEmail:e.target.value,errorStyle:""})}/>
          <input class="form__input" style={{border:password["errorStyle"]}}  placeholder={password.errorStyle==="" ? 'Enter Password' : 'Please fill the details ⚠️'} type="password" onChange={(e)=>setPassword({userPassword:e.target.value,errorStyle:""})}/>
          <input class="form__input" style={{border:confirmPassword["errorStyle"]}}  placeholder={confirmPassword.errorStyle==="" ? 'Confirm Password' : 'Please fill the details ⚠️'} type="password" onChange={(e)=>setConfirmPassword({userConfirmPassword:e.target.value,errorStyle:""})}/>
          <button class="form__button button" type='submit' onClick={call}>SIGN UP</button>
        </div>  
      </div>
      <div class="container b-container" id="b-container">
        <div class="form" id="b-form" >
          <h2 class="form_title title">SIGN UP to Website</h2>

 
          <button class="form__button button submit">SIGN UP</button>
        </div>
      </div>
      <div class="switch" id="switch-cnt">
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div class="switch__container" id="switch-c1">
          <p class="switch__description description">Please provide the valid details in the form</p>
          <button class="switch__button button switch-btn" onClick={()=>navigate("/")}>GO TO Sign IN </button>
        </div>
      </div>
    </div>  
    </center>
    
  
  )
}

export default SignUP