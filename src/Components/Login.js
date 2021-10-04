import React from "react";
import { Link } from "react-router-dom";



export const Login = () => {
  return (
    <div className="container-fluid">
      <h1 className="tittle text-center mt-4">¡BIENVENIDO A ENJOY SAFE!</h1>
      <h2 className="subtitle">Iniciar Sesión</h2>
      <form className="FormInicioSesion">
        <div className="form-group">
          <label for="exampleInputEmail1">Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            Ingresa el correo electrónico que registraste
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            ¿Olvidaste la Contraseña?
          </label>
        </div>
        <button type="submit" className="botonIniciarSesion btn btn-dark">
          Iniciar Sesión
        </button>
        <button type="submit" className="botonCancelar btn btn-dark"> <Link className="text-white" to="/">
          Cancelar
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
