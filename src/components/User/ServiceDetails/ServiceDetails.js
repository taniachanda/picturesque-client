import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Home/Navbar/Navbar'

const ServiceDetails = () => {
  const { _id } = useParams()
  console.log(_id)
  const [service, setServiceDetails] = useState([])
  useEffect(() => {
    fetch('https://cryptic-inlet-98692.herokuapp.com/Services')
      .then((res) => res.json())
      .then((data) => setServiceDetails(data))
  }, [])

  const ps = service.find((pdq) => pdq?._id === _id)
  console.log(ps?.title)
  return (
    <>
      <Navbar />
        <div className="container-fluid">
          <div className="row py-5 d-flex justify-content-center">
		  <div className="col-md-6">
            <img
              src={ps?.imageURL}
              alt={ps?.title}
              className="img-Fluid"
            //   height="600"
            //   weight="500"
            />
          </div>
		  <div className="col-md-6 pl-5">
				<h3 className="px-5 pt-5 display-5 fw-bolder text-secondary ">Service: {ps?.title}</h3>
				<h4 className="px-5">Service Charge: <span className="text-info">{ps?.price}</span> </h4>
				<p className="px-5 py-3"> {ps?.description}</p>
			  </div>
        </div>
        </div>
    </>
  )
}

export default ServiceDetails
