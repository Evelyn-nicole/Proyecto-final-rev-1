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
import React, { useEffect, useContext } from "react";
import { Context } from "../Store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import $ from "jquery";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const InfoEvent = (props) => {
  const { actions } = useContext(Context);

  const name = JSON.parse(localStorage.getItem("userLogin"));
  console.log(name);

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const history = useHistory();

  const query = useQuery();

  return (
    <div className="container">
      <div className="card mb-3 mt-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://picsum.photos/id/1003/400/300"
              className="img "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h2>Evento</h2>
              <p className="card-text align-items-center">
                Nombre: {query.get("name")}
              </p>
              <p className="card-text align-items-center">
                {query.get("description")}
              </p>
              <div className="d-flex flex-column align-items-center planetinfo">
                <p>Tematica: {query.get("thematic")}</p>
                <p>Precio: {query.get("price")} </p>
              </div>
            </div>
          </div>
          <div className="p-1">
            {isAuth ? (
              <Link
                className="btn btn-primary card-link p-2"
                to={
                  "/Profile?name=" +
                  props.data.name +
                  "&price=" +
                  props.data.price
                }
              >
                Reservar
              </Link>
            ) : (
              <Link className="btn btn-primary card-link p-2" to={`/Login`}>
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
