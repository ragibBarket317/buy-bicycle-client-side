import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bolder">BuyByCycle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="fw-bolder">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products" className="fw-bolder">Product</Nav.Link>
                            {user?.email || user?.displayName ?
                                <>
                                    <Nav.Link as={Link} to="/dashboard" className="fw-bolder">Dashboard</Nav.Link>
                                    <Button className="mx-2" onClick={logout} variant="dark">Logout</Button>
                                </> :
                                <Nav.Link as={Link} to="/login" className="fw-bolder">Login</Nav.Link>
                            }

                            <Navbar.Text>
                                {user?.displayName ?
                                    <div>
                                        Signed in as: <a href="#login">{user?.displayName}</a>
                                    </div> :
                                    <div></div>
                                }
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;