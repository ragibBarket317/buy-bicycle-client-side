import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import location from '../../../images/map-pin.svg'
import email from '../../../images/boton-mail-1-remix.svg'
import phone from '../../../images/OldFashionedPhone2.svg'

const AddressBar = () => {
    return (
        <div style={{ marginTop: "-55px" }}>
            <Container className="shadow">
                <Row>
                    <Col sm={12} md={4} className="bg-dark text-white py-5">
                        <img style={{ whide: "40px", height: "40px" }} src={location} alt="" />
                        <span className="fw-bolder">Bosundhora city, Dhaka</span>
                    </Col>
                    <Col sm={12} md={4} className="bg-white text-dark py-5">
                        <div className="text-md-center">
                            <img style={{ whide: "30px", height: "30px" }} src={email} alt="" />
                            <span className="fw-bolder"> ragibrahman86317@gmail.com</span>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="bg-dark text-white py-5">
                        <img style={{ whide: "30px", height: "30px" }} src={phone} alt="" />
                        <span className="fw-bolder"> +8801774086317,  01787997699</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddressBar;