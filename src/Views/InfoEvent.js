// import React, { useEffect, useContext } from "react";
// import { Context } from "../Store/appContext";
// import { useLocation } from "react-router-dom";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// const InfoEvent = (prop) => {

//   const query = useQuery();
//   return (
//     <div className="container">
//       <div className="card mb-3 mt-4">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src="https://picsum.photos/id/1003/400/300"
//               className="img "
//               alt="..."
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h3>Descripcion</h3>
//               <p className="card-text align-items-center">
//                 {query.get("description")}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="d-flex justify-content-evenly mt-5">
//         <div className="d-flex flex-column align-items-center planetinfo">
//           <p>Tematica</p>
//           <p>{query.get("thematic")}</p>
//         </div>
//         <div className="d-flex flex-column align-items-center planetinfo">
//           <p>Precio</p>
//           <p>{query.get("price")}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoEvent;
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const fotos = [
  "https://lavetis.es/wp-content/uploads/2019/07/editorial-en-mazagon-190305-by-rosa-garrido-263.jpg",
  "https://picsum.photos/id/1002/400/300",
  "https://picsum.photos/id/1003/400/300",
  "https://picsum.photos/id/1004/400/300",
  "https://picsum.photos/id/1005/400/300",
];

const InfoEvent = (props) => {
  const name = JSON.parse(localStorage.getItem("userLogin"));

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const query = useQuery();

  const history = useHistory();

  const alerta = () => {
    Swal.fire({
      icon: "info",
      title: "Iniciar Sesión",
      text: "para reservar este evento debes iniciar sesión",
    });
    let path = `login`;
    history.push(path);
  };

  return (
    <div className="container">
      <h1 className="tituloLogin text-center">DETALLE DEL EVENTO</h1>
      <div className="card mb-3 mt-4">
        <div className="row">
          <div className="col-md-5">
            <img src=  "https://lavetis.es/wp-content/uploads/2019/07/editorial-en-mazagon-190305-by-rosa-garrido-263.jpg"
 className="img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2>Your Event</h2>
              <p className="card-text">Nombre: {query.get("name")}</p>
              <div className="">
                <p>Tematica: {query.get("thematic")}</p>
                <p>Precio: {query.get("price")} </p>
              </div>
              <p className="card-text">
                Description del evento: {query.get("description")}
              </p>
            </div>
          </div>
          <div className="float-right mr-5">
            <Link className="text-white btn btn-primary mr-4" to="/">
              Volver
            </Link>

            {isAuth ? (
              <Link
                className="btn btn-primary"
                to={
                  "/Profile?name=" +
                  query.get("name") +
                  "&price=" +
                  query.get("price")
                }
              >
                Reservar
              </Link>
            ) : (
              <Link
                onClick={function () {
                  alerta();
                }}
                className="btn btn-primary"
                to={`/Login`}
              >
                Reservar{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoEvent;
