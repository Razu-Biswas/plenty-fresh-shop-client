import React from 'react';
import { Link } from 'react-router-dom';
import AddBooks from '../AddProduct/AddProduct.js';
import { Route } from 'react-router-dom';
import ManageOrder from './ManageOrder';
import ManageProduct from './ManageProduct';

const Admin = () => {
	return (
		<div className="container">
			<h1>Please Add your Product</h1>
			<div className="row">
				<div className="col-md-4">



					{/* <div class="d-grid gap-2 col-4 mx-auto"> */}
						<Link to="/admin/addproduct"> <button class="btn btn-primary" type="button">Add    Product</button> </Link>
						<br/>
						<Link to="/admin/manageorder"> <button class="btn btn-primary" type="button">Manage     Order</button> </Link>
						<br/>
						<Link to="/admin/manageproduct"> <button class="btn btn-primary" type="button">Manage    Product</button> </Link>
						
					{/* </div> */}


					{/* <Link to="/admin/addproduct">Add products</Link>
					<Link to="/admin/manageorder">Manage Order</Link>
					<Link to="/admin/manageproduct">Manage products</Link> */}
				</div>
				<div className="col-md-8">
					<Route path="/admin/addproduct">
						<AddBooks />
					</Route>
					<Route path="/admin/manageorder">
						<ManageOrder />
					</Route>
					<Route path="/admin/manageproduct">
						<ManageProduct />
					</Route>
				</div>
			</div>
		</div>
	);
};

export default Admin;