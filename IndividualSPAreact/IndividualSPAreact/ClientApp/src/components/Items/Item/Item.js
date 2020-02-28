import React from "react";
import "./Item.css";

const item = props => {
  return (
    <div className="Item" onClick={props.clicked}>
      <h1>{props.type}</h1>
    </div>
  );
};

export default item;
