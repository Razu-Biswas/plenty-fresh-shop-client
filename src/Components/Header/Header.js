import React, { useContext } from 'react';
// import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductContext } from '../Context/ProductContext';
import './Header.css'
import firebase from 'firebase/app';
import 'firebase/auth';




function Header() {


	const { user, setUser } = useContext(ProductContext);
	const { isSignedIn, name } = user;

	const handleSignOut = () => {
		console.log('Sign out clicked');
		firebase
			.auth()
			.signOut()
			.then((res) => {
				const signedOutUser = {
					isSignedIn: false,
					name: '',
					email: '',
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
		<div className="navbar navbar-expand-lg  container Header">
			<div className="container-fluid">
				<Link className="navbar-brand brandName" to="/">
					<h4>Plenty Fresh</h4>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className=" navbar-collapse justify-content-end"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/orders">
								Orders
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/admin">
								Admin
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/deals">
								Deals
							</Link>
						</li>
						{isSignedIn ? (
							<>
								<li className="nav-item">
									<p>{name}</p>
								</li>
								<li className="nav-item">
									<button className="btn btn-primary" onClick={handleSignOut}>
										Logout
									</button>
								</li>
							</>
						) : (
							<Link className="nav-link" to="/login">
								Login
							</Link>
						)}
{/* 


						{!isSignedIn ? (
							<li className="nav-item">
								<Link className="nav-link  btn btn-warning" to="/login">
									Login
                            </Link>
							</li>
						) : (
							<li className="nav-item d-flex">
								<button
									className="btn btn-info "
								onClick={handleSignOut}
								>
									{name}
									<RiLogoutCircleRLine />
								</button>
							</li>
						)} */}



					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;








