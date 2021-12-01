// import React, { useEffect, useState, useContext } from "react";
// import { Context } from "../Store/appContext";
// import { useLocation } from "react-router-dom";
// import "react-calendar/dist/Calendar.css";
// import Card from "../Components/Card.js";
// import CalendarClient from "../Components/Calendarclient.js";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export const Profile = () => {
//   const query = useQuery();
//   const { store, actions } = useContext(Context);
//   const name = query.get("name");
//   const price = query.get("price");
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8080/private", {
//       headers: {
//         "Content-Type": "Application/json",
//         "Access-Control-Allow-Origin": "*",
//         Authorization: `Bearer ${JSON.parse(
//           localStorage.getItem("access_token")
//         )}`,
//       },
//       body: JSON.stringify(""),
//       method: "POST",
//     })
//       .then((respuesta) => respuesta.json())
//       .then((data) => {
//         if (data.msg === "Token expired") {
//           localStorage.setItem("isAuth", false);
//           setUser(data.current_user);
//         }
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="m-5 text-center">
//       <div className="row">
//         <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
//           <Card />
//         </div>
//         <div className="contenedorCalendar col-sm-12 col-md-12 col-lg-8 col-xl-8">
//           <h1 className="tittleProfile text-center">PLANIFICA TU EVENTO</h1>
//           <h2 className="subTittleProfile text-center mt-3">
//             Aqui podrás seleccionar los datos de tu evento
//           </h2>
//           <div className="container">
//             <div className="row">
//               <div className="calendar col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
//                 <h5 className="mt-4 text-left">
//                   1.- Selecciona la fecha de tu Evento
//                 </h5>
//                 <CalendarClient name={name} price={price} />
//               </div>
//               <div className="mt-3 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
//                 <h5 className="text-left mt-2">2.-Elementos reservados</h5>
//                 <div className="card" style={{ width: "18rem" }}>
//                   <div className="card-header"> Reservas</div>
//                   <p>{query.get("name")}</p>
//                   <p>{query.get("price")}</p>
//                   <p> Fecha </p>
//                   <button>Reservar</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// // col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
import React, { useEffect, useState, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import Card from "../Components/Card.js";
import CalendarClient from "../Components/Calendarclient";
import { Link } from "react-router-dom";
import { Context } from "../Store/appContext";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Profile = (props) => {
  const { store } = useContext(Context);
  const [ setUser] = useState("");
  
  const query = useQuery();
  let name = query.get("name");
  let price = query.get("price");
  let date = store.fechas

  useEffect(() => {
    fetch("http://localhost:8080/private", {
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer + ${JSON.parse(
          localStorage.getItem("access_token")
        )}`,
      },
      body: JSON.stringify(""),
      method: "POST",
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data.msg === "Token expired") {
          localStorage.setItem("isAuth", false);
        }
        setUser(data.current_user);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-fluid px-5" >
      <h1 className="tituloLogin text-center mt-4">PLANIFICA TU EVENTO</h1>
      <h2 className="subtituloLogin text-center mt-5">
        Aqui podrás seleccionar la fecha de tu Evento
      </h2>
      <div className="row mt-5 text-center ">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div className="card cardProfile">
            <div className="card-header h4">
              Calendario de Eventos
            </div>
            <h6 className="text-center mt-5">Aqui podrás seleccionar la fecha en que deseas que se realice tu evento previamente seleccionado</h6>
            <div className="card-body">
              <CalendarClient name={name} price={price} />
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div className="card cardProfile">
            <div className="card-header h4">Elementos reservados</div>
            <h6 className="text-center mt-5">Aqui puedes ver el resumen de el evento y fecha que seleccionaste</h6>
            <div className="cardReservar">
            <p className="text-left ml-3 mt-2"> Nombre del evento: {query.get("name")}</p>
            <p className="text-left ml-3"> Fecha seleccionada: {date}</p>
            <p className="text-left ml-3"> Precio: {query.get("price")}</p>
            </div>
            <div>
            <Link
              to={"/Pago?name=" + name + "&price=" + price + "&date=" + date}
              className="btn btn-success mt-4 mb-3"
            >
              Reservar
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
