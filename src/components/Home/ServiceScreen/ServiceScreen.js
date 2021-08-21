import React from 'react'
import './ServiceScreen.css'
import { Link } from "react-router-dom";
import { FaShoppingCart, FaImage } from 'react-icons/fa'
const ServiceScreen = ({ service }) => {
  return (
    <>
      <div className="hovereffect">
        <div className="d-flex justify-content-center">
          <img
            className="img-responsive img-fluid"
            height="100%"
            width="100%"
            src={service.imageURL}
            alt={service.title}
          />
          <div className="overlay">
          <Link to={`/serviceDetails/${service._id}`}>
            <button className="btn s-btn text-uppercase">
              <FaImage /> View More
            </button>
            </Link>
            <Link to={`/checkout/${service._id}`}>
            <button className="btn o-btn text-uppercase ">
              <FaShoppingCart /> Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceScreen
