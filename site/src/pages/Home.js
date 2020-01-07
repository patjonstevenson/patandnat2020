import React from "react";
import Header from "../components/Header";
import mainImage from "../images/engagement.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="cover-photo">
        <img src={mainImage} id="cover-image" />
      </div>
      <Header />
    </div>
  );
};

export default Home;
