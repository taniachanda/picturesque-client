import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
// import Navbar from './components/Home/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import AddService from './components/Admin/AddService/AddService';
import AllServices from './components/Admin/AllServices/AllServices';
import ServiceDetails from './components/User/ServiceDetails/ServiceDetails';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/User/Checkout/Checkout';
import BookedServices from './components/User/BookedServices/BookedServices';
import ManageBookings from './components/Admin/ManageBookedServices/ManageBookings';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addService">
          <AddService />
        </Route>
        <Route path="/allService">
          <AllServices />
        </Route>
        <Route path="/serviceDetails/:_id">
          <ServiceDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/checkout/:_id">
          <Checkout />
        </PrivateRoute>
        <Route path="/bookedList">
          <BookedServices />
        </Route>
        <Route path="/manageBookings">
          <ManageBookings />
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin />
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
