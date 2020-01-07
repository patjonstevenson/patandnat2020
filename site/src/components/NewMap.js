import React, { useState, useEffect } from "react";
import axiosWithGoogleAuth from "../utils/axiosWithGoogleAuth";

const Map = () => {
  const [GMap, setMap] = useState();
  useEffect(async () => {
    try {
      const result = await axiosWithGoogleAuth.get(
        'https://maps.googleapis.com/maps/api/directions?origin="2532 Ventura Blvd, Camarillo, CA 93010"&destination="3186 Reservoir Dr, Simi Valley, CA 93065"&travelMode="DRIVING"&avoidHighways=true'
      );
      setMap(result);
    } catch (error) {
      console.log(`\nERROR fetching map!\n${error}\n`);
      setMap(<h3>ERROR LOADING MAP SO SORRY</h3>);
    }
  }, []);
  return (
    <div className="map">
      <GMap />
    </div>
  );
};

export default Map;
