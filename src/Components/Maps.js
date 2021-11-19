import React, { Component } from "react"
import GoogleMaps from "google-map-react"
import { useLocation } from 'react-router-dom';
/* export default class Maps extends Component {

  render(){
    return (
      <div>
        <div className ="container">
          <GoogleMaps
            apikey ={"AIzaSyBtKmT9CAFrtyEMkgnGFuFr7sXZvEPQE9M"}
            style = {{height :"400px", width:"300px" }}
            zoom = {12}
            center = {{
              lat :40.4127355,
              lng: -3.695428
            }}
            markers = {[
              { lat :40.409711, lng: -3.692569},
              { lat :40.412711, lng: -3.692569},
              { lat :40.451711, lng: -3.690759}
            ]}

          />
        </div>
      </div>
    )
  }
} */

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Map = () => {
  const query = useQuery()

  const lata = query.get("lat")
  const latab = parseFloat(lata)

  const longA = query.get("long")
  const longB = parseFloat(longA)

  console.log({ latab, longB })
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex">
          <div className="container">
            <div className="container" style={{ height: "430px", width: "60px" }}>
              <GoogleMaps
                apikey={"AIzaSyCT-iDpxeOvb9Nkeh-x7AKVj3xkUZ70SI4"}
                style={{ height: "10px", width: "60px" }}
                zoom={17}
                center={
                  { lat: latab, lng: longB }
                }
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map