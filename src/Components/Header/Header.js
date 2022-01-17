import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// import useFirebase from "../../hooks/useFirebase";
// import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import useAuth from "../../hooks/useAuth";
import Clock from "react-digital-clock";

function Header() {
	const { user, logout } = useAuth();
	return (
		<nav class='navbar navbar-expand-lg   navbar-dark bg-dark sticky-top'>
			<div class='container'>
				<Link className='navbar-brand' to='/'>
					E-prescription
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					{user.email && (
						<ul class='navbar-nav'>
							<li class='nav-item dropdown'>
								<a
									class='nav-link dropdown-toggle'
									href='#'
									id='navbarDropdownMenuLink'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Dropdown link
								</a>
								<ul
									class='dropdown-menu'
									aria-labelledby='navbarDropdownMenuLink'>
									<li>
										<a class='dropdown-item' href='#'>
											Action
										</a>
									</li>
								</ul>
							</li>
						</ul>
					)}
				</div>

				{!user.email && <Link to='/login'> login </Link>}

				<li className='fs-6 nav-item d-flex align-items-center'>
					{user.email && (
						<small className='text-light'>
							signed in as: {user.displayName}
						</small>
					)}
					{user?.email && (
						<button className='btn-danger btn btn-sm mx-3' onClick={logout}>
							logout
						</button>
					)}
				</li>
				<Clock />
			</div>
		</nav>
	);
}

export default Header;
