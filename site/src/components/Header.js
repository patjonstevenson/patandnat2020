import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);

  const reverseNavVisibility = () => {
    console.log("navVisibility before click: ", navVisibility);
    setNavVisibility(!navVisibility);
    console.log("navVisibility after click: ", navVisibility);
  };

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
      <button class="hamburger-icon" onClick={() => { reverseNavVisibility(); }}>
        <i class="fa fa-bars"></i>
      </button>
      <hr className={`${navVisibility ? 'visibile' : 'invisible'}`} />
      <nav className={`navbar ${navVisibility ? 'visibile' : 'invisible'}`}>
        <Link to="/eventdetails">Event Details</Link>
        <Link to="/ceremony">Ceremony</Link>
        <Link to="/weddingparty">Wedding Party</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/ourstory">Our Story</Link>
        <Link to="/registry">Registry</Link>
      </nav>
      <hr className={`${navVisibility ? 'visibile' : 'invisible'}`} />
    </div >
  );
};

export default Header;
