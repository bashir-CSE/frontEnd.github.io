import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebookF, FaYoutube, FaGooglePlusSquare,FaLinkedin,FaTwitterSquare } from "react-icons/fa";
import "./Footer.css";
function Footer() {
	return (
		<footer className='container py-5 text-center'>
			<Row>
				<Col xs={6} md={4}>
					<h1>Address</h1>
				</Col>
				<Col xs={6} md={4}>
					<h1>Information</h1>
				</Col>
				<Col xs={6} md={4}>
					<h1>About us</h1>
				</Col>
			</Row>
		</footer>
	);
}

export default Footer;


{/* <div className='logo_section'>
					<p>Follow us: </p>
					<div className='icon d-flex gap-2 '>
						<FaFacebookF />
						<FaYoutube />
						<FaGooglePlusSquare />
						<FaLinkedin />
						<FaTwitterSquare />
					</div>
				</div> */}