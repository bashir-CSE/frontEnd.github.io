import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DisisCard from "./DisisCard";
function Disis() {
	const [datas, setDatas] = useState([]);
	// let url = "./data.json";
	let url = "http://localhost:5000/users";
	// let url = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setDatas(json));
	}, []);

	return (
		<div className='mt-5'>
			<h1 className='text-center text-capitalize'>disis section</h1>

			<Row xs={1} lg={3} md={3} className='g-4 text-center'>
				{datas.map((data) => {
					return <DisisCard key={data.id} data={data} />;
				})}

			</Row>
		</div>
	);
}

export default Disis;

