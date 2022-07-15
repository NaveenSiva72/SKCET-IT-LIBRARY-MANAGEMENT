import React, { useState } from "react";
import IssueBook from "./IssueBook";
import { db } from "../utils/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const IssueBook_details = (props) => {
  const [Book_name, setBook_name] = useState("");
  const [Book_id, setBook_id] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [stuname, setStuname] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("not returned");

  //addingn list to tyhe firebase
  const handleIssue = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Book"), {
      Book_name: Book_name,
      Book_ID: Book_id,
      roll_no: roll_no,
      stuname: stuname,
      department: department,
      status: status,
      Issue_date: Timestamp.now(),
    });
    props.setPage(
      <IssueBook
        Book_name={Book_name}
        Book_id={Book_id}
        roll_no={roll_no}
        stuname={stuname}
        department={department}
        status={status}
        

      />
    );
  };
  //ends here
  return (
    <div>
      <h1>Book Details and Student Details</h1>
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
                    placeholder="Enter book name..."
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
                    placeholder="Enter book ID..."
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
                    placeholder="Enter Studenty ROll.NO..."
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
                    placeholder="Enter Student name..."
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
                class="btn btn-success"
                value="Add"
                onClick={handleIssue}
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