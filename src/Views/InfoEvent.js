import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Infoevent = (prop) => {

  //const Param = useParams()  

  const query = useQuery()
  return (
    <div className="container">
      <div className="card mb-3 mt-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={query.get("image")} className="img " alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex justify-content-center flex-column align-items-center" >
              <h3>Descripcion del Evento</h3>
              <p className="card-text align-items-center">{query.get("description")}</p>
              <div className="d-flex flex-column align-items-center planetinfo">
                <p>Tematica: {query.get("thematic")}</p>
                <p>Precio: {query.get("price")} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infoevent