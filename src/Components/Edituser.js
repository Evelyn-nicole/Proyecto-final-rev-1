import React from "react";
import userPhoto from "../assets/userPhoto.png";


export const EditUser = () => {

<<<<<<< HEAD
    const name = JSON.parse(localStorage.getItem("userLogin"));

    return (
        <div className="cardProfile col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center mr-5">
            <h3 className="">Bienvenid@ {name.user.name} !</h3>
            <div className="card mt-4">
                <img classname="card-img-top1" src={userPhoto} />
                <div className="card-body">
                    <h5 className="card-title">{name.user.name} {name.user.last_name}</h5>
                    <p className="card-text">Correo Eléctronico: {name.user.email}</p>
                    <p className="card-text">Contacto: {name.user.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
=======
  const name = JSON.parse(localStorage.getItem("userLogin"));

  return (
    <div className="cardProfile col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center mr-5">    
        <h3 className="">Bienvenid@ {name.user.name} !</h3>
        <div className="card mt-4">
          <img classname="card-img-top1" src={userPhoto}/>
          <div className="card-body">
            <h5 className="card-title">{name.user.name} {name.user.last_name}</h5>
            <p className="card-text">Correo Eléctronico: {name.user.email}</p>
            <p className="card-text">Contacto: {name.user.phone}</p>
          </div>
        </div>
    </div>
  );
};

export default EditUser;
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
