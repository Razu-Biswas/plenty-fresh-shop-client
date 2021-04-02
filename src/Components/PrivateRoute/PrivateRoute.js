import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ProductContext } from '../Context/ProductContext';
function PrivateRoute({ children, ...rest }) {
	const { user } = useContext(ProductContext);
	const { isSignedIn } = user;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isSignedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;