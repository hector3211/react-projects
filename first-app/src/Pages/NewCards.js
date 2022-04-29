import React from "react";
import { useNavigate } from "react-router-dom";
import CardFormData from "../components/CardList/CardFormData";

export default function NewCards() {
  const navigate = useNavigate();
  const firebaseRoute = process.env.FIREBASEROUTE;
  function addCardHandler(cardData) {
    fetch(firebaseRoute, {
      method: "POST",
      body: JSON.stringify(cardData),
      header: {
        "content-type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return <CardFormData onAddCard={addCardHandler} />;
}
