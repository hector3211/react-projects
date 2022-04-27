import React, { useState } from "react";
import Modal from "./Modal/Modal";
export default function Todo(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prevValue) => {
      setModal(!prevValue);
    });
  };
  return (
    <div className="card-container container">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button onClick={toggleModal} href="/" className="btn btn-primary">
            delete
          </button>
        </div>
      </div>
      {modal && <Modal onCancel={toggleModal} onConfirm={toggleModal} />}
    </div>
  );
}
