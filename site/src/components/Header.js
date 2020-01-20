import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="names">
        <h1>
          <Link className="header-link" to="/">Madeline and Patrick</Link>
        </h1>
      </div>
      <div className="date">
        <h2>October 3, 2020</h2>
      </div>
      <nav className="navbar">
        <Link to="/eventdetails">Event Details</Link>
        <Link to="/ceremony">Ceremony</Link>
        <Link to="/weddingparty">Wedding Party</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/ourstory">Our Story</Link>
        <Link to="/registry">Registry</Link>
      </nav>
      <hr style={{
        width: "85%",
        "margin-top": "2%"
      }} />
    </div>
  );
};

export default Header;
