import React from "react";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import Card from "../Components/Card";
import Swal from "sweetalert2";
import $ from "jquery";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Pago = () => {
  const query = useQuery();
  const history = useHistory();
  
  $("#btn3").click(function () {
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        
      },
      
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });


  return (
    <div className="container">
      <div className="row justify-content-center mx-auto">
      <h1 className="text-center mt-5 text-white textoHome">Pagar Reservación del evento</h1>
        <div
          className="card"
          style={{ width: "40rem", background: "rgb(165, 157, 47)" }}
        >
          <div className="card-header textoNav text-center" style={{ color: "white" }}>
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
              id="btn3"
              data-toggle="button"
              className="btn btn-lg text-white textoHome"
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
