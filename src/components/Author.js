import React,{useEffect, useState} from 'react';
import { db } from "../utils/firebase";

import { query, collection, onSnapshot } from "firebase/firestore";
import "./table.css";


const Author = () => {

  const[disAuthor,setDisAuthor]=useState([]);

  //const authorList=[...authorList , {disAuthor}];

  


  //getting list
 // console.log(disAuthor);
  useEffect(() => {
    const q = query(collection(db, "Book_details"));
    onSnapshot(q, (querySnapshot) => {
      setDisAuthor(
        querySnapshot.docs.map((doc) => ({
          
          data: doc.data().Author,
        }))
      );
    });
  }, []);
  //ends here

  const uniqueNames=[];

  
  

    for(let i=1;i<disAuthor.length;i++)
    {
      let result=true;
      for(let j=0;j<uniqueNames.length;j++)
      {
          if(disAuthor[i] == uniqueNames[j])
          {
        //console.log(uniqueNames[i]);

            result=false;
            break;
          }
      }
      console.log(result);
      if(result)
      {
        uniqueNames.push(disAuthor[i]);
        console.log(uniqueNames[i]);
      }
    }
  

  

 /* const uniqueNames = disAuthor.filter((val, id, array) => {
    console.log(id);
    console.log(val);
    return array.indexOf(val) != disAuthor.data;  
 });*/
  //console.log(uniqueNames);

  return (
    <div>
      <table>
      <thead>
        <th>Authors</th>
        <th>id</th>
      </thead>
      <tbody>
        {disAuthor.map((auth)=>(
        <tr>
          <td >{auth.data}</td>
          
        </tr>
          
        
        ))}
      </tbody>
    </table>

    

   
    </div>
    
  )
}

export default Author