import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

function ManageProduct() {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		axios.get(`https://strawberry-crumble-66293.herokuapp.com/product`).then((response) => {
			setProduct(response.data);
		});
	}, []);
	const deleteProduct = (id) => {
		axios.delete(`https://strawberry-crumble-66293.herokuapp.com/deleteproduct/${id}`).then((res) => {
			console.log(res);
			toast.warning('Delete Successfully');
			history.push('/admin/')
		});
	};

	const history = useHistory();
	return (
		<div>
		<div>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Weight</th>
						<th>Price</th>
						<th>Delete Product</th>
					</tr>
				</thead>

				<tbody>
					{product.map((product) => (
						<Product product={product} deleteProduct={deleteProduct} />
					))}
				</tbody>
			</Table>
		</div>
		<div>
			<div className="d-flex flex-wrap">

			</div>

		</div>
	</div>

	);
}

export default ManageProduct;



// <div className="d-flex flex-wrap">
// {product.map((product) => (
// 	<Product product={product} deleteProduct={deleteProduct}  />
// ))}
// </div>