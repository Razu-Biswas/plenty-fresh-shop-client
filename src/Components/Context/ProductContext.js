import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
	const [user, setUser] = useState({});

	const contextData = {
		user,
		setUser,
	};
	return (
		<ProductContext.Provider value={contextData}>
			{props.children}
		</ProductContext.Provider>
	);
};
