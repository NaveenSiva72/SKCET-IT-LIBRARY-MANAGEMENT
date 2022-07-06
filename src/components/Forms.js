import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { db } from "../utils/firebase";

import {
  collection,
  query,
  addDoc,
  updateDoc,
  orderBy,
  doc,
  deleteDoc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

const Forms = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  /* using realtime Database 
  const handleOnChange = (e) =>{
    setTitle(e.target.value);
  }; */

  /*const createTodo = () =>{
     Using Realtime databaseconst todoRef = firebase.database.ref("Todo");
    const todo = {
        title,
        complete:false,
    };
    todoRef.push(todo);
  };*/

  //getting list
  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //ends here

  //addingn list to tyhe firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "tasks"), {
      title: title,
      completed: false,
      created: Timestamp.now(),
    });
  };
  //ends here

  //updating a todo
  

  //ends here

  //deleting a task
  /*const handleDelete = async () => {
    const taskDocRef = doc(db, 'tasks', tasks.id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }*/
  async function deleteDocument(id) {
    let request = await deleteDoc(doc(db, "tasks", id));
    console.log(request)
}
  //end user

  return (
    <div>
      <h1>oii</h1>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value.toUpperCase())}
        value={title}
      ></input>
      <button className="btn btn-primary" onClick={handleSubmit}>Add todo</button>
      <div>
        {tasks.map((task) => (
          <div>
            <center>
            <table>
              <tr>
              <td>
              {task.data.title}
              </td>
              <td>
              {task.data.completed}
              </td>
              <td>
              <button className='task__deleteButton' onClick={() => deleteDocument(task.id)}>Delete</button>
              
              </td>
              </tr>
            </table>
            </center>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Forms;
