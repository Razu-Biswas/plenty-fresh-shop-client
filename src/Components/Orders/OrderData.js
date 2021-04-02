import React from 'react';
import { Button, Table } from 'react-bootstrap';

function OrderData(props) {
	const {
		productName,
		date,
		email,
		price,
		quantity,
		weight
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


