import React from "react";
import BackBtn from "../../BackBtn/BackBtn";
import { Controller, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

function MyProfile() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className='mx-auto'>
			{/* <h1>MyProfile</h1> */}
			<form
				className='mx-auto w-50 text-center'
				onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<Form.Control placeholder='Enter your name' {...register("example")} />{" "}
				<br />
				<br />
				{/* include validation with required or other standard HTML validation rules */}
				<Form.Control
					placeholder='habijabi'
					{...register("exampleRequired", { required: true })}
				/>
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}
				<br />
				<label for='birthday'>Birthday:</label>
				<Form.Control type='date' id='birthday' name='birthday'></Form.Control>
				<br />
				<div class='form-check form-check-inline'>
					<input
						class='form-check-input'
						type='radio'
						name='inlineRadioOptions'
						id='inlineRadio1'
						value='option1'
					/>
					<label class='form-check-label' for='inlineRadio1'>
						male
					</label>
				</div>
				<div class='form-check form-check-inline'>
					<input
						class='form-check-input'
						type='radio'
						name='inlineRadioOptions'
						id='inlineRadio2'
						value='option2'
					/>
					<label class='form-check-label' for='inlineRadio2'>
						female
					</label>
            </div>
            <br />
				<input className='btn btn-outline-danger mt-3' type='submit' />
			</form>

			<BackBtn />
		</div>
	);
}

export default MyProfile;
