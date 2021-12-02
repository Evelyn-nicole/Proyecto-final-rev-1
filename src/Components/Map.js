import React from "react";
import GoogleMaps from "google-map-react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Map = () => {
  const query = useQuery();

  const lata = query.get("lat");
  const latab = parseFloat(lata);

  const longA = query.get("long");
  const longB = parseFloat(longA);

  console.log({ latab, longB });

  return (
    <div className="container-fluid">
      <h2 className="text-center mt-4 textoHome">Ubicación del evento</h2>
      <div className="row">
        <div className="col d-flex mt-3">
          <div className="container">
            <div
              className="container"
              style={{ height: "430px", width: "2000px" }}
            >
              <GoogleMaps
                apikey={"AIzaSyCnYrzckMYInn71m_Ttp-w-YP6fuP3_998"}
                // {"AIzaSyBcB-zuyKxM6O-1IIl_3dvvfAX2GvysJZ4"}
                zoom={17}
                center={{ lat: latab, lng: longB }}
                
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
