import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Registration = () => {
    const { signInUsingGoogle, registerUsingEmailPassword, handleEmail, handlePassword, handleNameChange, setUserName, error, setError, password } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';
    // Google Rediract process
    const googleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }
    // Redirect Location Process
    const emailPasswordRegister = () => {
        if (password.length < 6) {
            setError('please enter at least 6 charectar')
            return;
        }
        registerUsingEmailPassword()
            .then((result) => {
                history.push(redirect_uri)
                setError('')
                setUserName()
                alert('Registration Successful. Please Login')
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="w-50 mx-auto">
                    <div style={{ backgroundColor: "#F0F2F2", padding: "20px" }} className="mt-5">
                        <div>
                            <h2 className="mb-3 text-center">Please Register</h2>
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <p className="text-danger">{error}</p>
                            <button onClick={emailPasswordRegister} className="btn btn-primary w-100 mt-2" type="submit">Register</button><br />
                            <p className="text-center mt-3">--------------------OR----------------------</p>
                            <div className="text-center mt-2">
                                <button onClick={googleLogin} className="btn btn-warning w-lg-25 mx-3" type="submit">Google Sign in</button>
                                <p>already have an account? please <Link to="/login">login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;