import React, { useRef } from "react";

export default function CardFormdata(props) {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const cardData = {
      title: enteredTitle,
      image: enteredUrl,
    };
    props.onAddCard(cardData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add New Card</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            ref={titleInputRef}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">ImageURL</label>
          <input
            ref={urlInputRef}
            type="url"
            className="form-control"
            id="image"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
