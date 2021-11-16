import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../assets/userPhoto.png";


export const Card = () => {

  const name = JSON.parse(localStorage.getItem("userLogin"));

  return (
    <div className="cardProfile mb-4">
      <h3 className="">Bienvenid@ {name.user.name} !</h3>
      <div className="card mt-4">
        <img classname="card-img-top1" src={userPhoto} alt="UserPhoto" />
        <div className="card-body">
          <h5 className="card-title">{name.user.name}</h5>
          <p className="card-text">Correo Eléctronico: {name.user.email}</p>
          <p className="card-text">Contacto: {name.user.phone}</p>
          <div className ="d-flex flex-column ">
            <Link to={`/editprofile`} className="btn btn-primary p-1 mt-1 my-1">
              Editar Perfil
            </Link>
            <Link to={`/Login`} className="btn btn-primary p-1 my-1 mt-1" onClick={() => localStorage.setItem("isAuth", false)}>
              Cerrar Sesion
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
