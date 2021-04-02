import React from 'react';

function OrderData(props) {
	const {
		productName,
		productWeight,
		date,
		email,
		price,
		quantity,
		imgUrl,
	} = props.order;
	return (
		<div className="border p-5 bg-primary m-2">
			<img style={{ width: '70px', height: '70px' }} src={imgUrl} alt="" />
			<p>{productName}</p>
			<p>{productWeight}</p>
			<p>{date}</p>
			<p>{email}</p>
			<p>{price}</p>
			<p>{quantity}</p>
			{props.children}
		</div>
	);
}

export default OrderData;