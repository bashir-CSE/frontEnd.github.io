import React, { useState } from "react";
import BackBtn from "../../BackBtn/BackBtn";
import useAuth from "../../hooks/useAuth";

function MyProfile() {
	const { user } = useAuth();
	const [phn, setPhn] = useState(``);
	const phnNumber = (e) => setPhn(e.target.value);
	return (
		<div className=' container mx-auto d-flex justify-content-around align-items-center'>
			<div>
				<h1>MyProfile</h1>
				<h4> name: {user.displayName} </h4>
				<p>Email: {user.email} </p>
				<p>phn: {phn} </p>

				<img src={user.photoURL} alt='' srcset='' />
				<br />
				<BackBtn />
			</div>
			<div class='row d-flex flex-column gap-4'>
				<div class='col'>
					<input
						onChange={phnNumber}
						type='number'
						class='form-control'
						placeholder='number'
						aria-label='First name'
					/>
				</div>

				<button className='btn btn-dark btn-sm w-50 mx-auto'>submit</button>
			</div>
		</div>
	);
}

export default MyProfile;
