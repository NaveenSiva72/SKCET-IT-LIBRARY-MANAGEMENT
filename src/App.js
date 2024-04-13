import './App.css';
import React , {useState,useEffect} from 'react';
import Mainpage from './components/Mainpage';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUP from './components/SignUP';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Mainpage />}  />
          <Route path="/" element={<Login />} /> 
          <Route path="/SignUp" element={<SignUP />} /> 
        </Routes> 
    </BrowserRouter>
    
  );
}

export default App;