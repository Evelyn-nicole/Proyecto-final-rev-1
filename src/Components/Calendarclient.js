import React, { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Swal from "sweetalert2";



export const CalendarClient = ({name, price}) => {

  const [date, setDate] = useState(new Date());
  
  const { store, actions } = useContext(Context);
  
  const userProfile = store.userProfile;
  
  let id = userProfile.user ? userProfile.user.id : "";

 
  const fecha = [ store.startDate.getDate(), store.startDate.getMonth(), store.startDate.getFullYear()]
  
  const fechaFinal = `${fecha[2]}-${fecha[1] + 1}-${fecha[0]}`
  console.log(fechaFinal)


  const reservationDate = () => {
    const config = {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: fechaFinal,
        user_id: userProfile.user.id,
        name: name,
        price: price
      }),
      method: "POST",
    }
    
    fetch("http://localhost:8080/availability", config)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          Swal.fire(data.success);
          JSON.parse(localStorage.getItem('userLogin'))
        } else {
          Swal.fire(data.msg, { icon: "error " });
        }
        setDate(date);
      }).catch((error) => console.error(error));
  };

  return (
    <div className="calendarClient mt-4">
      <Calendar
        className="calendarBox mt-4"
        minDate={new Date()}
        value={date}
        selected={store.startDate}
        onChange={(date) => actions.setCalendar(date)}
        onClickDay={(value) => alert(`Esta es tu fecha seleccionada ${value}`)}
      />
      {date.length > 0 ? (
        <p className="text-left">
          <span className="bold">Inicio:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
        </p>
      ) : (
        <p className="text-left">
          <span className="bold">Fecha seleccionada:</span>{" "}
          {store.startDate.toDateString()}
        </p>
      )}
      <div>
        <button
          onClick={reservationDate}
          className="botonReservation btn btn-danger mt-2">
          Reservar dia
        </button>
      </div>
    </div>
  );
};
export default CalendarClient;