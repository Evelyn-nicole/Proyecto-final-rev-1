import React from "react";
import { Link, useHistory  } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";

export const AdmNewEvent = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      thematic: "",
      description: "",
      price: "",
    },
    onSubmit: (values) => {
      const config = {
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          name: values.name,
          thematic: values.thematic,
          description: values.description,
          price: values.price,
        }),
        method: "POST",
      };
      fetch("http://localhost:8080/admin_new_event", config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            Swal.fire(data.success);
            let path = `profileAdmin`;
            history.push(path);
          } else {
            Swal.fire(data.msg1, { icon: "error" });
          }
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <div className="container">
      <h1 className="card-title text-center mt-4">Crear Nuevo Evento</h1>
      <h2 className="card-subtitle text-center mt-4">
        Ingresa los datos al formulario para agregar un nuevo evento
      </h2>
      <div className="mx-auto mt-5">
        <div className="admNewEvent">
          <form className="admNewEventForm mt-5 bg-light h5">
            <div className="form-group mt-5">
              <label htmlFor="name">Nuevo Evento</label>
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
              <label htmlFor="thematic">Nombre de la Thematic</label>
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
              <label htmlFor="description">Description del Evento</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Ej: Fragmento de un escrito con unidad temática."
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Valor del Evento</label>
              <input
                type="price"
                className="form-control"
                id="price"
                name="price"
                placeholder="Ej: 200000"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="float-right mt-5 mr-5">
              <button className="botonAdmCancelar btn btn-primary mr-3">
                <Link className="text-white" to="/">
                  Cancelar
                </Link>
              </button>
              <button
                type="submit"
                className="botonAdmCreateEvent btn btn-primary mr-4"
                onClick={formik.handleSubmit}
              >
                {" "}
                Crear Evento
              </button>
            </div>
          </form>
          {}
        </div>
      </div>
    </div>
  );
};

export default AdmNewEvent;
