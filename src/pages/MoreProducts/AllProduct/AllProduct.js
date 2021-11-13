import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';

const AllProduct = (props) => {
    const { name, title, img, userRating, rating, price } = props.cycle;
    return (
        <Col md={4} className="my-3">
            <CardGroup className="h-100 text-center shadow">
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
                        <Button variant="danger" className="w-50"> Buy Now</Button>
                    </div>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default AllProduct;