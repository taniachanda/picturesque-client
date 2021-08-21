import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App'
import loading from '../../../Images/loading...gif'
import Sidebar from '../../Sidebar/Sidebar'
const BookedServices = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [booking, setBooking] = useState([])
  useEffect(() => {
    fetch('https://cryptic-inlet-98692.herokuapp.com/booking?email=' + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setBooking(data))
  })
  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <div className="container">
          {booking.length !== 0 ? (
            <div className="row d-flex align-self-center justify-content-center">
              <div className="text-center text-dark pt-5">
                <h2 className="p-5 fs-1">Appointment List</h2>
              </div>
              {booking.map((book) => {
                return (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pl-5">
                    <div
                      style={{
                        width: '19rem',
                        backgroundColor: '#031850',
                      }}
                      varient="Secondary"
                      className="border-0 shadow rounded-right mt-3 card"
                    >
                      {/* <Card.Header className="text-secondary">Invoice Id: {_id}</Card.Header> */}
                      <div className="card-body">
                        <div className="text-info card-title">
                          Service Name: {book.serviceName}{' '}
                        </div>
                        <div className="text-info card-title">
                          Client Name: {book.name}
                        </div>
                        <div className="text-info card-text">
                          Service Charge: {book.serviceCharge}{' '}
                        </div>
                        <div
                          className={`alert ${
                            book.status === 'Rejected'
                              ? 'alert-danger'
                              : book.status === 'Done'
                              ? 'alert-success'
                              : 'alert-warning'
                          } mt-4 w-50 fw-bolder card-text`}
                          role="alert"
                        >
                          {book.status}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="mt-5 pt-5 d-flex justify-content-center align-items-center">
              <img className="text-center" src={loading} alt="loading..." />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BookedServices
