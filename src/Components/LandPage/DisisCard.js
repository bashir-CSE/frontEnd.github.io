import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisisCard.css";
function DisisCard(props) {
	const { img, id, name, description } = props.data;
	return (
		<div className='col'>
			<div className='card'>
				<img src={img} className='img-fluid card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text'> {description}</p>
					<Link to={`/disisdetails/${id}`}>
						<div className='btn btn-dark'>read more</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default DisisCard;
