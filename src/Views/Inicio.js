import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from "yup";
import Swal from "sweetalert2";

const Firstpage = () => {
    const { actions } = useContext(Context);

    const history = useHistory();
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Ingrese Email")
            .required("El email es requerido"),
        password: Yup.string()
            .required("No ingreso contraseña")
            .min(8, "contraseña de 5 caracteres minimo")
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
                    'Content-Type': 'Application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    email: formik.values.email,
                    password: formik.values.password,
                }),
                method: "POST",

            };
            fetch("http://localhost:8080/login", config)
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    console.log(data);
                    if (data.msg === "Bienvenido a tu perfil") {
                        localStorage.setItem("isAuth", JSON.stringify(true));
                        localStorage.setItem("access_token", JSON.stringify(data.access_token));
                        actions.setProfile(data);
                        let path = `/`;
                        history.push(path);
                    } else {
                        Swal.fire(data.msg, { icon: "error " });
                        let path = `newuser`;
                        history.push(path);
                    }
                    if (data.msg2) {
                        Swal.fire(data.msg2, { icon: "error " });
                        let path = `login`;
                        history.push(path);
                    }
                })
                .catch((error) => console.error(error));
        },
    });


    return (
        <div className="m-0" style={{ background: "rgb(114, 105, 248)", height: "100vh" }}>
            <div className="m-auto">
                <h1 className="text-center">Hello</h1>
                <div className="container m-auto" >
                    <form className="FormInicioSesion mx-auto" onSubmit={formik.handleSubmit} style={{ background: "rgb(248, 126, 105)", width:"50%" }}>
                    <h5 className ="text-center mt-3">Iniciar Sesion</h5>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Correo Electronico</label>
                        <input
                            type="text"
                            style ={{width:"80%"}}
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
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                style ={{width:"80%"}}
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
                            <label className="form-check-label" for="exampleCheck1">
                                ¿Olvidaste la Contraseña?
                            </label>
                        </div>

                        <div className ="d-flex justify-content-end p-2 w-75">
                            <button
                                type="submit"
                                className=" btn btn-primary m-1">
                                Iniciar Sesión
                            </button>
                            <button className="btn btn-primary m-1">
                                <Link className="text-white" to="/">
                                    Entrar como invitado
                                </Link>
                            </button> 
                        </div>

                    </form>
                    {/* */}
                </div>
            </div>
        </div>
    )

}

export default Firstpage