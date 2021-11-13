import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route as AdminRoute,
    Link,
    useRouteMatch
} from "react-router-dom";
import UserOrderList from '../UserOrderList/UserOrderList';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddReviews from '../AddReviews/AddReviews';
import Pay from '../Pay/Pay';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <h1>Time Locked</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to={`${url}`}>Dashboard</Nav.Link>
                        {/* <Nav.Link as={Link} to="/makeAdmin">Make Admin</Nav.Link> */}
                        <Nav.Link as={Link} to={`${url}/addReviews`}>Add Reviews</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                        <Button onClick={logOut} variant="warning" className="ms-3">LogOut </Button>
                        <Navbar.Text>
                            <h3>
                                {user?.email && user.displayName}
                            </h3>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <PrivateRoute exact path={path}>
                    <UserOrderList></UserOrderList>
                </PrivateRoute>
                <PrivateRoute path={`${path}/addReviews`}>
                    <AddReviews></AddReviews>
                </PrivateRoute>
                <PrivateRoute path={`${path}/pay`}>
                    <Pay></Pay>
                </PrivateRoute>
                
            </Switch>
        </>
    );
};

export default Dashboard;