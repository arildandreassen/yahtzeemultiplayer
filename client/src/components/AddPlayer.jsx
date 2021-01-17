import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../style/index";

const AddPlayer = () => {
  const [showModal, setModalShow] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={() => setModalShow(true)}
      >
        Add Player
      </button>
      <button className="arild"> my styling</button>

      <Modal show={showModal} centered className="arild">
        <Modal.Header>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body className="arild">
          <form>
            <input autoFocus placeholder="name..." />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Cancel</Button>
          <Button
            onClick={() => {
              console.log("adding name");
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddPlayer;
