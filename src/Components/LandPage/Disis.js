import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Disis() {
	return (
		<div className='mt-5'>
			<h1 className='text-center text-capitalize'>disis section</h1>
			<Row xs={1} md={1} className='g-4 text-center'>
				<>
					{/* 1 */}
					<Col>
						<div className='card mb-3'>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img
										src='https://image.freepik.com/free-photo/world-diabetes-day-medical-equipment-wooden-floor_1150-26692.jpg'
										className='img-fluid'
										alt='...'
									/>
								</div>
								<div className='col-md-8 d-flex align-items-center'>
									<div className='card-body'>
										<h5 className='card-title'>Card title</h5>
										<p className='card-text'>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
										<div className="btn btn-dark">read more</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
					{/* 2 */}
					<Col>
						<div className='card mb-3'>
							<div className='row g-0'>
								<div className='col-md-8 d-flex align-items-center'>
									<div className='card-body'>
										<h5 className='card-title'>Card title</h5>
										<p className='card-text'>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
										<div className="btn btn-dark">read more</div>
									</div>
								</div>
								<div className='col-md-4'>
									<img
										src='https://image.freepik.com/free-photo/world-diabetes-day-medical-equipment-wooden-floor_1150-26692.jpg'
										className='img-fluid'
										alt='...'
									/>
								</div>
							</div>
						</div>
					</Col>
				</>
			</Row>
		</div>
	);
}

export default Disis;
