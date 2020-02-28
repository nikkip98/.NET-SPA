import React from "react";
import Item from "./Item/Item";
import "./Items.css";

const items = props => {
  return (
    <div>
      <section className="Items">
        {props.items.map(i => (
          <Item key={i.id} type={i.type} clicked={() => props.clicked(i.id)} />
        ))}
      </section>
    </div>
  );
};

export default items;
