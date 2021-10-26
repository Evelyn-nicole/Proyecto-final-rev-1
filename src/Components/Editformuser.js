import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Store/appContext";
<<<<<<< HEAD
=======
import { useHistory, Link } from "react-router-dom";
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";

<<<<<<< HEAD

=======
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

export const EditFormUser = () => {
<<<<<<< HEAD

    const [newPasword, setNewPasword] = useState(false);
    const [newComfirmPassword, setNewConfirmPassword] = useState(false);

    const { actions, store } = useContext(Context);



    const userProfile = store.profileUser;


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
                .min(4, "Short")
                .max(20, "Long"),
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
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                    changepassword: values.changepassword,
                }),
                method: "POST",
            };
            fetch("http://localhost:8080/newUser", config)
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    actions.setProfile(data);
                    localStorage.setItem("userLogin", JSON.stringify(data));
                    console.log(data);
                    Swal.fire("perfil editado con exito");




                    //   alert(JSON.stringify(values, null, 2));
                    //   if (typeof data == "object") {
                    //   } else {
                    //     Swal.fire(data, { icon: "error" });
                    //   }
                })
                .catch((error) => console.error(error));
        },
    });
    return (
        <div className="container">
            <h1 className="card-title text-center mt-4">Crear Nuevo Usuario</h1>
            <h2 className="card-subtitle text-center mt-2">Ingresa tus datos para crear un nuevo usuario</h2>
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
                                placeholder="+569 58731937"
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
                                Contraseña de 8 a 20 caracteres - mayusculas - numeros ej: Secpassword123
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
                                <div className="text-danger">{formik.errors.changepassword}</div>
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
                            <button
                                type="submit"
                                className="botonIniciarSesion btn btn-primary w-25"
                                onClick={formik.handleSubmit}
                            >
                                {" "}
                                Crear Usuario
                            </button>
                        </div>
                    </form>
                    { }
                </div>
            </div>
        </div>
    );
};
export default EditFormUser;
=======
  const [newPasword, setNewPasword] = useState(false);
  const [newComfirmPassword, setNewConfirmPassword] = useState(false);

  const { actions, store } = useContext(Context);

  const userProfile = store.userProfile;

  const history = useHistory();

  const name = JSON.parse(localStorage.getItem("userLogin"));

  let id = userProfile.user ? userProfile.user.id : "";
  let token = userProfile.access_token ? userProfile.access_token : '';

  const formik = useFormik({
    initialValues: {
      name: name.user ? name.user.name : "",
      email: name.user ? name.user.email : "",
      phone: name.user ? name.user.phone : "",
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
      console.log(JSON.stringify(values, null, 2));
      console.log(`Bearer ${JSON.parse(localStorage.getItem("access_token"))}`)
      const userProfile = {
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer " + JSON.parse(localStorage.getItem("access_token"))
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          changepassword: values.changepassword,
        }),
        method: "PUT",
        // mode: "cors",
      };
      fetch("http://localhost:8080/edituser/" +id, userProfile)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          if (data.msg === "Token expired") {
            actions.setProfile(data);
            localStorage.setItem("userLogin", JSON.stringify(data));
            localStorage.getItem("isAuth", false)
            console.log(data);
            Swal.fire("tu perfil se ha cambiado con exito");
            let path = `login`;
            history.push(path);
          }
        })
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="newUser col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
          <form className="UserForm" onSubmit={formik.handleSubmit}>
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
                Telefono debe contener 9 ej: 958731937
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="********"
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
                placeholder="*********"
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
                <label className="ml-2" htmlFor="terms">
                  {" "}
                  Confimar actualización de los datos
                </label>
                {formik.touched.terms && formik.errors.terms ? (
                  <div className="text-danger">{formik.errors.terms}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <button className="botonVolver btn btn-primary mt-3 ml-5">
                <Link className="text-white" to="/">
                  Cancelar
                </Link>
              </button>
              <button
                type="submit"
                className="botonActualizar btn btn-primary mt-3 ml-5"
              >
                {" "}
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
export default EditFormUser;
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
