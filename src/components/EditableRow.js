import React from "react";
import { db } from "../utils/firebase";
import { doc,updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import "./table.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const EditableRow = (props) => {

      //updating a todo
      const handleUpdate = async (e) => {
        e.preventDefault()
        const taskDocRef = doc(db, 'Book_details', props.editBook)
        try{
          await updateDoc(taskDocRef, {
            Book_ID: props.Book_id,
            Book_name: props.Book_name,
            Author: props.Author,
            Category: props.category,
            Edition: props.edition,
            Location_rack: props.rack,
            ISBN: props.ISBN,
            No_of_copies: props.copies,
            Created: Timestamp.now()
          })

        } catch (err) {
          alert(err)
        }
        props.setEditbook("");    
      }
     
  //ends here



 
  return (
    <tr>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setBook_id(e.target.value)}
          value={props.Book_id}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setBook_name(e.target.value)}
          value={props.Book_name}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setAuthor(e.target.value)}
          value={props.Author}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setCategory(e.target.value)}
          value={props.category}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setEdition(e.target.value)}
          value={props.edition}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setRack(e.target.value)}
          value={props.rack}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setISBN(e.target.value)}
          value={props.ISBN}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setCopies(e.target.value)}
          value={props.copies}
        />
      </td>
      <td>
        <button onClick={(event)=> handleUpdate(event)} class="btn btn-secondary  btn-sm"  >save</button>
      </td>
      <td>
        <button onClick={()=> props.setEditbook("")}class="btn btn-secondary  btn-sm" >Calcel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
