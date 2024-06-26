import React,{useState,useEffect} from "react";
import { db } from "../utils/firebase";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { QuerySnapshot ,query,onSnapshot,collection} from "@firebase/firestore";
import firebase from "firebase/compat/app";
import { set } from "firebase/database";
import {Helmet} from "react-helmet";

const Dashboard = (props) => {

  const [TotalBook, setTotalBook] = useState(0);
  const [TotalIssuebook, setTotalIssuebook] = useState(0);

  const [Authorlist,setAuthorlist]=useState([]);
  const [locationlist,setlocationlist]=useState([]);
  const [returnedbooklist,setreturnedbooklist]=useState([]);
  const [totalfine,settotalfine] = useState(0);
  const [totalCategory,settotalCategory] = useState([]);
  const [totalFineAmountCalaulated , setTotalFineAmountCalaulated] = useState(0);



//getting list from book_details collection
  useEffect(() => {
    const q = query(collection(db, "Book_details"));
    onSnapshot(q, (querySnapshot) => {
      const TotalBook = querySnapshot.size
      setTotalBook(TotalBook)

	  //Author list
	  setAuthorlist(querySnapshot.docs.map((doc)=>({
		Adata: doc.data().Author,
	  }))
	  );

	  //location rack
	  setlocationlist(querySnapshot.docs.map((doc)=>({
		ldata: doc.data().Location_rack,
	  }))
	  );

	  //Category list
	  settotalCategory(querySnapshot.docs.map((doc)=>({
		ldata: doc.data().Category,
	  }))
	  );




    });
  }, []);
//getting list from book_details collection edns here



//getting list from Issue booik  collection
useEffect(() => {
    const q = query(collection(db, "Issued_Books"));
    onSnapshot(q, (querySnapshot) => {

		//getting size of 
		const  TotalIssuebook= querySnapshot.size
		setTotalIssuebook(TotalIssuebook)

		//getting data as return and notreturn 
      setreturnedbooklist(
        querySnapshot.docs.map((doc) => ({
          rdata: doc.data().status,
        }))
      );

	  //getting fine amount from the firebase
	  settotalfine(
		querySnapshot.docs.map((doc) => ({
			fdata : doc.data().fineAmount,
		}))
	  )
    });
  }, []);

  useEffect(() =>{

	let currentTotal=0;
	  for(let i=0;i<totalfine.length;i++)
	  {
		currentTotal=currentTotal + parseInt(totalfine[i]?.fdata);
	  }
	  setTotalFineAmountCalaulated(currentTotal)
  },[totalfine])
//getting list from Issue booik  collection ends here




 
  //for author count
  const Authorlist2 = [];
  Authorlist.map((d) => Authorlist2.push(d.Adata));
  const uniqueAuthor=[...new Set(Authorlist2)];
  //author count ends here
 
   //for Location count
   const locationlist2 = [];
   locationlist.map((d) => locationlist2.push(d.ldata));
   const uniquerack=[...new Set(locationlist2)];
   //author count ends here

   //for category
   const totalCategory2 = [];
   totalCategory.map((d) => totalCategory2.push(d.ldata));
   const uniqueCategory=[...new Set(totalCategory2)];



   //for category ends here


  //count for returned book and not returned book list
   let returned=0;
   let notreturned=0;
   const returnedbooklist2=[];
   returnedbooklist.map((d)=> returnedbooklist2.push(d.rdata));
   for(let i=0;i<returnedbooklist.length;i++)
   {
		if(returnedbooklist2[i] === "returned")
		{
			returned++;
		}
		else{
			notreturned++;
		}
   }
  //count for returned book and not returned book list


  //finding total fine details

 
  //finding total fine details ends here








  return (<div>
	<Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <meta name="generator" content=""/>
        
        </Helmet>
    <div class="container-fluid py-4">
	<h1 class="mb-5" style={{color:"black"}}>Dashboard</h1>
	<div class="row">
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card text-white mb-4">
				<div  class="card-body">
					<h1 class="text-center">{TotalIssuebook}</h1>
					<h5 class="text-center">Total Book Issue</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{returned}</h1>
					<h5 class="text-center">Total Book Returned</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{notreturned}</h1>
					<h5 class="text-center">Total Book Not Return</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center"><span >₹ {totalFineAmountCalaulated}</span></h1>
					<h5 class="text-center">Total Fines Received</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{TotalBook}</h1>
					<h5 class="text-center">Total Book</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{uniqueAuthor.length}</h1>
					<h5 class="text-center">Total unique Author</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{uniqueCategory.length}</h1>
					<h5 class="text-center">Total Category</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div style={{backgroundColor :"#395B64"}} class="card  text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{uniquerack.length}</h1>
					<h5 class="text-center">Total Location Rack</h5>
				</div>
			</div>
		</div>
	</div>
</div>
  </div>);
};

export default Dashboard;
