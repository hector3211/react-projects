import React, { useRef, useState } from "react";

export default function CardFormdata() {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
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
    console.log(cardData);
  };
  const resetInputs = () => {
    setTitle("");
    setUrl("");
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
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">ImageURL</label>
          <input
            ref={urlInputRef}
            type="url"
            className="form-control"
            id="image"
            value={url}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
