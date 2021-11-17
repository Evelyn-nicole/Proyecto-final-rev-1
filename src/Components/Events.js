import React, { useEffect, useState, useContext } from "react";
import CardZombieWedd from "../Components/CardZombieWedding"
import CardAlternativeWedd from "./CardAltWedding";
import { Context } from '../Store/appContext';
//import { useParams } from "react-router-dom";
export const Event = () =>{
    //const [event1, setEvent1] = useState([])
    const{store, actions} = useContext(Context)
    useEffect(() => {
        actions.setInfo()
    },[])
    
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col d-flex">
                 {store.event.map((evento, i) => <CardAlternativeWedd data={evento} key={i} indice={i}/>)} 
            </div>
        </div>
    </div>
    )
}
export default Event;