import { Component } from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({component: Component, ...otherProps}) => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))
    return  <Route {...otherProps} render={(props) => isAuth ? <Component{...props}/> : <Redirect to="/login"/>}/> 
}

export default PrivateRoute;