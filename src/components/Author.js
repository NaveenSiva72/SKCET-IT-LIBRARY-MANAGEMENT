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
import {Helmet} from "react-helmet";

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

//Search Starts
const [searchField, setSearchField] = useState("");

let filteredBooks = [];
  const book_item1 =[];
  book_item.map((d)=> book_item1.push(d.data));
   filteredBooks = book_item1.filter(
    Sbook => {
      return (
        Sbook.Author.toLowerCase().includes(searchField.toLowerCase()) ||
        Sbook.Book_name.toLowerCase().includes(searchField.toLowerCase())

      );
    }
  );

const handleChange = e => {

  setSearchField(e.target.value);
  
};
//search ends

  return (
    <div>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <meta name="generator" content=""/>
        
        </Helmet>
      <h1 style={{color:"black"}}>Author </h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item">
          <a href="index.php">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Author  Management</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header">
          <div class="row">
            <div class="col col-md-6">Author </div>
          </div>
        </div>
        <div class="dataTable-search"><input onChange={handleChange} class="dataTable-input" placeholder="Search..." type="text"/></div>
      </div>
      {searchField  === "" ? (
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name </th>
          </tr>
        </thead>
        <tbody>
          {book_item.map((books) => (
            <tr>
              <td>{books.data.Book_name}</td>
              <td>{books.data.Author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
          </tr>
        </thead>
        <tbody>
        {filteredBooks.map((filtered)=>(
            <tr>
              <td>{filtered.Book_name}</td>
              <td>{filtered.Author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      )
      
      }
    </div>
  );
};

export default Rack;