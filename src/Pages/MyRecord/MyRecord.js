import React, { useState } from "react";
import {
	Accordion,
	Button,
	Dropdown,
	DropdownButton,
	Form,
	FormControl,
	InputGroup,
	Modal,
} from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import BackBtn from "../../BackBtn/BackBtn";
import "./MyRecord.css";
function MyRecord() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='container MyRecord-container'>
			<h1 className='text-center mb-3'>MyRecord</h1>
			<Accordion className='w-75 mx-auto'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Prescription</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>Test reports</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>X-ray reports</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			{/* <BackBtn /> */}
			<button className='upload-btn' onClick={handleShow}>
				<img src='https://img.icons8.com/material-outlined/96/000000/add-image.png' />
			</button>

			{/* modal */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h3>Add file</h3>
				</Modal.Header>
				<Modal.Body>
					<Form.Group controlId='formFile' className='mb-3 text-capitalize'>
						<Form.Control type='file' />
					</Form.Group>

					<Form.Control type='date' className='mb-3' />

					<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
						<Form.Control placeholder='description' as='textarea' rows={3} />
					</Form.Group>

					<InputGroup className='mb-3'>
						<DropdownButton
							variant='outline-secondary'
							title='Select file type'
							id='input-group-dropdown-1'>
							<Dropdown.Item href='#'>
								<Form.Check aria-label='option 1' label='prescription' />
							</Dropdown.Item>
							<Dropdown.Item href='#'>
								<Form.Check aria-label='option 1' label='test reports' />
							</Dropdown.Item>
							<Dropdown.Item href='#'>
								<Form.Check aria-label='option 1' label='X-ray ' />
							</Dropdown.Item>
						</DropdownButton>
					</InputGroup>
				</Modal.Body>
			</Modal>

			{/* kjdlsjdklgnknsgks */}
		</div>
	);
}

export default MyRecord;
