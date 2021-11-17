import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const Login = () => {
  const { actions } = useContext(Context);

  const history = useHistory();

  /* Swal.fire({
    title: "Selecciona una opción para ingresar a tu sesión",
    showDenyButton: true,
    showConfirmButton: true,
    confirmButtonText: "Clientes",
    denyButtonText: `Admin`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Login Usuario!", "", "success");
      let path = `login`;
      history.push(path);
    } else if (result.isDenied) {
      Swal.fire("Login Administrador", "", "success");
      let path = `loginadmin`;
      history.push(path);
    }
  }); */
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
          if (data.msg2){
            Swal.fire(data.msg2, { icon: "error " });
            let path = `login`;
            history.push(path);
          }
        })
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="container bodyLogin mb-3">
      <h1 className="tittle text-center mt-4">¡BIENVENIDO A ENJOY SAFE!</h1>
      <h3 className="subtitle text-center mt-5">Iniciar Sesión</h3>
      <div className="row">
          <form className="FormInicioSesion col-7" onSubmit={formik.handleSubmit}>
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
              className="botonIniciarSesion btn btn-primary">
              Iniciar Sesión
            </button>
            <button className="botonCancelar btn btn-primary">
              <Link className="text-white" to="/">
                Volver home
              </Link>
            </button>
          </form>
          <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Si no estas registrado haz click abajo para crear tu Usuario</h5>
              <div className ="d-flex justify-content-center">
                <Link to={`/newUser`} className="btn btn-primary ">Crear Usuario</Link>
              </div>
              
            </div>
          </div>
       
        </div>
        {/* */}
      </div>

      <div>

      </div>
    </div>

  );
};

export default Login;