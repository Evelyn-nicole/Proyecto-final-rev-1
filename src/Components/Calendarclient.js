import React, { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Swal from "sweetalert2";

export const CalendarClient = () => {

  const [date, setDate] = useState(new Date());

  const { store, actions } = useContext(Context);
  console.log(store);


  const reservationDate = () => {

      const config = {
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          date: date,
          user: store.userProfile.user.name,
        }),
        method:"POST",
        mode: 'no-cors'
      };
      fetch("http://localhost:8080/availability", config)
      .then((respuesta) => respuesta.json())
      .then((date) => {
        console.log(date);
        if(typeof date == "object"){
          Swal.fire("Haz seleccionado la fecha");
          actions.setCalendar(date);
        } else {
          Swal.fire(date, { icon: "error "});
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="calendarClient mt-4">
      <Calendar
        className="calendarBox mt-4"
        // onChange={setDate}
        minDate={new Date()} 
        value={date}
        selected={store.startDate}
        onChange={(date) => actions.setCalendar(date)}
        onClickDay={(value, event) =>
          alert(`Esta es tu fecha seleccionada ${value}`)
        }
      />
      {date.length > 0 ? (
        <p className="text-left">
          <span className="bold">Inicio:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
        </p>
      ) : (
        <p className="text-left">
          <span className="bold">Fecha seleccionada:</span>{" "}
          {date.toDateString()}
        </p>
      )}
      <div>
        <button 
          onClick={reservationDate}
          className="botonReservation btn btn-danger mt-2">
          reservar dia
        </button>
      </div>
    </div>
  );
};
export default CalendarClient;
