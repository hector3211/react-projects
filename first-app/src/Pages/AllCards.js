import React from "react";
import Todo from "../components/Todo";
import SingleCard from "../components/CardList/SingleCard";
import CardList from "../components/CardList/CardList";

const createDummyData = (CardList) => {
  return (
    <SingleCard
      key={CardList.id}
      id={CardList.id}
      image={CardList.image}
      text={CardList.text}
      description={CardList.description}
    />
  );
};

export default function AllCards() {
  return (
    <div className="container-fluid p-0">
      <Todo title="card 1" text="text for card 1" />
      <Todo title="card 2" text="text for card 2" />
      <Todo title="card 3" text="text for card 3" />
      <div>{CardList.map(createDummyData)}</div>
    </div>
  );
}
