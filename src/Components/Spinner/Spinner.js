import React from 'react';
import Loader from 'react-loader-spinner';

export default function Spinner() {
	const spinnerStyle = {
		display: 'block',
		margin: 'auto',
	};
	return (
		<div style={spinnerStyle}>
			<Loader
				type="Oval"
				color="#00BF"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		</div>
	);
}
