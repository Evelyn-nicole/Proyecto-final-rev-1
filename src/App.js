import React from "react";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import injectContext from "./Store/appContext.js";

import Navbar from "./Components/Navbar.js";
import Card from "./Components/Card.js";
import Calendar from "./Components/Calendarclient.js";
import EditUser from "./Components/Edituser.js";
import EditFormUser from "./Components/Editformuser.js";
import PrivateRoute from "./Components/PrivateRoute.js";
import AdmEditEvent from "./Components/AdmEditEvent.js";
import Map from "./Components/Map.js";
import CardAdmin from "./Components/CardAdmin.js";
import EditAdminUser from "./Components/EditAdminUser.js";
import Footer from "./Components/Footer.js";
import Event from "./Components/Events.js";

import Home from "./Views/Home.js";
import Login from "./Views/Login.js";
import Profile from "./Views/Profile.js";
import Newuser from "./Views/Newuser.js";
import EditProfile from "./Views/Editprofile.js";
import Mision from "./Views/Mision.js";
import AdmNewEvent from "./Views/AdmNewEvent.js";
import LoginAdmin from "./Views/LoginAdmin.js";
import CreateAdminUser from "./Views/CreateAdminUser.js";
import ProfileAdmin from "./Views/ProfileAdmin.js";
import InfoEvent from "./Views/InfoEvent.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/Profile" component={() => <Profile />} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route path="/Card" component={Card}></Route>
        <Route path="/Calendar" component={Calendar}></Route>
        <Route exact path="/Newuser">
          <Newuser />
        </Route>
        <Route exact path="/Editprofile">
          <EditProfile />
        </Route>
        <Route path="/Edituser" component={EditUser}></Route>
        <Route path="/Editformuser" component={EditFormUser}></Route>
        <Route exact path="/Event">
          <Event />
        </Route>
        <Route exact path="/Mision">
          <Mision />
        </Route>
        <Route exact path="/AdmNewEvent">
          <AdmNewEvent />
        </Route>
        <Route exact path="/AdmEditEvent">
          <AdmEditEvent />
        </Route>
        <Route exact path="/Map">
          <Map />
        </Route>

        <Route path="/CardAdmin" component={CardAdmin}></Route>

        <Route path="/EditAdminUser" component={EditAdminUser}></Route>

        <Route exact path="/LoginAdmin">
          <LoginAdmin />
        </Route>

        <Route exact path="/CreateAdminUser">
          <CreateAdminUser />
        </Route>

        <Route exact path="/ProfileAdmin">
          <ProfileAdmin />
        </Route>

        <Route exact path="/infoEvent">
          <InfoEvent />
        </Route>

        <Route render={() => <h1>Not Found error 404</h1>}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default injectContext(App);
