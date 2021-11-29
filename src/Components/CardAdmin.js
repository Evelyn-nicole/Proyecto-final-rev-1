// import React from "react";
// import { Link } from "react-router-dom";
// import userPhoto from "../assets/userPhoto.png";


// const CardAdmin = () => {

//   const name = JSON.parse(localStorage.getItem("userAdmin"));

//   return (
//     <div className="cardProfile">
//       <h3 className="">Administrador {name.superadmin.name} !</h3>
//       <div className="card mt-4">
//         <img className="card-img-top1" src={userPhoto} alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">{name.superadmin.name}</h5>
//           <p className="card-text">
//             Correo Eléctronico: {name.superadmin.email}
//           </p>
//           <p className="card-text">Contacto: {name.superadmin.phone}</p>
//           <Link
//             to={`/loginadmin`}
//             className="btn btn-primary ml-5"
//             onClick={() => localStorage.setItem("isAuth", false)}
//           >
//             salir
//           </Link>
//           <Link to={`/Editadminuser`} className="btn btn-primary ml-5">
//             editar
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CardAdmin;
import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../assets/userPhoto.png";


const CardAdmin = () => {

  const name = JSON.parse(localStorage.getItem("userAdmin"));

  return (
    <div className="cardProfile">    
        <div className="card mt-4">
        <h3 className="">Bienvenid@ {name.superadmin.name} !</h3>
          <img classname="card-img-top1" src={userPhoto}/>
          <div className="card-body">
            <h5 className="card-title">{name.superadmin.name}</h5>
            <p className="card-text">Correo Eléctronico: {name.superadmin.email}</p>
            <p className="card-text">Contacto: {name.superadmin.phone}</p>
            <Link to={`/Login`} className="btn btn-primary ml-5"  onClick={() => localStorage.setItem("isAuth", false)}>
              salir
            </Link>
            <Link to={`/Editadminuser`} className="btn btn-primary ml-5">
              editar
            </Link>
          </div>
        </div>
    
    </div>
  );
};

export default CardAdmin;