import React, { useState, useEffect, Fragment } from "react";
import Addbook from "./Addbook";
import "./stylesmain.css";
import { db } from "../utils/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import "./table.css";
import ReadOnlyBook from "./ReadOnlyBook";
import EditableRow from "./EditableRow";


const Book = (props) => {
  const [book_item, setbook_item] = useState([]);
 

  const [editBook, setEditbook] = useState(null);//used to diaplay either a read only r an editable row
  const [formdata,setFormdata]=useState({
   

  });

  //function when an edit button clicks on it will execute;
  const handleEdit=(e)=>{
    setEditbook(e);

    

   

  }



  //ends here

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
            <div class="col col-md-6">Book Management</div>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {book_item.map((book) => (
              <Fragment>
                {editBook === book.id ? (
                  <EditableRow book={book} />
                ) : (
                  <ReadOnlyBook
                    book={book}
                    handleEdit={handleEdit}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Book;
