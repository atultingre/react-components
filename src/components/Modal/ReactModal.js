import React, { useState } from "react";
import Modal from "react-modal";
import "./ReactModal.css";

Modal.setAppElement("#root");
const ReactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App react-modal">
      <h1>Modal</h1>
      <div className="modal">
        <button className="btn" onClick={() => setModalIsOpen(true)}>
          Open Modal
        </button>
        <Modal
          style={{
            overlay: {
              backgroundColor: "gray",
              paddingTop: '30px',
            },
            content: {
              marginTop: '30px',
              color: "orange",
            },
          }}
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalIsOpen(false)}>
          <div className="modal-content">
            <h2>Modal title</h2>
            <p>Modal Body</p>
            <button className="btn" onClick={() => setModalIsOpen(false)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ReactModal;
