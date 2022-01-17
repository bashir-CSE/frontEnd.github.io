import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LoginPage() {
	const { signInUsingGoogle } = useAuth();
	const location = useLocation();
	const history= useHistory();
	const redirect_uri = location.state?.from || "/"
	const {user}=useAuth();
	const handaleGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			const user = result.user;
			history.push(redirect_uri);
			// setUser(user);
			console.log(user);
		});
	};
		console.log(user);
	return (
		<div className=' container w-25'>
			<h1>login page</h1>
			<Form>
				{/* <Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group> */}
				<Button onClick={handaleGoogleLogin}>sign in with google</Button>
			</Form>
		</div>
	);
}
