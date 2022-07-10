import React from 'react';
import './table.css'

const EditableRow = (props) => {
    const handleOnchange =(e)=>{
        console.log(e)
    };
  return (
    <tr>
    <td><input type="text" onChange={(e)=>handleOnchange(e.target.value)} value={props.book.data.Book_ID}  name /></td>
    <td><input type="text" value={props.book.data.Book_name} placeholder="Enter an Book Name..." name /></td>
    <td><input type="text" value={props.book.data.Author} placeholder="Enter an Author..." name /></td>
    <td><input type="text" value={props.book.data.Category} placeholder="Enter an Category..." name /></td>
    <td><input type="text" value={props.book.data.Edition} placeholder="Enter an Edition..." name /></td>
    <td><input type="text" value={props.book.data.Location_rack} placeholder="Enter an location Rack..." name /></td>
    <td><input type="text" value={props.book.data.ISBN} placeholder="Enter an ISBN..." name /></td>
    <td><input type="text" value={props.book.data.No_of_copies} placeholder="Enter an No of copies..." name /></td>
    <td><button >save</button></td>
  </tr>
  )
}

export default EditableRow