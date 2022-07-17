import firebase from 'firebase/compat/app'; 
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBpwry05BEK2T5e_WhSePil2QJght1kh_w",
  authDomain: "skcet-it-library-managem-3df37.firebaseapp.com",
  databaseURL: "https://skcet-it-library-managem-3df37-default-rtdb.firebaseio.com",
  projectId: "skcet-it-library-managem-3df37",
  storageBucket: "skcet-it-library-managem-3df37.appspot.com",
  messagingSenderId: "945967509495",
  appId: "1:945967509495:web:7fcfe922600a9497be08f2",
  measurementId: "G-RDS8N1LMSD"
     };
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

const db = getFirestore(app)
export {auth,db} ;
 