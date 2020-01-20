import React from "react";
import Header from "./Header";

const Subpage = props => {
  console.log();
  return (
    <>
      <Header />
      <div className="subpage">
        <props.Page />
      </div>
    </>
  );
};

export default Subpage;
