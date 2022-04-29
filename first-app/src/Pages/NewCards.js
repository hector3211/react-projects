import React from "react";
import { useNavigate } from "react-router-dom";
import CardFormData from "../components/CardList/CardFormData";

export default function NewCards() {
  const navigate = useNavigate();
  function addCardHandler(cardData) {
    fetch(
      "https://react-tutorial-47540-default-rtdb.firebaseio.com/cards.json",
      {
        method: "POST",
        body: JSON.stringify(cardData),
        header: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return <CardFormData onAddCard={addCardHandler} />;
}
