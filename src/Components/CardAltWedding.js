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
