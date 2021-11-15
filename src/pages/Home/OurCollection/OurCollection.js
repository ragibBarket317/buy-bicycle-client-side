import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CycleCard from './CycleCard/CycleCard';

const OurCollection = () => {
    const [cycles, setCycles] = useState([])
    useEffect(() => {
        fetch('https://vast-tundra-91484.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, [])
    return (
        <div style={{ marginTop: "-65px", background: "#F0F2F2", paddingTop: "180px", paddingBottom: "80px" }}>
            <Container>
                <h1 className="fw-bolder text-center mb-5">What Our Client Say</h1>
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