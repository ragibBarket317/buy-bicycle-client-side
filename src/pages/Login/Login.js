import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Login = () => {
    const { signInUsingGoogle, handlePassword, signInUsingEmailPassword, handleEmail, error, setError, password } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // Google Redirect process
    const googleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }
    // Email Password Redirect Process
    const emailPasswordLogin = () => {
        if (password.length < 6) {
            setError('please enter at least 6 charectar')
            return;
        }
        signInUsingEmailPassword()
            .then((result) => {
                history.push(redirect_uri)
                setError('')
                alert('Login Successful')
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
                    <div style={{ backgroundColor: "#F0F2F2", padding: "20px" }} className="mt-5 shadow-sm">
                        <div>
                            <h2 className="mb-3 text-center">Please Login</h2>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                            </Form.Group>
                            <p className="text-danger">{error}</p>
                            <button onClick={emailPasswordLogin} className="btn btn-primary w-100 mt-5" type="submit">Login</button><br />
                            <p className="text-center mt-3">--------------------OR----------------------</p>
                            <div className="text-center mt-2">
                                <button onClick={googleLogin} className="btn btn-warning w-lg-25 mx-3" type="submit">Google Sign in</button>
                                <p>new user? please <Link to="/register">register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;