import React from 'react'
import Book from './Book'
const Addbook = (props) => {

	
  return (
    <div>
      <h1>Book Management</h1>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
		<li class="breadcrumb-item"><a >Dashboard</a></li>
        <li class="breadcrumb-item"><a >Book Management</a></li>
        <li class="breadcrumb-item active">Add Book</li>
    </ol>
      <div class="card mb-4">
    	<div class="card-header">
        </div>
        <div class="card-body">
        	<div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
						<label class="form-label">Book Name</label>
        					<input type="text" name="book_name" id="book_name" class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label"> Author Name</label>
							<input type="text"  class="form-control"></input>
        				</div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Category</label>
        					<input type="text"  class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Location Rack</label>
							<input type="text"  class="form-control"></input>

        				</div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Book ISBN Number</label>
        					<input type="text"  class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">No. of Copy</label>
        					<input type="number" step="1" class="form-control"></input>
        				</div>
        			</div>
        		</div>
        		<div class="mt-4 mb-3 text-center">
        			<button  name="add_book" class="btn btn-success" value="Add" onClick={()=>props.setPage(<Book />)}>Add</button>
        		</div>
        	</div>
        </div>
    </div>
    </div>
  )
}

export default Addbook;