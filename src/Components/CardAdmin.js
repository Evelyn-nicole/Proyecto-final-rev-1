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
import { Link, useHistory } from "react-router-dom";
import userPhoto from "../assets/userPhoto.png";

const CardAdmin = () => {
  const name = JSON.parse(localStorage.getItem("userAdmin"));

  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem("isAuth", false);
    history.push("/LoginAdmin");
  };

  return (
    <div className="cardProfile2 text-center">
      <div className="card-header h4">Bienvenido {name.superadmin.name}</div>
      <img className="card-img-top userPhoto" src={userPhoto} />
      <div className="card-body">
        <h5 className="card-title">{name.superadmin.name}</h5>
        <p className="card-text">Correo Eléctronico: {name.superadmin.email}</p>
        <p className="card-text">Contacto: {name.superadmin.phone}</p>
        <button className="btn btn-primary ml-2" onClick={handleClick}>
          Cerrar Sesión
        </button>
        <Link to={`/Editadminuser`} className="btn btn-primary ml-4">
          Editar Perfil
        </Link>
      </div>
    </div>
  );
};

export default CardAdmin;
