import firebase from 'firebase/compat/app'; 
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
     };
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

const db = getFirestore(app)
export {auth,db} ;
 