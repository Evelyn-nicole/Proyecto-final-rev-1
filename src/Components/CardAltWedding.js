import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Store/appContext';


export const CardAlternativeWedd = (props) => {
    const { actions } = useContext(Context)
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))

    const Agregarelementos = () => {
        const nombre = props.data.name
        isAuth ? actions.getLista(nombre) : alert("Debe iniciar sesion para agregar eventos a favoritos")

    }

    let lat = 0
    let long = 0
    if (props.data.name === "Matrimonio Hippie") {
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

    if (props.data.name === "Matrimonio Campirano") {
        lat = -33.44059090237492
        long = -70.57306366696584
    }
    return (
        <div className ="w-25">
            <div className="cardProfile m-2" style={props.styles}>
                <div class="card border-info">
                    <img src={props.image} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-center mt-1">{props.data.name}</h5>
                        <div className="p-1">
                            <Link to={`/infoevent?description=` + props.data.description + "&price=" + props.data.price + "&thematic=" + props.data.thematic} className="btn btn-primary">
                                Ver mas
                            </Link>
                        </div>
                        <div className="p-1">
                            <button className="btn btn-primary card-link p-2" onClick={function (event) { Agregarelementos() }}>Agregar a Favoritos</button>
                        </div>

                        <div className="p-1">
                            <Link to={"/Map?long=" + long + "&lat=" + lat}
                                className="btn btn-primary card-link p-2">Ver en Mapa
                            </Link>
                        </div>
                        <div className="p-1">
                            {isAuth ? <Link className="btn btn-primary card-link p-2" to={"/Profile?name=" + props.data.name + "&price=" + props.data.price}>Reservar</Link> : <Link className="btn btn-primary card-link p-2" to={`/Login`}  >Reservar </Link>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardAlternativeWedd;