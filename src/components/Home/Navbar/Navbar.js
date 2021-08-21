import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [loggedInUser] = useContext(UserContext);
  // const [admin, setAdmin] = useState(false);
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.clear();
    history.go(0);
  };
  // const name = JSON.parse(localStorage.getItem("name"));
  const email = JSON.parse(localStorage.getItem("email"));
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container">
    <a className="navbar-brand fs-2" href="#home">Picturesque</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#home">Proofing Gallary</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blogs</a>
        </li>
        <li className="nav-item">
        {/* {
                        loggedInUser.email ? <p className='text-white font-weight-bold my-auto mx-3 bg-success rounded-pill px-4 py-2'>{loggedInUser.name}</p> : <Link to='/login' className='text-white bg-success px-4 py-2 rounded my-auto mx-3'>Login</Link>
                    } */}

        </li>


        <li className="nav-item" eventkey={2}>
              {/* {email && <Nav.Link>{name}</Nav.Link>} */}
              {email && (
                <a
                href="/logout"
                  onClick={handleSignOut}
                  className="nav-link text-decoration-none fw-bold"
                >
                  Log Out
                </a>
              )}
              {!email && (
                <a href="#logIn"
                  size="lg"
                  className="nav-link text-decoration-none fw-bold"
                >
                  <Link to="/logIn">Log in</Link>
                </a>
              )}
            </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
