import React from "react";
import "./Submittedquestion.css";

const submittedquestion = props => {
  return (
    <div className="SubQuestion">
      <h5 style={{ fontWeight: "bold" }}>Sendt inn av: {props.name}</h5>
      <h5>{props.text}</h5>
    </div>
  );
};

export default submittedquestion;
