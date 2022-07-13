import React,{useEffect, useState} from 'react';
import { db } from "../utils/firebase";

import { query, collection, onSnapshot } from "firebase/firestore";
import "./table.css";
import { calculateNewValue } from '@testing-library/user-event/dist/utils';


const Author = () => {

  const[disAuthor,setDisAuthor]=useState([]);

  //const authorList=[...authorList , {disAuthor}];

  /*if(Object.values(answer).includes("c")){
 console.log("true");
}*/


  //getting list
 //console.log(disAuthor);
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


   /* for(let i=0;i<disAuthor.length;i++)
    {
      //let result=true;
      /*for(let j=0;j<uniqueNames.length;j++)
      {
          if(disAuthor[i] == uniqueNames[j])
          {
          //console.log(uniqueNames.length);

            result=false;
            break;
          }
      }
      //console.log(result);
      if(result)
      {
        uniqueNames.push(disAuthor[i]);
       // console.log(uniqueNames[i]);
      }*/
      /*if((uniqueNames).includes(Object.values(disAuthor[i])) == false){
        uniqueNames.push(Object.values(disAuthor[i]));
        console.log("true");
       }
       console.log(Object.values(disAuthor[i])); 
       console.log(uniqueNames);

    }
  

  

 /* const uniqueNames = disAuthor.filter((val, id, array) => {
    console.log(id);
    console.log(val);
    return array.indexOf(val) != disAuthor.data;  
 });*/
  //console.log(uniqueNames);
  const myArray = [];
  disAuthor.map((d)=>(
    myArray.push(d.data)
  ));
    console.log(myArray);
    
  
    const uniqueNames=[...new Set(myArray)];
   


 // console.log(disAuthor);

  return (
    <div>
      <table>
      <thead>
        <th>Authors</th>
       
      </thead>
      <tbody>
        {uniqueNames.map((auth)=>(
        <tr>
          <td >{auth}</td> 
        

        </tr>
        ))}
      </tbody>
    </table>

    

   
    </div>
    
  )
}

export default Author