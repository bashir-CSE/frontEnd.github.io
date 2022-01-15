import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function InfoPage() {
	return (
		<div className='mt-5'>
			<h1 className='text-center text-capitalize'>reminder section</h1>
			<Row xs={1} md={2} className='g-4 text-center'>
				<>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className='mb-3 text-capitalize'>
									medicine
								</Card.Title>
								<Button variant='outline-dark'>
									<Link to='/MyfamilyPage'>go here</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className='mb-3 text-capitalize'>
									vaccine
								</Card.Title>
								<Button variant='outline-dark'>
									<Link to='/MyfamilyPage'>go here</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>


				</>

			</Row>
		</div>
	);
}

export default InfoPage;
