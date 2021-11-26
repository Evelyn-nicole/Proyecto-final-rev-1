import React, { useEffect, useState, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import Card from "../Components/Card.js";
import CalendarClient from "../Components/Calendarclient";
import { Link } from 'react-router-dom';
import { Context } from '../Store/appContext';
import { useLocation } from 'react-router-dom';
function useQuery () {
  return new URLSearchParams(useLocation().search)
} 

const Profile = (props) => {
  const [val, setIsChecked] = useState();
  const getValue = (event) => {
    setIsChecked(event.target.value)
  }

  let time = val

  function check(e) {
    if(date ==="" || name ==="" || date ==="" || !time) {
      alert("Faltan elementos por confirmar")
      e.preventDefault()
    }
   }

   console.log(time)
   const form =
   <div>
       <div class="form-check">
         <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Horario Mañana: 10:00am - 14:00pm"onChange= {getValue}/> 
         <label class="form-check-label" for="exampleRadios1">
           Horario Mañana: 10:00am - 14:00pm
         </label>
       </div>
       <div class="form-check">
         <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Horario Tarde: 15:00pm - 19:00pm" onChange= {getValue} />
         <label class="form-check-label" for="exampleRadios2">
           Horario Tarde: 15:00pm - 19:00pm
         </label>
       </div>
       <div class="form-check">
         <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Horario Noche: 20:00pm - 02:00am" onChange= {getValue}/>
         <label class="form-check-label" for="exampleRadios3">
           Horario Noche: 20:00pm - 02:00am
         </label>
       </div>
   </div>

  const query = useQuery()
  const { store, actions } = useContext(Context)
  let name = query.get("name")
  let price = query.get("price")

  let date = store.fechas
  const [ user, setUser ] = useState("");
    useEffect(() => {
    fetch("http://localhost:8080/private", {
      headers: { 
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': `Bearer + ${JSON.parse(localStorage.getItem("access_token"))}`
      },
      body: JSON.stringify(""),
      method: "POST",
    }).then((respuesta) => respuesta.json())
    .then((data) => {
      if (data.msg === "Token expired") {
        localStorage.setItem("isAuth", false)
      }
      setUser(data.current_user)
      
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
                <CalendarClient name = {name} price = {price} />  
                <div className="mt-3 text-left">
                  <h6>Selecciona el horario de tu evento</h6>
                  {form}
                </div>
              </div>
            
                {/* eleccion de horario del evento */}
              <div className="mt-3 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
             {/*    <form>
                    <h5 className="mt-4">2.- Selecciona el tipo de evento</h5>
                    <div className="form-check mt-4" onChange ={Radioevent}>
                      <input className="form-check-input" type="radio" value="Fiesta de Cumpleaños" name="Eleccionfiesta"/>Fiesta de Cumpleaños
                    </div>
                    <div className="form-check mt-4" onChange ={Radioevent}>
                      <input className="form-check-input" type="radio" value="Fiesta Zombie" name="Eleccionfiesta"/>Fiesta Zombie
                    </div>
                    <div className="form-check mt-4" onChange ={Radioevent}>
                      <input className="form-check-input" type="radio" value="Fiesta electronica" name="Eleccionfiesta"/>Fiesta Electronica
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Enviar Informacion</button>
                  </form> */}
                  <h5 className="text-left mt-2">2.-Elementos reservados</h5>
                  <div className="card" style={{width: "18rem"}}>
                    <div className="card-header"> Resumen de tu Evento</div>
                      <p>Nombre del evento: {name}</p> 
                      <p>Precio: {price}</p>
                      <p>Fecha seleccionada: {date}</p> 
                      <p>Horario Seleccionado: {time}</p> 

                      <Link to={"/Pago?name=" + name + "&price=" + price + "&date=" + date + "&time=" + time} className ="btn btn-success" onClick ={check}>
                    Reservar
                    </Link>
               
  
                  </div>
              </div>
    
             
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

