import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import "./table.css";

const Rack = () => {
  const [book_item, setbook_item] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Book_details"), orderBy("Created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setbook_item(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      <h1>Location Rack</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item">
          <a href="index.php">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Location Rack Management</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header">
          <div class="row">
            <div class="col col-md-6">Location Rack</div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Location rack</th>
          </tr>
        </thead>
        <tbody>
          {book_item.map((books) => (
            <tr>
              <td>{books.data.Book_name}</td>
              <td>{books.data.Location_rack}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rack;
