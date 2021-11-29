import React from "react";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Pago = () => {
  const query = useQuery();
  

  return (
    <div className="d-flex" style={{ background: "rgb(219, 218, 199)" }}>
      {/* <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <Card />
      </div> */}

      <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex flex-column justify-content-center mx-auto">
        <div
          className="card"
          style={{ width: "18rem", background: "rgb(165, 157, 47)" }}
        >
          <div className="card-header" style={{ color: "white" }}>
            Resumen de la reserva
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Nombre del Evento: {query.get("name")}
            </li>
            <li className="list-group-item">
              Valor a Pagar: {query.get("price")}
            </li>
            <li className="list-group-item">
              Fecha del Evento: {query.get("date")}
            </li>
            <button
              id="button"
              data-toggle="button"
              className="btn btn-lg"
              onClick={Pago}
            >
              Pagar
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pago;
