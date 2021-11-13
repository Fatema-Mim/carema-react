import React  from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route as AdminRoute,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrderList from '../AllOrderList/AllOrderList';
import ProductAdd from '../ProductAdd/ProductAdd';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';


const AdminDashBoard = () => {
    let { path, url } = useRouteMatch();

    const { user, logOut  } = useAuth()
    
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
                        <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/productAdd`}>Add Product </Nav.Link>
                        <Nav.Link as={Link} to={`${url}/manageAllProduct`}>All Product </Nav.Link>
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
                
                <AdminRoute exact path={path}>
                    <AllOrderList></AllOrderList>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/productAdd`}>
                    <ProductAdd></ProductAdd>
                </AdminRoute>
                <AdminRoute path={`${path}/manageAllProduct`}>
                    <ManageAllProducts></ManageAllProducts>
                </AdminRoute>
            </Switch>
        </>
    );
};

export default AdminDashBoard;