import React from "react";

const SReadOnlyBook = (props) => {
  return (
    <tr>
      <td>{props.filtered.Book_ID}</td>
      <td>{props.filtered.Book_name}</td>
      <td>{props.filtered.Author}</td>
      <td>{props.filtered.Category}</td>
      <td>{props.filtered.Edition}</td>
      <td>{props.filtered.Location_rack}</td>
      <td>{props.filtered.ISBN}</td>
      <td>{props.filtered.No_of_copies}</td>
      <td>
        <button class="btn btn-secondary  btn-sm"
          onClick={() =>
            props.help(
              props.filtered.Book_ID,
              props.filtered.Book_name,
              props.filtered.Author,
              props.filtered.Category,
              props.filtered.Edition,
              props.filtered.Location_rack,
              props.filtered.ISBN,
              props.filtered.No_of_copies
            )
          }
        >
          Edit
        </button>
      </td>
      <td>
        <button onClick={()=>props.help1(props.filtered.Book_ID)} class="btn btn-secondary  btn-sm" >delete</button>
      </td>
    </tr>
  );
};

export default SReadOnlyBook;
