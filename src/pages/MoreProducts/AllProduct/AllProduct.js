import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    const { name, title, img, userRating, rating, price, _id } = props.cycle;
    return (
        <Col sm={12} md={4} className="my-3">
            <CardGroup className="h-100 text-center shadow-md">
                <Card>
                    <div>
                        <Card.Img variant="top" src={img} style={{ width: "250px", height: "250px" }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h6 className="text-muted">{title}</h6>
                            <h6>Rating: {userRating}/{rating}</h6>
                            <h6>Price: $ {price}</h6>
                        </Card.Text>
                    </Card.Body>
                    <div className="text-center py-3">
                        <Link to={`purchase/${_id}`}><Button variant="danger" className="w-50"> Buy Now</Button></Link>
                    </div>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default AllProduct;