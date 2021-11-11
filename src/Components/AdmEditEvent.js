import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { useHistory, Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";

export const AdmEditEvent = () => {

  const { actions, store } = useContext(Context);

  const eventEdit = store.eventEdit;

  const history = useHistory();

  const name = JSON.parse(localStorage.getItem("admEvent"));
  console.log(name) 
  
  let id = eventEdit.event ? eventEdit.event.id : "";
  
  const formik = useFormik({
      initialValues: {
          name: "",
          thematic: "",
          description:  "",
          price: "",
          
        },
        onSubmit: (values) => {
        console.log(values) 
      const eventEdit = {
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          name: values.name,
          thematic: values.thematic,
          description: values.description,
          price: values.price,
        }),
        method: "PUT",
        mode: "no-cors"
      }
      // console.log(eventEdit);
      fetch("http://localhost:8080/admin/edit_event/" +id, eventEdit)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          alert(JSON.stringify(values, null, 2));
          if (typeof data == "object") {
            actions.setEvent(data);
            localStorage.setItem("admEvent", JSON.stringify(data));
            console.log(data);
            Swal.fire("Evento EDITADO con exito");
            // let path = `/`;
            // history.push(path);
          } else {
            Swal.fire(data, { icon: "error" });
          }
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <div className="container">
      <h1 className="card-title text-center mt-4">Editar evento</h1>
      <h2 className="card-subtitle text-center mt-4">
        Modifica los datos del formulario para editar el evento evento
      </h2>
      <div className="row">
        <div className="admNewEvent col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <form className="admNewEventForm text-center mt-5" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Edita el Nombre del Evento</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Ej: Matrimonio, Aniversarios, Cumpleaños"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="thematic">Edita el Nombre de la Thematic</label>
              <input
                type="thematic"
                className="form-control"
                id="thematic"
                name="thematic"
                placeholder="Ej: Halloween, Zombie, Tradicional"
                value={formik.values.thematic}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">
                Edita la Description del Evento
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Ej: Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea."
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Edita el Valor del Evento</label>
              <input
                type="price"
                className="form-control"
                id="price"
                name="price"
                placeholder="Ej: $10000"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-group">
              <button className="botonAdmCancelar btn btn-primary mt-3 ml-5">
                <Link className="text-white" to="/">
                  Cancelar
                </Link>
              </button>
              <button
                type="submit"
                className="botonAdmCreateEvent btn btn-primary mt-3 ml-5"
                onClick={formik.handleSubmit}
              >
                {" "}
                Editar evento
              </button>
            </div>
          </form>
          {}
        </div>
      </div>
    </div>
  );
};

export default AdmEditEvent;
