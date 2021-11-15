import React, { useEffect, useState, useContext } from "react";
import CardAdmin from "../Components/CardAdmin";
import { Link } from 'react-router-dom';
const Profileadmin = () => {
    return (
        <div className="d-flex">
            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <CardAdmin />
            </div>
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body text-center">
                        <h5 className="card-title">Acciones de Administrador</h5>
                        <div className ="d-flex flex-column text-center">
                            <Link to={`/AdmNewEvent`} className="card-link">Crear Nuevo Evento</Link>
                            <Link to={`/editadminuser`} className="card-link m-0">Editar Administrador</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Profileadmin