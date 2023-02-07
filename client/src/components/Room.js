import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";

function Room({ room }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="row box-shadow">
                <div className="col-md-4">
                    <img src={room.imageurls[0]} className="smallimg"></img>
                </div>
                <div className="col-md-7 text-left">
                    <h1>{room.name}</h1>
                    <p>Max Count: {room.maxcount}</p>
                    <p>Amenities: {room.amenities}</p>
                    <p>Type: {room.type}</p> 
                    <p>Cost: {room.costperday} per Night</p>

                    <div style={{ float: 'right' }}>
                        <Link to={`/book/${room._id}`}>
                        <button className="btn btn-primary m-2">Book Now</button>
                        </Link>
                        <button className="btn btn-primary" onClick={handleShow}>View Details</button>
                    </div>

                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{room.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel>
                                {room.imageurls.map(url => {
                                    return <Carousel.Item interval={5000}>
                                    <img
                                        className="d-block w-100 bigimg"
                                        src={url}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        {room.description}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                })}
                            </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Book Now
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </div>
            </div>



        </div>
    )
}

export default Room