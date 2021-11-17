import React from 'react'
import { Link } from 'react-router-dom';
export const CardZombieWedd = (props) => {
    return (
        <div className="cardProfile" style={props.styles}>    
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Zombie Wedding</h5>
            <p className="card-text">Descripción</p>
            <p className="card-text">lorem Ipsum</p>
            <Link to={`/`} className="btn btn-primary ml-5">
              Like
            </Link>
            <Link to={`/`} className="btn btn-primary ml-5">
              Ver mas
            </Link>
          </div>
        </div>
    </div>
    )
}
export default CardZombieWedd;