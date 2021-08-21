import React, { useEffect, useState } from 'react';
import loading from '../../../Images/loading...gif'
import swal from "sweetalert";
import Sidebar from '../../Sidebar/Sidebar';

const ManageBookings = () => {

	const [orders, setOrder] = useState([]);

	useEffect(() => {
	  fetch("https://cryptic-inlet-98692.herokuapp.com/bookings")
		.then((res) => res.json())
		.then((data) => setOrder(data));
	});
  
	const changeStatus = (id, e) => {
	  const value = e.target.value;
	  fetch(`https://cryptic-inlet-98692.herokuapp.com/secureOrder/${id}`)
		.then((res) => res.json())
		.then((result) => {
		  if (result) {
			fetch("https://cryptic-inlet-98692.herokuapp.com/updateStatus", {
			  method: "PATCH",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify({ id, status: value }),
			})
			  .then((res) => res.json())
			  .then((result) => {
				if (result) {
				  swal("YES!", "Status Updated", "success");
				}
			  });
		  }
		});
	};
	return (
		<div className="container-fluid">
			<Sidebar/>
        <div className="container">
          <h3
            className="text-center pt-5 mt-5"
            style={{ color: "#072f58", fontWeight: "bold" }}
          >
            Booked List Of The Client
          </h3>
          {orders.length !== 0 ? (
            <div className="d-flex justify-content-center align-items-center mt-3 px-5">
              <table className="table"
                responsive
                striped
                hover
                style={{
                  backgroundColor: "#FFFADE",
                  borderRadius: "20px",
                }}
              >
                <thead className="t-head">
                  <tr>
                    <th>Services</th>
                    <th>Coustomer Name</th>
                    <th className="px-0">Email Address</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {orders.map((order) => {
                  return (
                    <tbody key={order._id}>
                      <tr className="border-bottom-0 fw-bold text-secondary">
                        <td className="o-text">{order.serviceName}</td>
                        <td>{order.name}</td>
                        <td className="o-text px-0" colSpan="1">
                          {order.email}
                        </td>
                        <td>{order.serviceCharge}</td>
                        <td>
                          {" "}
                          <td>
                            <select
                              id="select_options"
                              onChange={(e) => changeStatus(order._id, e)}
                              className="form-select"
                            >
                              <option
                                selected={
                                  order.status === "Pending" ? true : false
                                }
                                value="Pending"
                                className="text-warning"
                              >
                                Pending
                              </option>
                              <option
                                selected={
                                  order.status === "Done" ? true : false
                                }
                                value="Done"
                                className="text-success"
                              >
                                Done
                              </option>
                              <option
                                selected={
                                  order.status === "Rejected" ? true : false
                                }
                                value="Rejected"
                                className="text-danger"
                              >
                                Rejected
                              </option>
                            </select>
                          </td>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          ) : (
            <div className="mt-5 pt-5 d-flex justify-content-center align-items-center">
              <img className="text-center" src={loading} alt="loading..." />
            </div>
          )}
        </div>
      </div>
	);
};

export default ManageBookings;