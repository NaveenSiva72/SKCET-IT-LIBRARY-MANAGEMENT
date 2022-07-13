import React from "react";


import { db } from "../utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Book from "./Book";
const ReadOnlyBook = (props) => {
 
  //delete
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'Book_details', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
    renderBook();
  };
  const renderBook=()=>
  {
  };
  
    
  
  //()=> props.setEditbook(props.book.id)

  return (
    <tr>
      <td>{props.book.data.Book_ID}</td>
      <td>{props.book.data.Book_name}</td>
      <td>{props.book.data.Author}</td>
      <td>{props.book.data.Category}</td>
      <td>{props.book.data.Edition}</td>
      <td>{props.book.data.Location_rack}</td>
      <td>{props.book.data.ISBN}</td>
      <td>{props.book.data.No_of_copies}</td>
      <td>
        <button
          onClick={() =>
            props.handleEdit(
              props.book.id,
              props.book.data.Book_ID,
              props.book.data.Book_name,
              props.book.data.Author,
              props.book.data.Category,
              props.book.data.Edition,
              props.book.data.Location_rack,
              props.book.data.ISBN,
              props.book.data.No_of_copies
            )
          }
        >
          Edit
        </button>
       
      </td>
      <td>  
      <button onClick={()=>handleDelete(props.book.id)}>delete</button>      </td>
    </tr>
  );
};

export default ReadOnlyBook;
