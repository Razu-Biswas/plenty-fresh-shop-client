import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';


function ManageProduct() {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		axios.get(`https://plenty-fresh-server.onrender.com/product`).then((response) => {
			setProduct(response.data);
		});
	}, []);
	const deleteProduct = (id) => {
		axios.delete(`https://plenty-fresh-server.onrender.com/deleteproduct/${id}`).then((res) => {
			console.log(res);
			toast.warning('Delete Successfully');
		});
	};

	
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
