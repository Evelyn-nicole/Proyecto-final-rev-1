import React, { useEffect, useState, useContext } from "react";
import CardAdmin from "../Components/CardAdmin";
import { Link, useHistory } from "react-router-dom";

const ProfileAdmin = () => {
  const name = JSON.parse(localStorage.getItem("userAdmin"));

  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem("isAuth", false);
    history.push("/");
  };

  return (
    <div className="container-fluid px-5">
      <h1 className="tituloLogin text-center mt-4">
        ACCIONES DEL ADMINISTRADOR
      </h1>
      <h2 className="subtituloLogin text-center mt-5">
        Aqui podrás realizar las siguientes acciones
      </h2>
      <div className="row mt-5 text-center">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <CardAdmin />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="card cardProfile3">
            <div className="card-header h4">Acciones de Administrador</div>
            <h5 className="text-center mt-5">
              Selecciona lo que deseas realizar
            </h5>
            <div className="cardReservar">
              <Link to={`/AdmNewEvent`}>
                <p className="text-left ml-3 mt-2">Crear un Nuevo Evento</p>
              </Link>
              <Link to={`/editadminuser`}>
                <p className="text-left ml-3">Editar Usuario Administrador</p>
              </Link>
              <Link to={`/`}>
                <p className="text-left ml-3">Ver Eventos Disponibles</p>
              </Link>
            </div>
            <div>
              <button className="btn btn-primary mt-5" onClick={handleClick}>
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
