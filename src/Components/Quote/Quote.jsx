import React, { useEffect, useState } from "react";
import { Col, Card, Row, Container } from "react-bootstrap";
import "./Quote.css"
function Quote() {
	const [quotes, setQuotes] = useState({});

	useEffect(() => {
		fetch("https://api.kanye.rest")
			.then((res) => res.json())
			.then((json) => setQuotes(json));
	}, []);
	return (
		<div className="quote">
			<Container>
				<Row xs={1} md={12} className='g-4  my-2 text-center'>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title>
									<blockquote>
										<h1> "{quotes.quote}" </h1>
									</blockquote>
								</Card.Title>
								<Card.Text>- Kanye West</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Quote;
