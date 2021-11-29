import React from "react";
import { Link, useHistory } from "react-router-dom";
import userPhoto from "../assets/userPhoto.png";

export const Card = () => {
  const name = JSON.parse(localStorage.getItem("userLogin"));

  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem("isAuth", false);
    history.push("/login");
  };

  return (
    <div className="card cardProfile">
      <div className="card-header h4">Bienvenid@ {name.user.name} !</div>
      <img className="card-img-top userPhoto" src={userPhoto} />
      <div className="card-body">
        <h5 className="card-title">{name.user.name}</h5>
        <p className="card-text">Correo Eléctronico: {name.user.email}</p>
        <p className="card-text">Contacto: {name.user.phone}</p>
        <button className="btn btn-primary ml-5" onClick={handleClick}>
          salir
        </button>
        <Link to={`/editprofile`} className="btn btn-primary ml-5">
          editar
        </Link>
      </div>
    </div>
  );
};

export default Card;
