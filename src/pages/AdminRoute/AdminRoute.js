import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
// Use Private Router
const AdminRoute = ({ children, ...rest }) => {
    const { user, isloading, admin } = useAuth();
    if (isloading) {
        return <Spinner animation="border" variant="dark" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName && user?.email && admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default AdminRoute;