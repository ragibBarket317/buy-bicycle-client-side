import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './pages/Dashboard/Payment/Payment';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';
import MoreProducts from './pages/MoreProducts/MoreProducts';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Products from './pages/Products/Products';
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/product">
            <MoreProducts></MoreProducts>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <PrivateRoute exact path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardHome></DashboardHome>
          </PrivateRoute>
          <Route exact path="/payment">
            <Payment></Payment>
          </Route>
          <Route exact path="/register">
            <Registration></Registration>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
