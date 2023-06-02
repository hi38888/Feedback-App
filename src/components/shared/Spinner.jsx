import React from "react";
import spinner from "../assets/spinner.gif";
// this is spinner
const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='loading'
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
