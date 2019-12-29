import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="names">
        <h1>Madeline and Patrick</h1>
      </div>
      <div className="date">
        <h2>August 22, 2020</h2>
      </div>
      <nav className="navbar">
        <Link to="/eventdetails">Event Details</Link>
        <a href="#">The Ceremony</a>
        <a href="#">The Bridal Party</a>
        <a href="#">Photos</a>
        <a href="#">Our Story</a>
        <a href="#">Registry</a>
      </nav>
    </div>
  );
};

export default Header;
