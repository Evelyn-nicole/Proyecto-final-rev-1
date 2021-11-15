import React, { useEffect, useState, useContext } from "react";
import CardZombieWedd from "../Components/CardZombieWedding"
import CardAlternativeWedd from "../Components/CardAltWedding"
import { Context } from '../Store/appContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import $ from "jquery";
import Popper from "popper.js";
import { useHistory } from "react-router-dom";
import userPhoto from "../assets/userPhoto.png";
const icon = <FontAwesomeIcon icon={faCalendar} />
const wallet = <FontAwesomeIcon icon={faWallet} />
const s = <FontAwesomeIcon icon={faClipboardCheck} />
const a = <FontAwesomeIcon icon={faBiohazard} />
const aD = <FontAwesomeIcon icon={faNetworkWired} />
const quote = <FontAwesomeIcon icon={faQuoteLeft} />


export const Home = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.setInfo()
    }, [])
    const history = useHistory();
    $("#btn1").click(function () {
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
    return (
        <div>
            <div>
                <h1>EVENTOS OFRECIDOS</h1>
                <div className="col-lg-3">
                    <button id="btn1" data-toggle="button" className="btn btn-outline-success btn-lg">
                        Iniciar Sesión
                    </button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col d-flex">
                            {store.event.map((evento, i) => <CardAlternativeWedd data={evento} key={i} indice={i} />)}
                        </div>
                    </div>
                </div>
             
            </div>

            <div style={{ background: "rgb(236, 236, 236)" }} className="p-4">
                <h2 className="text-center pb-5"> Beneficios Ofrecidos </h2>
                <div className="row container-fluid d-flex justify-content-around text-center">
                    <div className="col-2">
                        <span style={{ color: "rgb(128, 211, 120)", fontSize: "24px" }}>{icon}</span>
                        <p>Agendar Eventos a eleccion</p>
                    </div>
                    <div className="col-2">
                        <span style={{ color: "rgb(128, 211, 120)", fontSize: "24px" }}>{wallet}</span>
                        <p>Precios Accesibles</p>
                    </div>
                    <div className="col-2">
                        <span style={{ color: "rgb(128, 211, 120)", fontSize: "24px" }}>{s}</span>
                        <p>Personalizar a su medida </p>
                    </div>
                    <div className="col-2">
                        <span style={{ color: "rgb(128, 211, 120)", fontSize: "24px" }}>{a}</span>
                        <p>Asegurar cumplimiento de Normativa COVID</p>
                    </div>
                    <div className="col-2">
                        <span style={{ color: "rgb(128, 211, 120)", fontSize: "24px" }}>{aD}</span>
                        <p>Integracion entre cliente/proveedor </p>
                    </div>
                </div>
            </div>

            <h2 className="text-center mt-3 mb-3">Lo que dicen de nosotros</h2>
            <div className="row container-fluid">

                <div className="col-4 d-flex">
                    <div>
                        <span>{quote}</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                        <div className="d-flex flex-column">
                            <small style={{ color: "black", fontWeight: "800" }}>Nombre de la persona</small>
                            <small>Evento realizado</small>
                        </div>

                    </div>
                    <div className="m-3">
                        <img classname="card-img-top1" src={userPhoto} style={{ height: "50px", width: "50px" }} />
                    </div>
                </div>
                <div className="col-4 d-flex">
                    <div>
                        <span>{quote}</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                        <div className="d-flex flex-column">
                            <small style={{ color: "black", fontWeight: "800" }}>Nombre de la persona</small>
                            <small>Evento realizado</small>
                        </div>
                    </div>
                    <div className="m-3">
                        <img classname="card-img-top1" src={userPhoto} style={{ height: "50px", width: "50px" }} />
                    </div>
                </div>
                <div className="col-4 d-flex">
                    <div>
                        <span>{quote}</span>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                        <div className="d-flex flex-column">
                            <small style={{ color: "black", fontWeight: "800" }}>Nombre de la persona</small>
                            <small>Evento realizado</small>
                        </div>
                    </div>

                    <div className="m-3">
                        <img classname="card-img-top1" src={userPhoto} style={{ height: "50px", width: "50px" }} />
                    </div>
                </div>
            </div>



        </div>


    );
};

export default Home;