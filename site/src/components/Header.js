import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="names">
        <h1>
          <Link to="/">Madeline and Patrick</Link>
        </h1>
      </div>
      <div className="date">
        <h2>September 5, 2020</h2>
      </div>
      <nav className="navbar">
        <Link to="/eventdetails">Event Details</Link>
        <Link to="/ceremony">The Ceremony</Link>
        <Link to="/weddingparty">The Wedding Party</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/ourstory">Our Story</Link>
        <Link to="/registry">Registry</Link>
      </nav>
    </div>
  );
};

export default Header;
