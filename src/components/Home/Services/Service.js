import React, { useEffect, useState } from 'react'
import ServiceScreen from '../ServiceScreen/ServiceScreen'
// import services from './products'
import './Service.css'

const Service = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://cryptic-inlet-98692.herokuapp.com/Services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  //   useEffect(() => {
  // 	AOS.init({ duration: 500, offset: 300 });
  //   }, []);
  return (
    <div className="container-fluid" style={{ background: '#0E0E0E' }}>
      <div className="p-5 text-light text-center">
        <h2 className="text-uppercase fs-2 pt-5">If you want work with me</h2>
        <p className="fs-6">
          My Team and I specialize in the following services
        </p>
      </div>
      <div className="row pb-5">
        {services.map((service) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-1">
            <ServiceScreen key={service._id} service={service} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
