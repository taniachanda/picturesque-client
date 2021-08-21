import React from 'react'

const Footer = () => {
  return (
    <footer
      className="container-fluid border-top border-secondary"
      style={{ background: '#1C1C1C', height: '60vh' }}
    >
      <div className="container">
        <div
          className="row d-flex justify-content-around align-items-center py-3 "
          style={{ height: '50vh' }}
        >
          <div className="col-4">
            <h3
              className="navbar-brand brand-name fw-bold  fs-3 text-light"
              href="#brand"
            >
              Picturesque
            </h3>
          </div>
          <div className="col-4">
            <p className="fw-normal text-light">
              Address: Chittagong, Bangladesh
            </p>
            <p className="fw-normal text-light">
              Email: taniachanda.dev@gmail.com
            </p>
          </div>
          <div className="col-4">
            <p className="fw-normal text-light">Telephone: +8801818073467</p>
            <p className="fw-normal text-light">Mobile: +18073467</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-light">
            © 2021 Tania Chanda All Rights Reserved
          </div>
          <div className="col-md-6 text-white text-end">Designed for photographers & studios.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
