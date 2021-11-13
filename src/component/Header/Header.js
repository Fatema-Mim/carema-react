import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user , logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <h1>Time Locked</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/allProduct">Product </Nav.Link>
                        {
                            user?.email &&  <Nav.Link as={Link} to="/adminDashboard">Admin Dashboard</Nav.Link>
                            
                        }
                        {
                            user?.email &&<Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }
                        
                        {
                            user?.email ? 
                            <Button onClick={logOut} variant="warning" className="ms-3">LogOut </Button>

                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <h3 className="p-1">
                            {
                                user?.email && user.displayName
                            }
                        </h3>
                        
                            
                           
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;