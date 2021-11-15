import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ClientReview from './ClientReview/ClientReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://vast-tundra-91484.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{ backgroundColor: "#F0F2F2", padding: "80px 0" }}>
            <Container>
                <h1 className="fw-bolder text-center mb-5">Our New Collection</h1>
                <Row >
                    {
                        reviews.map(rv => <ClientReview
                            key={rv._id}
                            rv={rv}
                        ></ClientReview>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Review;