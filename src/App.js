import './App.css';
import React , {useState,useEffect} from 'react';
import Mainpage from './components/Mainpage';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Mainpage />}  />
          <Route path="/" element={<Login />} /> 
        </Routes> 
    </BrowserRouter>
  );
}

export default App;