import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar'
const Checkout = () => {
	const [loggedInUser] = useContext(UserContext);
	// const [bookingData, setBookingData] = useState();
	const { register, handleSubmit } = useForm();
	// const onSubmit = (data) => {
	// 	setBookingData(data);
	// };


	const onSubmit = (data) => {
		// setBookingData(data);
		const bookingDetails = {
			...loggedInUser,
			serviceName: bs?.title,
			serviceCharge: bs?.price,
			Serviceimage: bs?.imageURL,
			orderTime: new Date(),
			Phone: data.phone,
			Address: data.address,
			status: "pending",
		};
		fetch("https://cryptic-inlet-98692.herokuapp.com/addBooking", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(bookingDetails),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	const { _id } = useParams()
	console.log(_id)
	const [service, setServiceDetails] = useState([])
	useEffect(() => {
	  fetch('https://cryptic-inlet-98692.herokuapp.com/Services')
		.then((res) => res.json())
		.then((data) => setServiceDetails(data))
	}, [])
  
	const bs = service.find((pdq) => pdq?._id === _id)
	console.log(bs?.title)
	return (
		<>
		<Sidebar/>
			<div className="container-fluid">
				<div className="container">
					<div className="row d-flex align-items-center justify-content-evenly pt-5">
						<h1 className="mt-5 text-center">Book a Service</h1>
						<div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 text-dark pl-5">
							<form onSubmit={handleSubmit(onSubmit)} className="">
								<div className="form-group">
									<label className="form-label text-dark">Name</label>
									<input
										className="form-control border-0 shadow-sm "
										placeholder="Name"
										name="name"
										defaultValue={loggedInUser.name}
										{...register("name")}
										disabled
										readOnly
									/>
									<br />
									<label className="form-label text-dark">Email</label>
									<input
										className="form-control border-0 shadow-sm "
										placeholder=" email"
										name="email"
										defaultValue={loggedInUser.email}
										{...register("email")}
										disabled
										readOnly
									/>
									<br />
									<label className="form-label text-dark">Phone</label>
									<input
										className="form-control border-0 shadow-sm "
										placeholder=" phone"
										name="phone"
										// defaultValue={loggedInUser.email}
										{...register("phone")}
									/>
									<br />
									<label className="form-label text-dark">Address</label>
									<input
										className="form-control border-0 shadow-sm "
										type="text"
										placeholder="address"
										// defaultValue='address'
										{...register("address")}
									/>
									<br />
									<label className="form-label text-dark">Service Name</label>
									<input
										className="form-control border-0 shadow-sm "
										type="text"
										defaultValue={bs?.title}
										{...register("serviceName")}
										disabled
										readOnly
									/>
									<br />
									<label className="form-label text-dark">Service Charge</label>
									<input
										className="form-control border-0 shadow-sm"
										type="text"
										defaultValue={bs?.price}
										{...register("price")}
										disabled
										readOnly
									/>
									<br />
									<button type="submit" className="btn-b btn">
										Check Out
									</button>
								</div>
							</form>
						</div>
						{/* <div
							style={{ display: appointmentData ? "block" : "none" }}
							className="col-md-6 col-xl-6 col-lg-6 col-sm-12 pl-5"
						>
							<PaymentSystem
                handlePayment={handlePaymentSuccess}
              ></PaymentSystem>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;