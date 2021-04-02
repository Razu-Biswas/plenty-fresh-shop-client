import React from 'react';
import { Link } from 'react-router-dom';
import AddBooks from '../AddProduct/AddProduct.js';
import { Route } from 'react-router-dom';
import ManageOrder from './ManageOrder';
import ManageProduct from './ManageProduct';

const Admin = () => {
	return (
		<div className="container">
			
			<div className="row">

				<div className="col-md-9">
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
				<div className="col-md-3">


					<Link to="/admin/addproduct">Add products</Link>
					<br />
					<Link to="/admin/manageorder">Manage Order</Link>
					<br />
					<Link to="/admin/manageproduct">Manage products</Link>
				</div>
			</div>
		</div>
	);
};

export default Admin;