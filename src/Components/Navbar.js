// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../Store/appContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// const icon = <FontAwesomeIcon icon={faTrash} />;

// export const Navbar = () => {
//   const { store, actions } = useContext(Context);

//   const Listaelem = store.Lista.map((item, indice) => {
//     return (
//       <div key={indice}>
//         <li className="">
//           <span>{item}</span>
//           <i
//             className="m-2"
//             onClick={() => {
//               actions.removerlista(indice);
//             }}
//           >
//             {icon}
//           </i>
//         </li>
//       </div>
//     );
//   });

//   return (
//     <div className="container-fluid p-0">
//       <nav className="navbar navbar-expand-lg navbar">
//         <Link className="navbar-brand logoNav text-white" to="/">
//           Enjoy Safe
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <Link className="nav-link text-white" to="/">
//                 Home <span className="sr-only">(current)</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to={`/Mision`}>
//                 Nosotros
//               </Link>
//             </li>
//             {/* <li className="nav-item">
//               <Link className="nav-link text-white" to={`/Login`}>
//                 Iniciar Sesión
//               </Link>
//             </li> */}
//             <li className="nav-item">
//               <Link className="nav-link text-white" to={`/NewUser`}>
//                 Registrarme
//               </Link>
//             </li>
//             <li className="nav-item dropdown">
//               <Link
//                 className="nav-link dropdown-toggle text-white"
//                 to="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Favorites {Listaelem.length}
//               </Link>
//               <div
//                 className="dropdown-menu dropdown-menu-right "
//                 aria-labelledby="navbarDropdown"
//               >
//                 <div className="dropdown-item pr-1">{Listaelem}</div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import logonav2 from "../assets/logonav2.png"

const icon = <FontAwesomeIcon icon={faTrash} />;

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const Listaelem = store.Lista.map((item, indice) => {
    return (
      <div key={indice}>
        <li className="">
          <span>{item}</span>
          <i
            className="m-2"
            onClick={() => {
              actions.removerlista(indice);
            }}
          >
            {icon}
          </i>
        </li>
      </div>
    );
  });

  return (
    <div className="container px-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand logoNav text-white" to="/">
        <img 
        className="logoNav m-0"
        src={logonav2} 
        style={{"width": "100px",
          "height": ""}}
        />
        </Link>
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-link active">
              <Link className="nav-link text-white" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-link active">
              <Link className="nav-link text-white" to={`/Mision`}>
                Quienes Somos
              </Link>
            </li>
            <li className="nav-link active">
              <Link className="nav-link text-white" to={`/NewUser`}>
                Registrarme
              </Link>
            </li>
            <li className="nav-link active dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Favoritos {Listaelem.length}
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right "
                aria-labelledby="navbarDropdown"
              >
                <div className="dropdown-item">{Listaelem}</div>
              </div>
            </li>

            <div className="nav-link active">
              <button
                id="btn1"
                data-toggle="button"
                className="btn btn-warning"
              >
                Iniciar Sesión
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
