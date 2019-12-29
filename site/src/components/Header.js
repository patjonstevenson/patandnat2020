import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="names">
        <h1>Madeline and Patrick</h1>
      </div>
      <div className="date">
        <h2>August 22, 2020</h2>
      </div>
      <div className="navbar">
        <nav>
          <a href="#">Event Details</a>
          <a href="#">The Ceremony</a>
          <a href="#">The Bridal Party</a>
          <a href="#">Photos</a>
          <a href="#">Our Story</a>
          <a href="#">Registry</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
