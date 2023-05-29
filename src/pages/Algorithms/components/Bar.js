import React from "react";

const Bar = ({ value }) => {
  const barStyle = {
    width: `${value}%`,
    height: "30px",
    backgroundColor: "white",
    margin: "5px",
  };

  return <div style={barStyle}></div>;
};

export default Bar;
