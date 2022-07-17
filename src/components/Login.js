import React ,{useState} from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
const Login = () => {

    const navigate =useNavigate();

        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");

        const signIn =()=>{
            console.log("owuesgheoiuawgebholgawsjnpbh;kj");
            signInWithEmailAndPassword(auth , email , password)
            .then(auth => navigate("/Dashboard"))
            .catch(error=>console.error(error))
        }

  return (
   
    <div>
        <label>User name</label>
        <input type="text" onChange={(e) =>setEmail(e.target.value) }/>
        <label>Password</label><br/>
        <input type="password" onChange={(e) =>setPassword(e.target.value) }/><br/>
        <button onClick={()=>signIn()} >Sign in</button>
    </div>
  
  )
}

export default Login