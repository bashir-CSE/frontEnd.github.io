import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// import useFirebase from "../../hooks/useFirebase";
// import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import useAuth from "../../hooks/useAuth";

function Header() {
	const { user, logout } = useAuth();
	return (
		<Navbar sticky='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand>
					<Link to='/'>E-prescription</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.2'>
								edit profile
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.3'>History</NavDropdown.Item>
							<NavDropdown.Divider />
						</NavDropdown>
					</Nav>
					<Nav>
						{!user.email && (
							<Nav.Link>
								<Link to='/login'> login </Link>
							</Nav.Link>
						)}
						<Nav.Link href='#deets' className='fs-6 link-light'>
							{/* <FaUserCircle /> */}
							{user.email && <small>signed in as: {user.displayName}</small>}
							<Nav.Link>
								{user?.email && (
									<button className='btn-danger btn' onClick={logout}>
										logout
									</button>
								)}
							</Nav.Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
