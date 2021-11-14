import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import tools from '../../../images/preferences-system.svg'
import parts from '../../../images/gearGreen.svg'
import './BikeRepair.css';

const BikeRepair = () => {
    return (
        <div style={{ padding: "80px 0", backgroundColor: "#F0F2F2" }}>
            <Container className="shadow">
                <Row style={{ height: "70vh" }}>
                    <Col sm={12} md={4} style={{ padding: "80px 10px" }} className="bg-img text-white">
                        <h3 className="mt-5">Get All Product is 20% Off For Limited Time</h3>
                    </Col>
                    <Col sm={12} md={4} className="bg-white text-center p-3">
                        <div className="my-3">
                            <img style={{ width: "100px" }} src={tools} alt="" />
                        </div>
                        <h3>Bicycle Repair Workshop</h3>
                        <p>Bicycle restoration after collisions of any severity, including complete rebuilding.</p>
                    </Col>
                    <Col sm={12} md={4} className="bg-dark text-center text-white p-3">
                        <div className="my-3">
                            <img style={{ width: "100px" }} src={parts} alt="" />
                        </div>
                        <h3>Individual Parts Selection</h3>
                        <p>Aftermarket bicycle parts allow you to customize your machine the way you like.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BikeRepair;