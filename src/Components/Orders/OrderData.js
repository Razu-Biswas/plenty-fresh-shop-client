import React from 'react';
import { Button, Table } from 'react-bootstrap';

function OrderData(props) {
	const {
		productName,
		productWeight,
		date,
		email,
		price,
		quantity,
		imgUrl,
		weight,
	} = props.order;
	return (

		<>
		<tr>
			<td>{date}</td>
			<td>{productName}</td>
			<td>{weight}</td>
			<td>{quantity}</td>
			<td>{email}</td>
			<td>{price}</td>
			<td><Button variant="success">Confirm</Button></td>
			{props.children}
		</tr>

	</>
	);
}

export default OrderData;



// <div>
// <div className="container">
// 	<Table striped bordered hover size="sm">
// 		<thead>
// 			<tr>
// 				<th>Date</th>
// 				<th>Product Name</th>
// 				<th>Weight/pcs/pack</th>
// 				<th>Quantity</th>
// 				<th>User Email</th>
// 				<th>Price</th>
// 				<th>Confirm</th>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			<tr>
// 				<td>{date}</td>
// 				<td>{productName}</td>
// 				<td>{weight}</td>
// 				<td>{quantity}</td>
// 				<td>{email}</td>
// 				<td>{price}</td>
// 				<td></td>
// 				<td><Button variant="primary">Confirm</Button></td>
// 			</tr>
// 		</tbody>
// 	</Table>
// 	{props.children}
// </div>
// </div>
