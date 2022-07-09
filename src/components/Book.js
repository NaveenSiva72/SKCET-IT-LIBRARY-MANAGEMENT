import React, { useState ,useEffect} from "react";
import Addbook from "./Addbook";
import './stylesmain.css' ;
import {db} from '../utils/firebase';
import { query,collection,orderBy,onSnapshot } from "firebase/firestore";
import './table.css'

const Book = () => {
  const [book_item, setbook_item] = useState([]);

  //getting list
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
  //ends here
  return (
    <div>
        <h1>Book Management</h1>
        <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
          <li class="breadcrumb-item">
            <a href="index.php">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Book Management</li>
        </ol>
        <div class="card mb-4">
          <div class="card-header">
            <div class="row">
              <div class="col col-md-6">
                
                Book Management
              </div>
             
            </div>
          </div>
        </div>
        <div>
          <table>
          <thead>
            <tr>
              <th>Book_ID</th>
              <th>Book_Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Edition</th>
              <th>Location rack</th>
              <th>ISBN</th>
              <th>no_of_copies</th>

              
            </tr>
          </thead>
            <tbody>
              {book_item.map((book) =>(
                
                  <tr>
                    <td>{book.data.Book_ID}</td>
                    <td>{book.data.Book_name}</td>
                    <td>{book.data.Author}</td>
                    <td>{book.data.Category}</td>
                    <td>{book.data.Edition}</td>
                    <td>{book.data.Location_rack}</td>
                    <td>{book.data.ISBN}</td>
                    <td>{book.data.No_of_copies}</td>
                    
                    
                  </tr>
              ))}
            </tbody>
          
          </table>
        </div>
      
    </div>
  );
};

export default Book;
