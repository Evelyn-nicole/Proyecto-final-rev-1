import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";

export const AdmNewEvent = () => {
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
                    alert(JSON.stringify(values, null, 2));
                    console.log(data);
                    if (typeof data == "object") {
                        Swal.fire("Evento agregado con exito");
                    } else {
                        Swal.fire(data, { icon: "error" });
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
            <div className="row">
                <div className="admNewEvent col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
                    <form className="admNewEventForm text-center mt-5">
                        <div className="form-group">
                            <label htmlFor="name">Ingresa el Nombre del Nuevo Evento</label>
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
                            <label htmlFor="thematic">Ingresa el Nombre de la Thematic</label>
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
                                Agrega la Description del Evento
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
                            <label htmlFor="price">Ingresa el Valor del Evento</label>
                            <input
                                type="price"
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder="Ej: $10.000"
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
                                Crear Evento
                            </button>
                        </div>
                    </form>
                    { }
                </div>
            </div>
        </div>
    );
};

export default AdmNewEvent;