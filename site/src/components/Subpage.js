import React from "react";
import Header from "./Header";

const Subpage = props => {
  console.log();
  return (
    <>
      <Header />
      <props.Page />
    </>
  );
};

export default Subpage;
