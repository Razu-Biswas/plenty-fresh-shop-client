
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import AddProduct from './Components/AddProduct/AddProduct';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';




function App() {
	return (

		<div>
		<ToastContainer />
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<PrivateRoute path="/orders">
					<Orders />
				</PrivateRoute>

				<PrivateRoute path="/checkout/:id">
					<Checkout />
				</PrivateRoute>

				<PrivateRoute path="/addProduct">
					<AddProduct />
				</PrivateRoute>

				<PrivateRoute path="/admin">
					<Admin />
				</PrivateRoute>

				<Route path="/deals">
					<Deals />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	</div>

	);
}

export default App;






