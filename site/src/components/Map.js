import React, { useEffect, useState } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  withScriptjs
} from "react-google-maps";

// const mapStyles = {
//   width: "40%",
//   height: "40%"
// };

const origin = "2532 Ventura Blvd, Camarillo, CA 93010";
const destination = "3186 Reservoir Dr, Simi Valley, CA 93065";

const directionsService = new google.map.DirectionsService();

const key = process.env.MAPS_KEY;

const Map = props => {
  const { directions, setDirections } = useState();
  const { GMap, setMap } = useState();

  useEffect(() => {
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: true
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections({ directions: result });
          setMap(
            withGoogleMap(props => (
              <GoogleMap defaultZoom={8}>
                <DirectionsRenderer directions={directions} />
              </GoogleMap>
            ))
          );
        } else {
          console.error(`\nERROR fetching directions:\n${result}\n`);
        }
      }
    );
  }, []);

  return (
    <div className="map">
      {/* <Map google={props.google} zoom={8} style={mapStyles} /> */}
      <GMap
        containerElement={<div style={{ height: "500px", width: "500px" }} />}
        mapElement={<div style={{ height: "40%" }} />}
      />
    </div>
  );
};

const MapLoader = () => {
  const Loader = withScriptjs(Map);
  return (
    <Loader
      googleMapUrl={`https://maps.googleapis.com/maps/api/js?key=${key}`}
      loadingElement={<div style={{ height: "40%" }} />}
    />
  );
};

export default MapLoader;
