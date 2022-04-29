import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
import SingleCard from "../components/CardList/SingleCard";

export default function AllCards() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setIsLoadedCards] = useState([]);
  useEffect(() => {
    fetch("https://react-tutorial-47540-default-rtdb.firebaseio.com/cards.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cards = [];
        for (const key in data) {
          const card = {
            id: key,
            ...data[key],
          };
          cards.push(card);
        }
        setIsLoading(false);
        setIsLoadedCards(cards);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }
  const fireShipData = (cards) => {
    return (
      <SingleCard
        key={cards.id}
        id={cards.id}
        image={cards.image}
        text={cards.title}
        description={cards.description}
      />
    );
  };
  return (
    <div className="container-fluid p-0">
      <Todo title="card 1" text="text for card 1" />
      <Todo title="card 2" text="text for card 2" />
      <Todo title="card 3" text="text for card 3" />
      <div>{loadedCards.map(fireShipData)}</div>
    </div>
  );
}
