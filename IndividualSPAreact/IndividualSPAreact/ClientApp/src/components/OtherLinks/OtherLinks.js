import React from "react";
import "../OtherLinks/OtherLinks.css";

const otherlinks = props => {
  return props.items.map(i => (
    <div
      className="OtherLinks"
      key={i.id}
      onClick={props.clicked.bind(this, i.id)}
    >
      <p>{i.type}</p>
    </div>
  ));
};

export default otherlinks;
