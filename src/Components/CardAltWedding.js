import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Store/appContext';


export const CardAlternativeWedd = (props) => {
    const { actions } = useContext(Context)

    const Agregarelementos = () => {
        const nombre = props.data.name
        actions.getLista(nombre)
    }
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))
    const Reservarelem = () => {
        const nombres = props.data.name
        const precio = props.data.price
        actions.Reservarelem(nombres, precio)
    }

    let lat = 0
    let long = 0
    if (props.data.name === "Matrimonio Hermoso") {
        lat = -33.387717713241614
        long = -70.54551201587743
    }
    if (props.data.name === "Matrimonio Zombie") {
        lat = -33.41532317293113
        long = -70.6077575689025
    }

    if (props.data.name === "Matrimonio Tradicional") {
        lat = -33.433141886671564
        long = -70.63494759321209
    }

    if (props.data.name === "Matrimonio Editadora") {
        lat = -33.44059090237492
        long = -70.57306366696584
    }
    return (
        <div className="cardProfile w-25 m-2" style={props.styles}>
            <div class="card border-info">
                <img src="https://picsum.photos/id/55/700/400" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">{props.data.name}</h5>
                </div>
                <div class="card-body">

                   {isAuth ? <Link className="btn btn-primary card-link" to={"/Profile?name=" + props.data.name + "&price=" + props.data.price}>Reservar</Link> : <Link className="btn btn-primary card-link" to={`/Login`}>Reservar</Link>} 
                    
                    <Link to={`/infoevent?description=` + props.data.description + "&price=" + props.data.price + "&thematic=" + props.data.thematic} className="btn btn-primary ml-5 mb-2">
                        Ver mas
                    </Link>

                    <button className="btn btn-primary ml-5 card-link" onClick={function (event) { Agregarelementos(); Reservarelem() }}>Agregar a Favoritos</button>

                    <Link to={"/Map?long=" + long + "&lat=" + lat}
                        className="btn btn-primary ml-5 card-link mt-2">Ver en Mapa</Link>
                </div>
            </div>
        </div>
    )
}
export default CardAlternativeWedd;