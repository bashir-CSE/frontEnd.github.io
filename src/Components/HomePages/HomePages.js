import React from "react";
import { Container } from "react-bootstrap";

import Mainland from "../LandPage/Mainland";
import Quote from "../Quote/Quote";

import "./HomePages.css";

function HomePages() {
	return (
		<div>
			<Quote />
			<Container>
				<Mainland />
			</Container>
		</div>
	);
}

export default HomePages;
