import React from 'react';
import { Col, Card, CardGroup } from 'react-bootstrap';

const ClientReview = (props) => {
    const { img, text, name, work } = props.rv;
    return (
        <Col sm={12} md={4} className="py-3">
            <CardGroup className="h-100 text-center">
                <Card>
                    <div className="py-4">
                        <Card.Img className="rounded-circle img-fluid" variant="top" src={img} style={{ width: "60px", height: "60px" }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h6 className="text-muted">{work}</h6>
                            <p>{text}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default ClientReview;