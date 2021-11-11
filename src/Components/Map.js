import React, { Component } from "react";
import GoogleMaps from "google-map-react";
import { useLocation } from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Map = () => {
  const query = useQuery();

  const lata = query.get("lat");
  const latab = parseFloat(lata);

  const longA = query.get("long");
  const longB = parseFloat(longA);

  console.log({ latab, longB });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex">
          <div className="container">
            <div
              className="container"
              style={{ height: "430px", width: "60px" }}
            >
              <GoogleMaps
                apikey={"AIzaSyCT-iDpxeOvb9Nkeh-x7AKVj3xkUZ70SI4"}
                style={{ height: "10px", width: "60px" }}
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
