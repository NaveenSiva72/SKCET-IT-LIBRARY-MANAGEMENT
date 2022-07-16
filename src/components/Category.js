import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";

import { query, collection, onSnapshot } from "firebase/firestore";
import "./table.css";
import Dashboard from "./Dashboard";


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
      <h1  class="text-muted">Available Category</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
		<li class="breadcrumb-item"><a href="Dashboard">Dashboard</a></li>
		<li class="breadcrumb-item active">Author Management</li>
	</ol>
      <table>
        <thead>
          <th>Category</th>
        </thead>
        <tbody>
          {uniqueNames.map((auth) => (
            <tr>
              <td >{auth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Author;
