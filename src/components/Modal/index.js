import React from 'react';
import "./index.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDialog(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{props.modal_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modal_content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;