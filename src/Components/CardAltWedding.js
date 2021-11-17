import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Store/appContext";

export const CardAlternativeWedd = (props) => {
    const { actions } = useContext(Context);

    const Agregarelementos = () => {
        const nombre = props.data.name;
        actions.getLista(nombre);
    };

    let lat = 0;
    let long = 0;

    if (props.data.name === "Matrimonio Alternativo") {
        lat = -33.387717713241614;
        long = -70.54551201587743;
    }
    if (props.data.name === "Matrimonio Zombie") {
        lat = -33.431960012885234;
        long = -70.59992867249629;
    }

    if (props.data.name === "Matrimonio Tradicional") {
        lat = -33.433141886671564;
        long = -70.63494759321209;
    }

    if (props.data.name === "Matrimonio Editadora") {
        lat = -33.44059090237492;
        long = -70.57306366696584;
    }
    
    // const Reservation = () => {
    //     const config = {
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         date: fechaFinal,
    //         id: userProfile.user.id,
    //       }),
    //       method: "POST",
    //     }
    
    //     fetch("http://localhost:8080/availability", config)
    //       .then((respuesta) => respuesta.json())
    //       .then((data) => {
    //         console.log(data)
    //         if (data.success) {
    //           Swal.fire(data.success);
    //           JSON.parse(localStorage.getItem('userLogin'))
    //           let path = `event`;
    //           history.push(path);
    //         } else {
    //           Swal.fire(data.msg, { icon: "error " });
    //         }
    //         setDate(date);
    //       }).catch((error) => console.error(error));
    //   };

    return (
        <div className="cardProfile w-25 m-2" style={props.styles}>
            <div className="card border-info">
                <img
                    src="https://picsum.photos/id/55/700/400"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.data.name}</h5>
                    <p className="card-text text-center">{props.data.description}.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">{props.data.thematic}</li>
                    <li className="list-group-item text-center">{props.data.price}</li>
                </ul>
                <div className="card-body">
                    <Link to={`/`} className="btn btn-primary ml-5 mb-2">
                        Ver mas
                    </Link>
                    <button
                        className="btn btn-primary ml-5 card-link"
                        onClick={Agregarelementos}
                    >
                        Agregar Elementos
                    </button>
                    <button 
                        className="btn btn-primary ml-5 card-link mt-2"
                        >
                        Reservar
                    </button >
                    <Link
                        to={"/Map?long=" + long + "&lat=" + lat}
                        className="btn btn-primary ml-5 card-link mt-2"
                    >
                        Ver en Mapa
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CardAlternativeWedd;