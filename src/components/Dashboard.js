import React,{useState,useEffect} from "react";
import { db } from "../utils/firebase";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { QuerySnapshot ,query,onSnapshot,collection} from "@firebase/firestore";
import firebase from "firebase/compat/app";

const Dashboard = () => {

  const [TotalBook, setTotalBook] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "Book_details"));
    onSnapshot(q, (querySnapshot) => {
      const TotalBook = querySnapshot.size
      setTotalBook(TotalBook)
    });
  }, []);

  return <div>
    <div class="container-fluid py-4">
	<h1 class="mb-5">Dashboard</h1>
	<div class="row">
		<div class="col-xl-3 col-md-6">
			<div class="card bg-primary text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">345</h1>
					<h5 class="text-center">Total Book Issue</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-warning text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">69</h1>
					<h5 class="text-center">Total Book Returned</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-danger text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">0</h1>
					<h5 class="text-center">Total Book Not Return</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-success text-white mb-4">
				<div class="card-body">
					<h1 class="text-center"><span >₹</span>&nbsp;0</h1>
					<h5 class="text-center">Total Fines Received</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-success text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">{TotalBook}</h1>
					<h5 class="text-center">Total Book</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-danger text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">18</h1>
					<h5 class="text-center">Total Author</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-warning text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">4</h1>
					<h5 class="text-center">Total Category</h5>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-primary text-white mb-4">
				<div class="card-body">
					<h1 class="text-center">11</h1>
					<h5 class="text-center">Total Location Rack</h5>
				</div>
			</div>
		</div>
	</div>
</div>
  </div>;
};

export default Dashboard;
