import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, price, image, discription } = props.product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className="img-border-set" />
                <Card.Body className="pt-3 pb-3">
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h3 className="mt-3 mb-3">Price : <span className="text-warning">${price}</span> </h3>
                        <p className="mt-3 mb-3">{discription}</p>
                        <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }} >
                            <div className="d-grid gap-2">
                                <button className="btn btn-warning" type="button">Book Now</button>
                            </div>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;

