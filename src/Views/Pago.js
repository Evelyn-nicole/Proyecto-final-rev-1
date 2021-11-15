import React from "react";
import Card from "../Components/Card";
import { useLocation } from 'react-router-dom';
import Swal from "sweetalert2";
import $ from "jquery";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const Pago = () => {
    const query = useQuery()
    $("#btn2").click(function () {
        let timerInterval
        Swal.fire({
            title: 'Redirigiendo a Mercado Pago...',
            html: 'Cargando en ... <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    });
    return (
        <div className="d-flex">
            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <Card />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex flex-column" >
                {query.get("name")}
                {query.get("price")}
                {query.get("date")}
                <div className="col-lg-3">
                    <button id="btn2" data-toggle="button" className="btn btn-outline-danger btn-lg">
                        Pagar
                    </button>
                </div>
            </div>

        </div>
    )

}

export default Pago