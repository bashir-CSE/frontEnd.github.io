import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BackBtn from "../../BackBtn/BackBtn";
import "./DisisDitails.css";

function DisisDitails() {
	const { id } = useParams();
	const url = `http://localhost:5000/users/${id}`;
	const [disis, setDisis] = useState({});
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDisis(data));
	}, []);
	return (
		<div className="container">
			<div className='d-flex gap-5 justify-content-center align-items-center my-2'>
				<div>
					<div className='img-container'>
						<img src={disis.img} className='' alt='...' />
					</div>
					<h1>{disis.name}</h1>
					<p>{disis.description}</p>
				</div>
				<div>
					{" "}
					<iframe
						width='420'
						height='315'
						src='https://www.youtube.com/embed/-B-RVybvffU'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
				</div>
			</div>
			<BackBtn />
		</div>
	);
}

export default DisisDitails;
// const { id } = useParams();
// const [disis, setDisis] = useState({});
// const url = `https://jsonplaceholder.typicode.com/users/${id}`;
// console.log(url);
// console.log(id);
// useEffect(() => {
// 	fetch(url)
// 		.then((res) => res.json())
// 		.then((data) => setDisis(data));
// }, []);
// console.log(disis);
