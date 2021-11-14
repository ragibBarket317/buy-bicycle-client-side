import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import PurchaseNow from './PurchaseNow/PurchaseNow';

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cycles/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <Row>
                    <Col sm={12} md={6}>
                        <CardGroup className="h-100 text-center shadow-md">
                            <Card>
                                <div>
                                    <Card.Img variant="top" src={purchase?.img} style={{ width: "250px", height: "250px" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{purchase?.name}</Card.Title>
                                    <Card.Text>
                                        <h6 className="text-muted">{purchase?.title}</h6>
                                        <h6>Rating: {purchase?.userRating}/{purchase?.rating}</h6>
                                        <h6>Price: $ {purchase?.price}</h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col sm={12} md={6}>
                        <PurchaseNow name={purchase.name}></PurchaseNow>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;