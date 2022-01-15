import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExploreMore.css";

function ExploreMore(props) {
	return (
		<Row xs={1}  md={2}  className='g-4 mt-3 text-center'>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className='mb-3 text-capitalize'>my family</Card.Title>
						<Button variant='outline-dark'>
							<Link to='/MyfamilyPage'>go here</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className='mb-3 text-capitalize'>my record</Card.Title>
						<Button variant='outline-dark'>
							<Link to='/MyRecord'>go to here</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className='mb-3 text-capitalize'>my profile</Card.Title>
						<Button variant='outline-dark'>
							<Link to='/MyProfile'>go here</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className='mb-3 text-capitalize'>first aid</Card.Title>
						<Button variant='outline-dark'>
							<Link to='/Firstaid'>go here</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className='mb-3 text-capitalize'>
							hospital near me
						</Card.Title>
						<Button variant='outline-dark'>
							<Link to='/HospitalNearMe'>go here</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title className='mb-3 text-capitalize'>
							pharmecy near me
						</Card.Title>
						<Button variant='outline-dark'>
							<Link to='/PharmecyNearMe'>go here</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default ExploreMore;
