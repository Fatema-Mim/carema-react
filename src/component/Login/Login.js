import React, { useState } from 'react';
import { Container, Form, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleEmail = e => {
        setEmail(e?.target?.value);
    }
    const handlePassword = e => {
        setPassword(e?.target?.value);
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();
        loginUser(email, password);
        console.log(redirect_uri);
        history.push(redirect_uri);
    }
    return (
        <>
        <Container>
                
                    <Form onSubmit={handleLoginSubmit} className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                        <span>New user ?</span> <Link to="/register">Register Now</Link>
                    </Form>
                
        </Container>
            
        </>
    );
};

export default Login;