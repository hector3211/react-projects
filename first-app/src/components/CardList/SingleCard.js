import React from "react";
export default function SingleCard(props) {
  return (
    <div>
      <img src={props.image} alt="card" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
