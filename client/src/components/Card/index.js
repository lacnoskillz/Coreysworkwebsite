import React, { useState } from "react";
import "./Card.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Card({imageUrl, Title, Description}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="cardcontainer">
    <div className='card m-1 p-1 text-center' >
      <img className ="cardimage" src={imageUrl} onClick={() => handleShow()} alt='Card displaying a service' />
      <div className='card-title'>{Title}</div>
    </div>
  
    <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )

}
export default Card