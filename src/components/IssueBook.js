import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import IssueBook_details from './IssueBook_details';


const IssueBook = (props) => {
  const handleAdd=()=>{
    props.setPage(<IssueBook_details setPage={props.setPage}/>);
  }
  return (
    <div>
    <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
		<li class="breadcrumb-item"><a href='dashboard' onClick={<Dashboard />}>Dashboard</a></li>
        <li class="breadcrumb-item active">Issue Book Management</li>
    </ol>
    <div class="card-header">
    		<div class="row">
    			<div class="col col-md-6">
    				Issue Book Management
                </div>
                <div class="col col-md-6" align="right">
                    <a href="#" class="btn btn-success btn-sm" onClick={handleAdd}>Add</a>
                </div>
            </div>
        </div>
        </div>
  )
}

export default IssueBook