import React from "react";
import "./Card.css";
export default function SingleCard(props) {
  return (
    <div>
      <img className="single-card-imgs" src={props.image} alt="card" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
