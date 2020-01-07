import React from "react";
import Map from "../components/NewMap";

const EventDetails = () => {
  return (
    <div className="event-details">
      <h1>Event Details</h1>
      <h2>Nuptial Mass</h2>
      <h3>St. Mary Magdalen Chapel</h3>
      <p>
        2532 Ventura Boulevard <br />
        Camarillo, California
      </p>
      <br />
      <h2>Reception</h2>
      <h3>Gomez House</h3>
      <p>
        3186 Reservoir Drive <br />
        Simi Valley, California{" "}
      </p>

      {/* <Map /> */}
    </div>
  );
};

export default EventDetails;
