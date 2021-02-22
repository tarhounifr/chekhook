import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const AddMovie = ({ addMovie }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Titre, setTitre] = useState("");
    const [Rating, setRating] = useState(1);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                ADD
      </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter movie name ..."
                            onChange={(e) => setTitre = (e.target.value)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" placeholder="Enter movie rating ..."
                            min="1" max="5"
                            onChange={(e) => setRating = (e.target.value)}
                        />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={() => { addMovie({ id: Math.random(), Titre, Rating }); handleClose() }} >
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default AddMovie
