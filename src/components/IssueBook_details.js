import React, { useState } from "react";
import IssueBook from "./IssueBook";
import { db } from "../utils/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const IssueBook_details = (props) => {
  const [Book_name, setBook_name] = useState("");
  const [Book_id, setBook_id] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [stuname, setStuname] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("not returned");


  //addingn list to the firebase
  const handleIssue = async () => {

    if(Book_name === "")
    {
      alert("**Book name can't be empty**");
      return false;
    }
    else if(Book_id === "")
    {
      alert("**Book id  can't be empty**");
      return false;
    }
    else if(roll_no === "")
    {
      alert("**Roll No can't be empty**");
      return false;
    }
    else if(stuname === "")
    {
      alert("**Student name can't be empty**");
      return false;
    }
    else if(department === 0)
    {
      alert("**Department can't be empty**");
      return false;
    }
    
   
    await addDoc(collection(db, "Issued_Books"), {
      Book_name: Book_name,
      Book_ID: Book_id,
      roll_no: roll_no,
      stuname: stuname,
      department: department,
      status: status,
      Issue_date: Timestamp.now().toDate().toDateString(),
      Return_date:"",
      fineAmount:0,
      BtColor : "btn btn-warning",
      OrderedBYdate:Timestamp.now(),
    });
    props.setPage(
      <IssueBook


      />
    );
  };
  //ends here
  return (
    <div>
      <h1 style={{color:"black"}}>Book Details and Student Details</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item">
          <a href="index">Dashboard</a>
        </li>
        <li class="breadcrumb-item">
          <a href="issue_book">Issue Book Management</a>
        </li>
        <li class="breadcrumb-item active">Issue New Book</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header"></div>
        <div class="card-body">
          <div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Book Name</label>
                  <input
                    type="text"
                    onChange={(e) => setBook_name(e.target.value)}
                    //value={Book_name}
                    name="book_name"
                    id="book_name"
                    class="form-control"
                  ></input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"> Book ID</label>
                  <input
                    type="text"
                    onChange={(e) => setBook_id(e.target.value)}
                    //value={Author}
                    class="form-control"
                  ></input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"> Roll.No:</label>
                  <input
                    type="text"
                    onChange={(e) => setRoll_no(e.target.value)}
                    //value={category}
                    class="form-control"
                  ></input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Student Name</label>
                  <input
                    type="text"
                    onChange={(e) => setStuname(e.target.value)}
                    //value={rack}
                    class="form-control"
                  ></input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Department</label>
                  <input
                    type="text"
                    onChange={(e) => setDepartment(e.target.value)}
                    //value={ISBN}
                    class="form-control"
                  ></input>
                </div>
              </div>
            </div>

            <div class="mt-4 mb-3 text-center">
              <button
                name="add_book"
                class="btn btn-warning"
               
                onClick={()=>handleIssue()}
              >
                Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBook_details;