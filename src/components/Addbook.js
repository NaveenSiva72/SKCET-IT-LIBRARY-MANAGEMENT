import React,{useState} from 'react';
import Book from './Book';
import {db} from '../utils/firebase';
import { addDoc,collection, Timestamp} from 'firebase/firestore';
const Addbook = (props) => {
	const [Author, setAuthor] = useState("");
	const [Book_id, setBook_id] = useState("");
	const [Book_name, setBook_name] = useState("");
	const [category, setCategory] = useState("");
	const [ISBN, setISBN] = useState("");
	const [rack,setRack] = useState("");
	const [copies,setCopies] = useState(0);
	const [edition,setEdition] = useState("");
	//onClick={()=>props.setPage(<Book />)}>

	  //addingn list to tyhe firebase
	  const handleSumit = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, "Book_details"), {
			Book_ID:Book_id,
			Book_name:Book_name,
			Author:Author,
			Category:category,
			Edition:edition,
			Location_rack:rack,
			ISBN:ISBN,
			No_of_copies:copies,
			Created:Timestamp.now(),
			
		});
		props.setPage(<Book />)
	  };
	  //ends here
	
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
        					<input type="text" onChange={(e) => setBook_name(e.target.value)} value={Book_name} name="book_name" id="book_name" class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label"> Author Name</label>
							<input type="text" onChange={(e) => setAuthor(e.target.value)} value={Author} class="form-control"></input>
        				</div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Category</label>
        					<input type="text" onChange={(e) => setCategory(e.target.value)} value={category} class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Select Location Rack</label>
							<input type="text" onChange={(e) => setRack(e.target.value)} value={rack} class="form-control"></input>

        				</div>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Book ISBN Number</label>
        					<input type="text" onChange={(e) => setISBN(e.target.value)} value={ISBN} class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">No. of Copy</label>
        					<input type="number" onChange={(e) => setCopies(e.target.value)} value={copies} step="1" class="form-control"></input>
        				</div>
        			</div>
        		</div>
				<div class="row">
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Book ID</label>
        					<input type="text" onChange={(e) => setBook_id(e.target.value)} value={Book_id} class="form-control"></input>
        				</div>
        			</div>
        			<div class="col-md-6">
        				<div class="mb-3">
        					<label class="form-label">Book Edition</label>
							<input type="text" onChange={(e) => setEdition(e.target.value)}  class="form-control"></input>

        				</div>
        			</div>
        		</div>
					
        		<div class="mt-4 mb-3 text-center">
        			<button  name="add_book" class="btn btn-success" value="Add" onClick={handleSumit}>Add</button>
        		</div>
        	</div>
        </div>
    </div>
    </div>
  )
}

export default Addbook;