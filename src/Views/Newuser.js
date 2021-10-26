import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

export const NewUser = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      changepassword: "",
      terms: false,
    },
    validationSchema: Yup.object().shape({
      terms: Yup.bool().oneOf(
        [true],
        "Debe Aceptar los terminos y condiciones"
      ),
      name: Yup.string()
        .required("Debe ingresar su Nombre")
        .min(4, "muy corta")
        .max(20, "muy larga"),
      email: Yup.string()
        .email("Ingrese Email Valido")
        .required("El email es requerido"),
      phone: Yup.string()
        .required("Debe ingresar un numero valido")
        .matches(phonereg, "Se requiere un numero valido"),
      password: Yup.string()
        .required("No ingreso contraseña")
        .min(8, "contraseña de 8 caracteres minimo")
        .max(20, "Contraseña  de 20 caracteres maximo")
        .matches(lowercaseRegex, "se requiere al menos una minúscula")
        .matches(uppercaseRegex, "se requiere al menos una mayúscula")
        .matches(numericRegex, "se requiere al menos un número"),
      changepassword: Yup.string()
        .required("No ingreso contraseña")
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Ambas contraseñas deben ser iguales"
          ),
        }),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      const config = {
        headers: { 
          "Content-Type": "Application/json",
          'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          changepassword: values.changepassword,
        }),
        method: "POST",
        // mode: "no-cors",
      };
      fetch("http://localhost:8080/newUser", config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          alert(JSON.stringify(values, null, 2));
          console.log(data);
          if (typeof data == "object") {
            Swal.fire("Usuario creado con Exito ");
          } else {
            Swal.fire(data, { icon: "error" });
          }
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <div className="container">
      <h1 className="card-title text-center mt-4">Crear Nuevo Usuario</h1>
      <h2 className="card-subtitle text-center mt-2">
        Ingresa tus datos para crear un nuevo usuario
      </h2>
      <div className="row">
        <div className="newUser col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <form className="UserForm">
            <div className="form-group ">
              <label for="exampleInputEmail1">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Ej: Juanito Perez"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
              <small id="emailHelp" class="form-text text-muted">
                Nombre y Apellido ej: Juanito Perez
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Correo Electronico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ej: juanito@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <small id="emailHelp" class="form-text text-muted">
                Correo electronico debe contener @ ej: juanito@gmail.com
              </small>
            </div>
            <div className="form-group">
              <label for="phone">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="958731937"
                value={formik.values.phone}
                onChange={formik.handleChange}
                required
              />
              <div class="invalid-tooltip">Please provide a valid Number.</div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger">{formik.errors.phone}</div>
              ) : null}
              <small id="emailHelp" class="form-text text-muted">
                Telefono debe contener +569 ej: +569 58731937
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Secpassword123"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
              <small id="emailHelp" class="form-text text-muted">
                Contraseña de 8 a 20 caracteres - mayusculas - numeros ej:
                Secpassword123
              </small>
            </div>
            <div className="form-group">
              <label for="confirmpassword">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="changepassword"
                name="changepassword"
                placeholder="Secpassword123"
                value={formik.values.changepassword}
                onChange={formik.handleChange}
                error={formik.touched.changepassword}
              />
              {formik.touched.changepassword && formik.errors.changepassword ? (
                <div className="text-danger">
                  {formik.errors.changepassword}
                </div>
              ) : null}
              <small id="emailHelp" class="form-text text-muted">
                Correo electronico debe coincidir
              </small>
            </div>
            <div className="form-group">
              <div className="checkbox">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                  required
                />
                <label htmlFor="terms">Acepto los terminos y condiciones</label>
                {formik.touched.terms && formik.errors.terms ? (
                  <div className="text-danger">{formik.errors.terms}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <button className="botonVolverHome btn btn-primary mt-3 ml-5">
                <Link className="text-white" to="/">
                  Volver home
                </Link>
              </button>
              <button
                type="submit"
                className="botonCrearUsuario btn btn-primary mt-3 ml-5"
                onClick={formik.handleSubmit}
              >
                {" "}
                Crear Usuario
              </button>
            </div>
          </form>
          {}
        </div>
      </div>
    </div>
  );
};
export default NewUser;
