import React from "react";
import Addbook from "./Addbook";
import './stylesmain.css' ;

const Book = () => {
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
      
    </div>
  );
};

export default Book;
