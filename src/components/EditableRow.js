import React from "react";

import "./table.css";

const EditableRow = (props) => {
  //function when an save button clicks it will execute

  //ends here

  /*<tr>
    <td><input type="text" onChange={(e)=>handleOnchange(e.target.value)} value={props.book.data.Book_ID}  name /></td>
    <td><input type="text" value={props.book.data.Book_name} placeholder="Enter an Book Name..." name /></td>
    <td><input type="text" value={props.book.data.Author} placeholder="Enter an Author..." name /></td>
    <td><input type="text" value={props.book.data.Category} placeholder="Enter an Category..." name /></td>
    <td><input type="text" value={props.book.data.Edition} placeholder="Enter an Edition..." name /></td>
    <td><input type="text" value={props.book.data.Location_rack} placeholder="Enter an location Rack..." name /></td>
    <td><input type="text" value={props.book.data.ISBN} placeholder="Enter an ISBN..." name /></td>
    <td><input type="text" value={props.book.data.No_of_copies} placeholder="Enter an No of copies..." name /></td>
    <td><button >save</button></td>
  </tr>*/
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={(e) => props.setBook_id(e.target.value)}
          value={props.Book_id}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setBook_name(e.target.value)}
          value={props.Book_name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setAuthor(e.target.value)}
          value={props.Author}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setCategory(e.target.value)}
          value={props.category}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setEdition(e.target.value)}
          value={props.edition}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setRack(e.target.value)}
          value={props.rack}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setISBN(e.target.value)}
          value={props.ISBN}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={(e) => props.setCopies(e.target.value)}
          value={props.copies}
        />
      </td>
      <td>
        <button>save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
