import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Payment from '../Payment/Payment';
import HomePage from '../HomePage/HomePage';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import UserReview from '../UserReview/UserReview';
import Logout from '../Logout/Logout';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddProduct from '../AddProduct/AddProduct';
import RemoveProduct from '../RemoveProduct/RemoveProduct';

const drawerWidth = 220;

function DashboardHome(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logout, user } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <li style={{ listStyle: "none", padding: "5px 20px" }}><Link to="/products" style={{ fontWeight: "bold", textDecoration: "none", color: "black", }}>Product</Link></li>
            <Box style={{ paddingLeft: "20px" }}>


                <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/dashboard`} style={{ color: "black", textDecoration: "none" }}>Dashboard</Link></li>
                <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/payment`} style={{ color: "black", textDecoration: "none" }}>Payment</Link></li>
                <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/myorders`} style={{ color: "black", textDecoration: "none" }}>My Orders</Link></li>
                <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/review`} style={{ color: "black", textDecoration: "none" }}>Review</Link></li>
                {admin && <Box>
                    <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/makeAdmin`} style={{ color: "black", textDecoration: "none" }}>Make Admin</Link></li>
                    <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/manageOrder`} style={{ color: "black", textDecoration: "none" }}>Manage All Orders</Link></li>
                    <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/addProduct`} style={{ color: "black", textDecoration: "none" }}>Add Product</Link></li>
                    <li style={{ listStyle: "none", paddingBottom: "5px" }}><Link to={`${url}/removeProduct`} style={{ color: "black", textDecoration: "none" }}>Manage Products</Link></li>
                </Box>
                }
                {user?.email ? <Button onClick={logout} variant="contained">Logout</Button> :
                    <Link to={`${url}/login`}>Login</Link>
                }
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: "black" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <HomePage></HomePage>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/removeProduct`}>
                        <RemoveProduct></RemoveProduct>
                    </AdminRoute>
                    <Route exact path={`${path}/review`}>
                        <UserReview></UserReview>
                    </Route>
                    <Route exact path={`${path}/login`}>
                        <Logout></Logout>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

DashboardHome.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardHome;

