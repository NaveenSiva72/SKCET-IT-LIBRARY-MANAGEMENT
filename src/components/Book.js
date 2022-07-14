import React, { useState, useEffect, Fragment } from "react";
import Addbook from "./Addbook";
import "./stylesmain.css";
import { db } from "../utils/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import "./table.css";
import ReadOnlyBook from "./ReadOnlyBook";
import EditableRow from "./EditableRow";

const Book = (props) => {
  const [book_item, setbook_item] = useState([]);

  const [searchValue,setsearchValue]=useState("");

  //no way da
  const [Author, setAuthor] = useState("");
  const [Book_id, setBook_id] = useState("");
  const [Book_name, setBook_name] = useState("");
  const [category, setCategory] = useState("");
  const [ISBN, setISBN] = useState("");
  const [rack, setRack] = useState("");
  const [copies, setCopies] = useState(0);
  const [edition, setEdition] = useState("");

  //no way ends here

  const [editBook, setEditbook] = useState(""); //used to diaplay either a read only r an editable row

  //function when an edit button clicks on it will execute;
  const handleEdit = (e, bID, banme, auth, cate, edi, loca, isbn, copi) => {
    setEditbook(e);
    setBook_id(bID);
    setBook_name(banme);
    setAuthor(auth);
    setCategory(cate);
    setEdition(edi);
    setRack(loca);
    setISBN(isbn);
    setCopies(copi);
  };

  //ends here

  //getting list
  useEffect(() => {
    const q = query(collection(db, "Book_details"), orderBy("Created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setbook_item(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //ends here


  const searchBook=(e)=>{
    
    /*const collectionref=collection(db , "Book_details");
    const q = query(collectionref , orderBy("Created","desc"));      //
    onSnapshot(q,(snapshot)=>
    setbook_item(snapshot.docs.map(doc=>({...doc.data(),id:doc.id,key:doc.id})))
    );*/
    //if(e == book_item.map((d) => {d.data.Book_name} ))
    //{
      //console.log(e);
    //}



      
     

  }

  const search = [];
  book_item.map((d) => search.push(d.data.Book_name));
  console.log(search)


  
  for(let i=0;i<search.length;i++)
  {
    if(search[i].slice(0,searchValue.length) ==searchValue)
    {
     console.log(search[i] + " suxxess");
     
    }
  }


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
            <div class="col col-md-6">Book Management</div>
          </div>
        </div>
        <div class="dataTable-search"><input onChange={(e)=>setsearchValue(e.target.value)} class="dataTable-input" placeholder="Search..." type="text"/></div>
      </div>
      
       <div>
          <table>
            <thead>
              <tr>
                <th>Book_ID</th>
                <th>Book_Name</th>
                <th>Author</th>
                <th>Category</th>
                <th>Edition</th>
                <th>Location rack</th>
                <th>ISBN</th>
                <th>no_of_copies</th>
                <th>Actions</th>
                <th>dele</th>
              </tr>
            </thead>
            <tbody>
              {book_item.map((book) => (
                <Fragment>
                  {editBook === book.id ? (
                    <EditableRow key={book}
                      setBook_id={setBook_id}
                      setBook_name={setBook_name}
                      setAuthor={setAuthor}
                      setCategory={setCategory}
                      setEdition={setEdition}
                      setRack={setRack}
                      setISBN={setISBN}
                      setCopies={setCopies}
                      Book_id={Book_id}
                      Book_name={Book_name}
                      Author={Author}
                      category={category}
                      edition={edition}
                      rack={rack}
                      ISBN={ISBN}
                      copies={copies}
                      editBook={editBook}
                      setEditbook={setEditbook}
                    />
                  ) : (
                    <ReadOnlyBook key={book}
                      book={book}
                      handleEdit={handleEdit}
                      
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
       
      </div>
    </div>
  );
};

export default Book;