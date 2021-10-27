import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../assets/userPhoto.png";


export const Card = () => {

  const name = JSON.parse(localStorage.getItem("userLogin"));

  return (
    <div className="cardProfile">    
        <h3 className="">Bienvenid@ {name.user.name} !</h3>
        <div className="card mt-4">
          <img classname="card-img-top1" src={userPhoto}/>
          <div className="card-body">
            <h5 className="card-title">{name.user.name}</h5>
            <p className="card-text">Correo Eléctronico: {name.user.email}</p>
            <p className="card-text">Contacto: {name.user.phone}</p>
            <button 
            onClick={() => localStorage.setItem("isAuth", false)}>
              salir
            </button>
            <Link to={`/Login`} className="btn btn-primary ml-5">
              salir
            </Link>
            <Link to={`/editprofile`} className="btn btn-primary ml-5">
              editar
            </Link>
          </div>
        </div>
    
    </div>
  );
};

export default Card;