import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

import Home from './Views/Home.js';
import Navbar from './Components/Navbar.js';
import Login from './Components/Login.js';
import CheckIn from './Components/CheckIn.js';


function App() {
  return <Router>
            <Navbar />
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path= "/Login">
            <Login />
            </Route>
          </Switch>
        </Router>
};

export default App;
