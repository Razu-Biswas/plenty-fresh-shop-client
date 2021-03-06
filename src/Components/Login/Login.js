import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.Config';
import { ProductContext } from '../Context/ProductContext';
import { useHistory, useLocation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const Login = () => {
	const { user, setUser } = useContext(ProductContext);

	const provider = new firebase.auth.GoogleAuthProvider();
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const handleSignIn = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const signedInUser = {
					isSignedIn: true,
					name: displayName,
					email: email,
				};
				setUser(signedInUser);
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
				console.log(error.message);
			});
	};

	const handleSignOut = () => {
		console.log('Sign out clicked');
		firebase
			.auth()
			.signOut()
			.then((res) => {
				const signedOutUser = {
					isSignedIn: false,
					name: '',
				};
				setUser(signedOutUser);
				// console.log(res);
			})
			.catch((error) => {
				console.log('Error:', error);
				console.log('Error Message:', error.message);
			});
	};

	return (
		<div>
			<div className="d-flex flex-column align-items-center googleLogin mt-5">
			<h4>Press Button To Login</h4>
			<button className="btn googleLogin" onClick={handleSignIn}>
				
				<FcGoogle className="googleLogin" />
			</button>
		</div>
			
		</div>
	);
};

export default Login;
