import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const LoginAdmin = () => {
    const { actions } = useContext(Context);

    const history = useHistory();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Ingrese Email")
            .required("El email es requerido"),
        password: Yup.string()
            .required("No ingreso contraseña")
            .min(8, "contraseña de 8 caracteres minimo")
            .max(20, "Contraseña  de 20 caracteres maximo"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    email: formik.values.email,
                    password: formik.values.password,
                }),
                method: "POST",
            };
            fetch("http://localhost:8080/admin_login", config)
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        Swal.fire(data.success);
                        localStorage.setItem("isAuth", JSON.stringify(true));
                        localStorage.setItem("access_token", JSON.stringify(data.access_token));
                        actions.setAdmin(data);
                        let path = `profileadmin`;
                        history.push(path);
                    } else {
                        Swal.fire(data.msg, { icon: "error " });
                        let path = `loginadmin`;
                        history.push(path);
                    }
                    if (data.msg2) {
                        Swal.fire(data.msg2, { icon: "error " });
                        let path = `loginadmin`;
                        history.push(path);
                    }
                })
                .catch((error) => console.error(error));
        },
    });
    return (
        <div className="container bodyLogin">
            <h1 className="tittle text-center mt-4">BIENVENIDO ADMINISTRADOR</h1>
            <h3 className="subtitle text-center mt-5">Iniciar Sesión</h3>
            <div className="row">
                <div className="boxLogin col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
                    <form className="FormInicioSesion" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Correo Electronico</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contraseña</label>
                            <input
                                type="password"
                                className="form-control w-100"
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password}
                            />
                        </div>
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                ¿Olvidaste la Contraseña?
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="botonIniciarSesion btn btn-primary"
                        >
                            Iniciar Sesión
                        </button>
                        <button className="botonCancelar btn btn-primary">
                            <Link className="text-white" to="/">
                                Volver home
                            </Link>
                        </button>
                    </form>
                    {/* */}
                </div>
            </div>
        </div>
    );
};
export default LoginAdmin;