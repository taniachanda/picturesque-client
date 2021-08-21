import React, { useState } from 'react';
import swal from "sweetalert";
import Sidebar from '../../Sidebar/Sidebar';


const MakeAdmin = () => {
	const [adminMail, setAdminMail] = useState("");

	const handleSubmit = () => {
	  const eventValue = { email: adminMail };
  
	  fetch("https://cryptic-inlet-98692.herokuapp.com/addAdmin", {
		method: "POST",
		headers: {
		  "content-type": "application/json",
		},
		body: JSON.stringify(eventValue),
	  }).then((res) => {
		swal("YAY!", "You email added!", "success");
	  });
	};
	return (
		<div
		className="container-Fluid"
		style={{ height: "100vh" }}
	  >
		  <Sidebar/>
		<div className="row d-flex align-items-center justify-content-center pt-5">
		  <h1 className="mt-5 pt-5 text-center text-dark">Make a admin</h1>
		  <form className="w-50">
			<div className="mb-3">
			  <label className="form-label text-dark fw-bold">
				Input an emali address
			  </label>
			  <input
				onBlur={(e) => {
				  setAdminMail(e.target.value);
				}}
				type="text"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="name@example.com"
				name="email"
			  />
			</div>
			<button
			  onClick={() => {
				handleSubmit();
			  }}
			  className="btn-b"
			  size="lg"
			  type="submit"
			>
			  Submit
			</button>
		  </form>
		</div>
	  </div>
	);
};

export default MakeAdmin;