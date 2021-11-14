import React, { useEffect, useContext } from 'react';
import { Context } from '../Store/appContext';
import { useLocation } from 'react-router-dom';

function useQuery () {
    return new URLSearchParams(useLocation().search)
  } 
  
  const Infoevent = (prop) => {
  
  //const Param = useParams()  
  
  const query = useQuery()
  return ( 
      <div className ="container">
      <div className="card mb-3 mt-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://picsum.photos/id/1003/400/300" className="img " alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
              <h3>Descripcion</h3>
            <p className="card-text align-items-center">{query.get("description")}</p>
          </div>
        </div>
      </div>
      </div>
      
      <div className = "d-flex justify-content-evenly mt-5">
        <div className ="d-flex flex-column align-items-center planetinfo">
            <p>Tematica</p>
            <p>{query.get("thematic")}</p>
        </div>
        <div className ="d-flex flex-column align-items-center planetinfo">
            <p>Precio</p>
            <p>{query.get("price")}</p>
        </div>
      </div>
      </div>
  
    
  )}
  
  export default Infoevent