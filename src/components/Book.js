import React, { useState, useEffect, Fragment } from "react";
import Addbook from "./Addbook";
import "./stylesmain.css";
import { db } from "../utils/firebase";
import { query, collection, orderBy, onSnapshot ,deleteDoc , doc} from "firebase/firestore";
import "./table.css";
import ReadOnlyBook from "./ReadOnlyBook";
import EditableRow from "./EditableRow";
import SReadOnlyBook from "./SReadOnlyBook";
import SEditableRow from "./SEditableRow";
import {Helmet} from "react-helmet";


const Book = (props) => {
  const [book_item, setbook_item] = useState([]);

  const [searchValue, setsearchValue] = useState("");

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

  //used for search
  const [currentid, setcurrentid] = useState("");
  const [fidbid, setfidbid] = useState([]);

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

      setfidbid(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data().Book_ID,
        }))
      );
    });
  }, []);
  //ends here

  //console.log(fidbid);

  //Searching stars...
  const [searchField, setSearchField] = useState("");

  let filteredBooks = [];
  const book_item1 = [];
  book_item.map((d) => book_item1.push(d.data));
  filteredBooks = book_item1.filter((Sbook) => {
    return Sbook.Book_name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  //function used to find the id
  const help = (bid, bname, auth, cate, edi, rack, isbn, copy) => {
    for (let i = 0; i < fidbid.length; i++) {
      //console.log(fidbid[i].data)
      if (fidbid[i].data === bid) {
         setcurrentid(fidbid[i].id);
      }
    }
    console.log(bid);
    setBook_id(bid);
    setBook_name(bname);
    setAuthor(auth);
    setCategory(cate);
    setEdition(edi);
    setRack(rack);
    setISBN(isbn);
    setCopies(copy);
  };
  console.log(currentid);
  //function used to find the id ends here


  //deleting in search...
  const help1=(bid)=>{
    for (let i = 0; i < fidbid.length; i++) {
      if (fidbid[i].data === bid) {
        
         setcurrentid(fidbid[i].id);
         searchDelete(currentid);
      }
    }

  }

  //delete
  const searchDelete = async (id) => {
    const taskDocRef = doc(db, 'Book_details', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  };
 



  //deleting in search...ends here

  return (
    <div>

<Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <meta name="generator" content=""/>
        
        </Helmet>
      <h1 style={{color:"black" }} >Book Management</h1>

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
        <div class="dataTable-search">
          <input
            onChange={handleChange}
            class="dataTable-input"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>

      <div>
        {searchField === "" ? (
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
                    <EditableRow
                      key={book}
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
                    <ReadOnlyBook
                      key={book}
                      book={book}
                      handleEdit={handleEdit}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        ) : (
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
              {filteredBooks.map((filtered) => (
                <Fragment>
                  {Book_id === filtered.Book_ID ? (
                    <SEditableRow 
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
                    currentid={currentid}
                    setcurrentid={setcurrentid} />
                  ) : (
                    <SReadOnlyBook filtered={filtered} help={help} help1={help1}/>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Book;
