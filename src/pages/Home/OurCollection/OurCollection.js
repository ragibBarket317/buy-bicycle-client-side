import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CycleCard from './CycleCard/CycleCard';

const OurCollection = () => {
    const [cycles, setCycles] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cycles')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, [])
    return (
        <div style={{ marginTop: "-65px", background: "#F0F2F2", paddingTop: "180px", paddingBottom: "80px" }}>
            <Container>
                <h1 className="fw-bolder text-center mb-5">Our New Collection</h1>
                <Row >
                    {
                        cycles.slice(0, 6).map(cycle => <CycleCard
                            key={cycle._id}
                            cycle={cycle}
                        ></CycleCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurCollection;