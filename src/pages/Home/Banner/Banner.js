import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="background-img py-5">
                <Container className="text-white">
                    <div className="text-center d-flex justify-content-center align-items-center">
                        <div className="mt-5">
                            <h1>Welcome to BuyByCycle</h1>
                            <h5 className="my-3">cycling improves mental well-being & Strengthen your immune system </h5>
                            <div>
                                <Link to="/product"><div className="btn btn-danger shadow-lg">More Product</div></Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;