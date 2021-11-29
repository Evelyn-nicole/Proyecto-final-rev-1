// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../Store/appContext";

// export const CardAlternativeWedd = (props) => {
//   const { actions } = useContext(Context);

//   const Agregarelementos = () => {
//     const nombre = props.data.name;
//     actions.getLista(nombre);
//   };
//   const isAuth = JSON.parse(localStorage.getItem("isAuth"));

//   const Reservarelem = () => {
//     const nombres = props.data.name;
//     const precio = props.data.price;
//     actions.Reservarelem(nombres, precio);
//   };

//   let lat = 0;
//   let long = 0;

//   if (props.data.name === "Matrimonio Alternativo") {
//     lat = -33.387717713241614;
//     long = -70.54551201587743;
//   }
//   if (props.data.name === "Matrimonio Zombie") {
//     lat = -33.431960012885234;
//     long = -70.59992867249629;
//   }

//   if (props.data.name === "Matrimonio Tradicional") {
//     lat = -33.433141886671564;
//     long = -70.63494759321209;
//   }

//   if (props.data.name === "Matrimonio Editadora") {
//     lat = -33.44059090237492;
//     long = -70.57306366696584;
//   }

//   return (
//     <div className="cardProfile w-25 m-2" style={props.styles}>
//       <div class="card border-info">
//         <img
//           src="https://picsum.photos/id/55/700/400"
//           class="card-img-top"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title text-center">{props.data.name}</h5>
//         </div>
//         <div class="card-body">
//           {isAuth ? (
//             <Link
//               className="btn btn-primary card-link"
//               to={
//                 "/Profile?name=" +
//                 props.data.name +
//                 "&price=" +
//                 props.data.price
//               }
//             >
//               Reservar
//             </Link>
//           ) : (
//             <Link className="btn btn-primary card-link" to={`/Login`}>
//               Reservar
//             </Link>
//           )}

//           <Link
//             to={
//               `/infoevent?description=` +
//               props.data.description +
//               "&price=" +
//               props.data.price +
//               "&thematic=" +
//               props.data.thematic
//             }
//             className="btn btn-primary ml-5 mb-2"
//           >
//             Ver mas
//           </Link>

//           <button
//             className="btn btn-primary ml-5 card-link"
//             onClick={function (event) {
//               Agregarelementos();
//               Reservarelem();
//             }}
//           >
//             Agregar a Favoritos
//           </button>

//           <Link
//             to={"/Map?long=" + long + "&lat=" + lat}
//             className="btn btn-primary ml-5 card-link mt-2"
//           >
//             Ver en Mapa
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CardAlternativeWedd;
// // return (
// //   <div className="cardProfile w-25 m-2" style={props.styles}>
// //     <div className="card border-info">
// //       <img
// //         src="https://picsum.photos/id/55/700/400"
// //         className="card-img-top"
// //       />
// //       <div className="card-body">
// //         <h5 className="card-title text-center">{props.data.name}</h5>
// //         <p className="card-text text-center">{props.data.description}.</p>
// //       </div>
// //       <ul className="list-group list-group-flush">
// //         <li className="list-group-item text-center">{props.data.thematic}</li>
// //         <li className="list-group-item text-center">{props.data.price}</li>
// //       </ul>
// //       <div className="card-body">
// //         <Link to={`/`} className="btn btn-primary ml-5 mb-2">
// //           Ver mas
// //         </Link>
// //         <button
// //           className="btn btn-primary ml-5 card-link"
// //           onClick={Agregarelementos}
// //         >
// //           Agregar Elementos
// //         </button>
// //         <Link
// //           to={"/Map?long=" + long + "&lat=" + lat}
// //           className="btn btn-primary ml-5 card-link mt-2"
// //         >
// //           Ver en Mapa
// //         </Link>
// //       </div>
// //     </div>
// //   </div>
// // );
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../Store/appContext";
import Swal from "sweetalert2";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export const CardAlternativeWedd = (props) => {
  const { actions } = useContext(Context);

  const history = useHistory();

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const Agregarelementos = () => {
    const nombre = props.data.name;
    isAuth
      ? actions.getLista(nombre)
      : Swal.fire({
          icon: "info",
          title: "Debes iniciar sesión",
          text: "para agregar eventos a favoritos",
        });
  };

  const location = (e) => {
    Swal.fire({
      icon: "success",
      title: "Ubicación del Evento",
    });
    history.push("/Map?long=" + long + "&lat=" + lat);
  };

  let lat = 0;
  let long = 0;

  if (props.data.name === "Matrimonio Hippie") {
    lat = -33.387717713241614;
    long = -70.54551201587743;
  }
  if (props.data.name === "Matrimonio Zombie") {
    lat = -33.41532317293113;
    long = -70.6077575689025;
  }

  if (props.data.name === "Matrimonio Tradicional") {
    lat = -33.433141886671564;
    long = -70.63494759321209;
  }

  if (props.data.name === "Matrimonio Campirano") {
    lat = -33.44059090237492;
    long = -70.57306366696584;
  }
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className=" m-2" style={props.styles}>
        <div class="card cardProfile border-info ">
          <img src={props.image} class="card-img-top p-3 rounded" alt="..." style={{height: "250px"}}/>
          <div class="card-body d-flex flex-column">
            <div className="">
              <h3 className="card-title text-center">{props.data.name}</h3>
            </div>
            <p className="text-center p-0 m-0">
              Caminar hacia el altar pisando la fina arena y dar el “Sí, quiero”
              con sabor a sal marina. Esa es una de las opciones que respira más
              libertad. Huye de todo lo establecido y crea tus propias normas en
              tu propia boda.
            </p>
            <div className="p-1 text-left mt-3">
              <Link
                to={
                  `/infoevent?description=` +
                  props.data.description +
                  "&price=" +
                  props.data.price +
                  "&thematic=" +
                  props.data.thematic
                }
                className="">
                <h4>Ver Descripción</h4>
              </Link>
            </div>
            <div className="p-1">
              <div>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="iconoLocation ml-4"
                  onClick={function (e) {
                    location();
                  }}
                />
              </div>
              <div className="">
                <FontAwesomeIcon
                  style={{}}
                  icon={faHeart}
                  className="iconoHeart"
                  onClick={function (event) {
                    Agregarelementos();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// return (
//   <div className="cardProfile w-25 m-2" style={props.styles}>
//     <div class="card border-info">
//       <img
//         src="https://picsum.photos/id/55/700/400"
//         class="card-img-top"
//         alt="..."
//       />
//       <div class="card-body d-flex flex-column justify-content-center align-items-center">
//         <h5 class="card-title text-center mt-1">{props.data.name}</h5>
//         <div className="p-1">
//           <Link
//             to={
//               `/infoevent?description=` +
//               props.data.description +
//               "&price=" +
//               props.data.price +
//               "&thematic=" +
//               props.data.thematic
//             }
//             className="btn btn-primary"
//           >
//             Ver mas
//           </Link>
//         </div>
//         <div className="p-1">
//           <button
//             className="btn btn-primary card-link p-2"
//             onClick={function (event) {
//               Agregarelementos();
//             }}
//           >
//             Agregar a Favoritos
//           </button>
//         </div>

//         <div className="p-1">
//           <Link
//             to={"/Map?long=" + long + "&lat=" + lat}
//             className="btn btn-primary card-link p-2"
//           >
//             Ver en Mapa
//           </Link>
//         </div>
//         <div className="p-1">
//           {isAuth ? (
//             <Link
//               className="btn btn-primary card-link p-2"
//               to={
//                 "/Profile?name=" +
//                 props.data.name +
//                 "&price=" +
//                 props.data.price
//               }
//             >
//               Reservar
//             </Link>
//           ) : (
//             <Link className="btn btn-primary card-link p-2" to={`/Login`}>
//               Reservar{" "}
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default CardAlternativeWedd;
