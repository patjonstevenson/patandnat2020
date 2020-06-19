import React from "react";

const WeddingParty = () => {
  return (
    <div className="wedding-party">
      <h2>The Wedding Party</h2>

      <div className="wedding-party-groups">
        <div className="wedding-party-group">
          <h3>Bridesmaids</h3>
          <ul>
            <li>Julia Gomez</li>
            <li>Isabella Carreon</li>
            <li>Felicity Egan</li>
            <li>Anabel Gomez</li>
          </ul>
        </div>

        <div className="wedding-party-group">
          {/* <h3>Groomsmen</h3>
          <ul>
            <li>Nick Schmidt</li>
            <li>Jordon Dimock</li>
            <li>Dane Boudreau</li>
            <li>Andrew Imthurn</li>
          </ul> */}
        </div>
      </div>



    </div>
  );
};

export default WeddingParty;
