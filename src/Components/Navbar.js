import React, { useContext } from "react"
import Swal from "sweetalert2";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from '../Store/appContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const icon = <FontAwesomeIcon icon={faTrash} />


function refreshPage(){ 
  window.location.reload(); 
}
function change(){
  localStorage.setItem("isAuth", false)
} 
export const Navbar = () => {
  const history = useHistory();
  const isAuth = JSON.parse(localStorage.getItem("isAuth"))
  const { store, actions } = useContext(Context)

  isAuth ? console.log("N") :  $("#btn1").click(function () {
    Swal.fire({
        title: "Selecciona una opción para ingresar a tu sesión",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Usuario`,
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
    });
})


 
  const Listaelem = store.Lista.map((item, indice) => {
    return <div key={indice}>
      <li className="">
        <span>{item}</span>
        <i className="m-2" onClick={() => {
          actions.removerlista(indice)
        }}>{icon}</i>
      </li>
    </div>
  });

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar">
        <Link className="navbar-brand logoNav text-white" to="/">
          Enjoy Safe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/Mission`}>
                Quienes Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/NewUser`}>
                Registrarme
              </Link>
            </li>
            {/*    <li class="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                Favoritos
              </a>
              <div class="dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <div className="dropdown-item pr-1">{Listaelem}</div>
                <span className ="p-2 length">{Listaelem.length}</span> 
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                </ul>
              </div>
            </li> */}

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favoritos {Listaelem.length}
              </Link>
              <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdown">
                <div className="dropdown-item pr-1">{Listaelem}</div>
              </div>
            </li>

            <div className="" style ={{background:"rgb(31, 133, 31)"}}>
            { !isAuth ? <button id="btn1" data-toggle="button" className="btn btn-outline-success btn"  type="submit" style ={{color:"rgb(245, 245, 245)"}} onClick ={() => localStorage.setItem("isAuth", true)  }>Iniciar Sesión</button> : <Link to={`/`} className="btn btn-alert" onClick={() => { refreshPage(); change();}} type="submit" >
            Cerrar Sesion </Link> }
            </div>

          </ul>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;