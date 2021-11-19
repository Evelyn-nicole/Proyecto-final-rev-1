// import React, { useEffect, useContext } from "react";
// import CardAltWedding from "./CardAltWedding";
// import { Context } from "../Store/appContext";

// export const Event = () => {

//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     actions.setInfo();
//   },[]);

//   return (
//     <div className="container-fluid">
//       <h1>Eventos y Tematicas</h1>
//       <div className="row">
//         <div className="col d-flex">
//           {store.event.map((evento, i) => (
//             <CardAltWedding data={evento} key={i} indice={i} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Event;
import React, { useEffect, useState, useContext } from "react";
import CardAlternativeWedd from "../Components/CardAltWedding.js";
import { Context } from "../Store/appContext";


export const Event = () => {
  //const [event1, setEvent1] = useState([])
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.setInfo();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex">
          {store.event.map((evento, i) => (
            <CardAlternativeWedd data={evento} key={i} indice={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Event;
