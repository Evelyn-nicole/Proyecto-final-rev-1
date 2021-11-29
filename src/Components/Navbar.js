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
import { Link, useHistory } from "react-router-dom";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import logonav2 from "../assets/logonav2.png";
import Swal from "sweetalert2";
import $ from "jquery";

const icon = <FontAwesomeIcon icon={faTrash} />;

function refreshPage() {
  window.location.reload();
}

function change() {
  localStorage.setItem("isAuth", false);
}

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const history = useHistory();
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  isAuth
    ? console.log("N")
    : $("#btn1").click(function () {
        Swal.fire({
          title: "Selecciona una opción para ingresar a tu sesión",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Usuario`,
          denyButtonText: `Admin`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Login Usuario!", "", "success");
            let path = `login`;
            history.push(path);
          } else if (result.isDenied) {
            Swal.fire("Login Administrador", "", "success");
            let path = `loginadmin`;
            history.push(path);
          }
        });
      });

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
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand logoNav text-white" to="/">
          <img
            className="logoNav m-0 ml-3"
            src={logonav2}
            style={{ width: "150px", height: "120px" }}
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto mb-2">
            <li className="nav-link active">
              {/* <Link className="nav-link text-white" to="/">
                Home <span className="sr-only">(current)</span>
              </Link> */}
            </li>
            <li className="nav-link active">
              <Link className="nav-link text-white" to={`/Mision`}>
                <h5>Nosotros</h5>
              </Link>
            </li>
            <li className="nav-link active">
              <Link className="nav-link text-white" to={`/NewUser`}>
                <h5>Registrate</h5>
              </Link>
            </li>
            <li className="nav-link active text-white dropdown">
              <Link className="nav-link text-white">
                <h5>Favoritos {Listaelem.length}</h5>
              </Link>
              <div
                className="dropdown-menu text-white dropdown-menu-right "
                aria-labelledby="navbarDropdown"
              >
                <div className="dropdown-item pr-1">{Listaelem}</div>
              </div>
            </li>

            <div className="nav-link text-white">
              {!isAuth ? (
                <button
                  id="btn1"
                  to={`/`}
                  data-toggle="button"
                  className="btn btn-success"
                  type="submit"
                  onClick={() => {
                    localStorage.setItem("isAuth", true);
                    change();
                  }}
                >
                  <h5 className="mt-1">Iniciar Sesión</h5>
                </button>
              ) : (
                <Link
                  to={`/login`}
                  className="btn btn-warning"
                  onClick={() => {
                    localStorage.setItem("isAuth", false);
                    refreshPage();
                    change();
                  }}
                  type="submit"
                >
                  <h5 className="mt-1">Cerrar Sesion</h5>{" "}
                </Link>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
