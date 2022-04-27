import React from "react";
import Todo from "../components/Todo";
export default function AllCards() {
  return (
    <div>
      <Todo title="card 1" text="text for card 1" />
      <Todo title="card 2" text="text for card 2" />
      <Todo title="card 3" text="text for card 3" />
    </div>
  );
}
