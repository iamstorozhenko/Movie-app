import React from "react";

import "./Modal.css";

function Modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
}

export default Modal;
