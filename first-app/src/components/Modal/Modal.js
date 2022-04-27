import React from "react";
import "./Modal.css";
export default function Modal(props) {
  return (
    <div className="modal-background">
      <p>Are you sure?</p>
      <button onClick={props.onCancel} href="/" className="btn btn-warning">
        Cancel
      </button>
      <button onClick={props.onConfirm} href="/" className="btn btn-primary">
        Confirm
      </button>
    </div>
  );
}
