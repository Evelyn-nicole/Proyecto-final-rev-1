import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { useHistory, Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";


const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;


export const EditAdminUser = () => {

  const { actions, store } = useContext(Context);

  const userAdmin = store.userAdmin;

  const history = useHistory();

  const name =
    localStorage.getItem("userAdmin") == null ? {} : JSON.parse(localStorage.getItem("userAdmin"));
  
  let id = userAdmin.superadmin ? userAdmin.superadmin.id : "";
  let token = userAdmin.access_token ? userAdmin.access_token : "";


  const formik = useFormik({
    initialValues: {
      name: name.superadmin ? name.superadmin.name : "",
      email: name.superadmin ? name.superadmin.email : "",
      phone: name.superadmin ? name.superadmin.phone : "",
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
        .min(4, "muy corto")
        .max(20, "muy largo"),
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
      const config = {
        headers: {
          "Content-Type": "application/json",
        //   Authorization:
        //     "Bearer " + JSON.parse(localStorage.getItem("access_token")),
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          changepassword: values.changepassword,
        }),
        method: "PUT",
        
      };
      fetch("http://localhost:8080/admin_edit_user/" + id, config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          if (data.msg === "Token expired") {
            actions.setAdmin(data);
            localStorage.getItem("isAuth", false);
            console.log(data);
          } else {
            Swal.fire(data.success);
            let path = `loginadmin`;
            history.push(path);
          }
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <div className="container">
      <div className="mx-auto mt-5">
        <h1 className="card-title text-center mt-4">Modificar Administrador </h1>
        <h2 className="card-subtitle text-center mt-2">Ingresa los datos que quieras modificar</h2>
        <div className="FormInicioSesion2 bg-light mt-5">
          <form className="UserForm" onSubmit={formik.handleSubmit}>
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">Nombre y Apellido</label>
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
              <small id="emailHelp" className="form-text text-muted">
                Nombre y Apellido ej: Juanito Perez
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Correo Electronico</label>
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
                Correo electronico debe contener @ ej: admin@admin.com
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefono</label>
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
                Telefono debe contener 9 ej: 958731937
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="****"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
              <small id="emailHelp" class="form-text text-muted">
                Contraseña de 8 a 20 caracteres - mayusculas - numeros ej:
                Admin1234
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="changepassword"
                name="changepassword"
                placeholder="***"
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
                Contraseñas deben coincidir
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
                <label className="ml-2" htmlFor="terms">
                  {" "}
                  Confimar actualización de los datos
                </label>
                {formik.touched.terms && formik.errors.terms ? (
                  <div className="text-danger">{formik.errors.terms}</div>
                ) : null}
              </div>
            </div>
            <div className="float-right mr-5">
              <button className="botonVolver btn btn-primary mr-3">
                <Link className="text-white" to="/">
                  Cancelar
                </Link>
              </button>
              <button
                type="submit"
                className="botonActualizar btn btn-primary mr-4"
              >
                {""}
                Actualizar
              </button>
            </div>
          </form>
          {}
        </div>
      </div>
    </div>
  );
};
export default EditAdminUser;
