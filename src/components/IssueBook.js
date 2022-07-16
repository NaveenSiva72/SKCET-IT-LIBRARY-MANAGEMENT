import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import IssueBook_details from "./IssueBook_details";
import { db } from "../utils/firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const IssueBook = (props) => {
  const [issue_details, setissue_details] = useState([]);

  //state for to set color for a book
  const [color, setColor] = useState("btn btn-warning");

  //getting list
  useEffect(() => {
    const q = query(
      collection(db, "Issued_Books"),
      orderBy("Issue_date", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      setissue_details(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //ends here

  //updating a list
  async function updatestatus(
    id,
    bid,
    bname,
    issdate,
    redate,
    srollno,
    sname,
    dept
  ) {
    //fine calculcation
    let fineupdate = Math.abs(issdate - redate) / (1000 * 60 * 60 * 24);
    let fine = 0;

    if (fineupdate <= 10) {
      fine = 0;
      console.log(30);
    } else if (fineupdate > 10 && fineupdate <= 20) {
      fine = 30;
      console.log(30);
    } else {
      fine = prompt("Enter fine amout:");
    }
    //fine calculcation

    const itemRef = doc(db, "Issued_Books", id);
    setColor("btn btn-success");
    setDoc(itemRef, {
      Book_ID: bid,
      Book_name: bname,
      Issue_date: issdate,
      Return_date: redate,
      roll_no: srollno,
      stuname: sname,
      department: dept,
      status: "returned",
      fineAmount: fine,
      status: "returned",
      BtColor : "btn btn-success",
    });
  }
  //ends here

  //console.log(issue_details);
  return (
    <div>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item">
          <a
            href="dashboard"
            onClick={() => {
              <Dashboard />;
            }}
          >
            Dashboard
          </a>
        </li>
        <li class="breadcrumb-item active">Issue Book Management</li>
      </ol>
      <div class="card-header">
        <div class="row">
          <div class="col col-md-6">Issue Book Management</div>
          <div class="col col-md-6" align="right"></div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>BOOK NAME</th>
              <th>ISSUE DATE</th>
              <th>RETURN DATE</th>
              <th>Fine amount</th>
              <th>STUDENT ID</th>
              <th>STUDENT NAME</th>
              <th>DEPARTMENT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {issue_details.map((issues) => (
              <tr>
                <td>{issues.data.Book_ID}</td>
                <td>{issues.data.Book_name}</td>
                <td>{issues.data.Issue_date}</td>
                <td>{issues.data.Return_date}</td>
                <td>{issues.data.fineAmount}</td>
                <td>{issues.data.roll_no}</td>
                <td>{issues.data.stuname}</td>
                <td>{issues.data.department}</td>
                <td>
                  <button
                    class={issues.data.BtColor}
                    onClick={() =>
                      updatestatus(
                        issues.id,
                        issues.data.Book_ID,
                        issues.data.Book_name,
                        issues.data.Issue_date,
                        Timestamp.now().toDate().toDateString(),
                        issues.data.roll_no,
                        issues.data.stuname,
                        issues.data.department
                      )
                    }
                  >
                    {issues.data.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueBook;
