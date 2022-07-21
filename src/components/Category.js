import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";

import { query, collection, onSnapshot } from "firebase/firestore";
import "./table.css";
import Dashboard from "./Dashboard";
import {Helmet} from "react-helmet";


const Author = () => {
  const [disCategory, setdisCategory] = useState([]);

  
  //getting list
  useEffect(() => {
    const q = query(collection(db, "Book_details"));
    onSnapshot(q, (querySnapshot) => {
      setdisCategory(
        querySnapshot.docs.map((doc) => ({
          data: doc.data().Category,
        }))
      );
    });
  }, []);
  //ends here

  
  const myArray = [];
  disCategory.map((d) => myArray.push(d.data));
  console.log(myArray);

  const uniqueNames = [...new Set(myArray)];
  let categoryLength=uniqueNames.length;

  const[catlength,setcatlength]=useState(categoryLength);
  <Dashboard catlength={catlength}/>
  console.log(catlength);

 

  return (
    <div>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <meta name="generator" content=""/>
        </Helmet>
      <h1>CATEGORY</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item">
          <a href="index.php">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">CATEGORY</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header">
          <div class="row">
            <div class="col col-md-6">AVAILABLE CATEGORIES</div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <th></th>
          <th><center>CATEGORY</center></th>
          <th></th>
        </thead>
        <tbody>
          
          {uniqueNames.map((auth) => (
            <tr>
              <td></td>
              <td ><center>{auth}</center></td>
              <td>     </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Author;