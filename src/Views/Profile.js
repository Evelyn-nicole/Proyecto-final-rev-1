import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Card from "../Components/Card.js";
import CalendarClient from "../Components/Calendarclient";


export const Profile = () => {

    const [ setUser ] = useState("");
   
  
    useEffect(() => {
    fetch("http://localhost:8080/private", {
      headers: { 
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`
      },
      body: JSON.stringify(""),
      method: "POST",
    }).then((respuesta) => respuesta.json())
    .then((data) => {
      if (data.msg === "Token expired") {
        localStorage.setItem("isAuth", false)
        setUser(data.current_user)
      }
    })
    .catch((error) => console.error(error));
  }, [])
  
  return (
    <div className="m-5 text-center">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <Card />
        </div>
        <div className="contenedorCalendar col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <h1 className="tittleProfile text-center">PLANIFICA TU EVENTO</h1>
          <h2 className="subTittleProfile text-center mt-3">
            Aqui podrás seleccionar los datos de tu evento
          </h2>
          <div className="container">
            <div className="row">
              <div className="calendar col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h5 className="mt-4 text-left">1.- Selecciona la fecha de tu Evento</h5>
                <CalendarClient />
              </div>


              {/* eleccion de horario del evento
              <div className="horario col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h5 className="mt-4">2.- Selecciona el Horario del Evento</h5>
                <div className="form-check mt-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Desde de las 09:00am hasta las 14:00pm.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Desde de las 16:00pm hasta las 21:00pm.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Desde de las 23:00pm hasta las 05:00am.
                  </label>
                </div>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
// col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3

  /* <div className="calendar col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                // <h5 className="mt-4">1.- Selecciona la fecha de tu Evento</h5>
                // <Calendar 
                //   onChange={onChange} 
                //   value={value} 
                //   className="mt-4"/>
              </div> */



  /* <div className="container">
            <div className="row">
              <div className="calendar col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h5 className="mt-4 text-left">1.- Selecciona la fecha de tu Evento</h5>
                
                <Calendar
                  className="calendarBox mt-4" 
                  onChange={setDate} 
                  value={date} 
                  selectRange={true} />
                {date.length > 0 ? (
                  <p className="text-left">
                    <span className="bold">Inicio:</span>{" "}
                    {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className="bold">Termino:</span> {date[1].toDateString()}
                  </p>
                ) : (
                  <p className="text-left">
                    <span className="bold">Fecha seleccionada:</span>{" "}
                    {date.toDateString()}
                  </p>
                )}
              </div> */