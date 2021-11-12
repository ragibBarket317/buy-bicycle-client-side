import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bolder">BuyByCycle</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="fw-bolder" href="#home">Home</Nav.Link>
                        <Nav.Link className="fw-bolder" href="#features">Features</Nav.Link>
                        <Nav.Link className="fw-bolder" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;