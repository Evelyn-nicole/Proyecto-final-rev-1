import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
<<<<<<< HEAD
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
=======
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
import injectContext from "./Store/appContext.js";

import Home from './Views/Home.js';
import Navbar from './Components/Navbar.js';
import Login from './Views/Login.js';
import Profile from './Views/Profile.js';
import Newuser from './Views/Newuser.js';
import Card from './Components/Card.js';
import Calendar from './Components/Calendarclient.js';
import EditProfile from './Views/Editprofile.js';
import EditUser from './Components/Edituser.js';
import EditFormUser from "./Components/Editformuser.js";
<<<<<<< HEAD
=======
import PrivateRoute from './Components/PrivateRoute.js';
>>>>>>> 3799222c0924da87fe467a12605aae194c433704




function App() {
  return <Router>
<<<<<<< HEAD
    <Navbar />
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Login">
        <Login />
      </Route>

      <Route exact path="/Profile">
        <Profile />
      </Route>

      <Route path="/card" component={Card}>
      </Route>

      <Route path="/calendar" component={Calendar}>
      </Route>

      <Route exact path="/Newuser">
        <Newuser />
      </Route>

      <Route exact path="/editprofile">
        <EditProfile />
      </Route>

      <Route path="/edituser" component={EditUser}>
      </Route>

      <Route path="/editformuser" component={EditFormUser}>
      </Route>

      <Route render={() => <h1>Not Found error 404</h1>}></Route>
    </Switch>
  </Router>
};

export default injectContext(App);
=======
            <Navbar />
          <Switch>

            <PrivateRoute exact path= "/profile" component={()=><Profile />} />
            
            <Route exact path="/">
            <Home />
            </Route>

            <Route exact path= "/Login">
            <Login />
            </Route>
       

            <Route path= "/card" component={Card}>
            </Route>

            <Route path= "/calendar" component={Calendar}>
            </Route>

            <Route exact path= "/Newuser">
            <Newuser />
            </Route>

            <Route exact path= "/editprofile">
            <EditProfile />
            </Route>

            <Route path= "/edituser" component={EditUser}>
            </Route>

            <Route path= "/editformuser" component={EditFormUser}>
            </Route>

            <Route render={()=><h1>Not Found error 404</h1>}></Route>
          </Switch>
        </Router>
};

export default injectContext(App);
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
