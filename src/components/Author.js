import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";

import { query, collection, onSnapshot } from "firebase/firestore";
import "./table.css";


const Author = () => {
  const [disAuthor, setDisAuthor] = useState([]);

  
  //getting list
  useEffect(() => {
    const q = query(collection(db, "Book_details"));
    onSnapshot(q, (querySnapshot) => {
      setDisAuthor(
        querySnapshot.docs.map((doc) => ({
          data: doc.data().Author,
        }))
      );
    });
  }, []);
  //ends here

  
  const myArray = [];
  disAuthor.map((d) => myArray.push(d.data));
  console.log(myArray);

  const uniqueNames = [...new Set(myArray)];

 

  return (
    <div>
      <h1  class="text-muted">Available Author</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
		<li class="breadcrumb-item"><a href="Dashboard">Dashboard</a></li>
		<li class="breadcrumb-item active">Author Management</li>
	</ol>
      <table>
        <thead>
          <th>Authors</th>
        </thead>
        <tbody>
          {uniqueNames.map((auth) => (
            <tr>
              <td>{auth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Author;
