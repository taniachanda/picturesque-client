import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
  const [loggedInUser] = useContext(UserContext)

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://cryptic-inlet-98692.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);


	return (
		<nav className="navbar navbar-light bg-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand brand-name text-light" to="/">Picturesque</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Picturesque</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        {!isAdmin && (
          <>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/checkout/:_id">checkout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/bookedList">Booking List</Link>
          </li>
          </>
                      )}
                      {isAdmin && (
                        <>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/checkout/:_id">checkout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/bookedList">Booking List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/addService">Add Service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/allService">Manage Service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/manageBookings">Manage Bookings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/makeAdmin">Make Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" htoref="/">{loggedInUser.name}</Link>
          </li>
            </>
            )}
        </ul>
      </div>
    </div>
  </div>
</nav>
	);
};

export default Sidebar;