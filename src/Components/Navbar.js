import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" to="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/Login`}>
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                Registrarme
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
