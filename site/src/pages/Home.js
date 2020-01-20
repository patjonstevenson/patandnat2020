import React from "react";
import Header from "../components/Header";
import mainImage from "../images/main.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="cover-photo">
        <img src={mainImage} id="cover-image" />
        <h1>Madeline<br /> and<br /> Patrick</h1>
      </div>
      <Header />
    </div>
  );
};

export default Home;
