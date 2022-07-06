import firebase from 'firebase/compat/app'; 
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from '@firebase/firestore';



const firebaseConfig = {
  apiKey: "fb.env.REACT_APP_apikey",
  authDomain: "fb.env.REACT_APP_authDomain",
  databaseURL: "fb.env.REACT_APP_databaseURL",
  projectId: "fb.env.REACT_APP_projectId",
  storageBucket: "fb.env.REACT_APP_storageBucket",
  messagingSenderId: "fb.env.REACT_APP_measurementId",
  appId: "fb.env.REACT_APP_appId",
  measurementId: "fb.env.REACT_APP_measurementId"
     };

     const app = initializeApp(firebaseConfig);

     export  const db = getFirestore(app);