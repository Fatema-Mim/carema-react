import React, { useState } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Register = () => {
    const {  registerUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const redirect_uri = '/home';
    
    const handleName = e => {
        setName(e?.target?.value);
    }
    const handleEmail = e => {
        setEmail(e?.target?.value);
    }
    const handlePassword = e => {
        setPassword(e?.target?.value);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        registerUser(email, password, name);
        history.push(redirect_uri);
    }
    return (
        <>
            <Container className="mt-5 mb-5">
                <h2 className="text-center">Please <span className="supports-Name">Register</span></h2>
                
                    <Form onSubmit={handleRegisterSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>You Name :</Form.Label>
                            <Form.Control onBlur={handleName} type="text" placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address :</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password :</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="warning"  type="submit">
                            Registration
                        </Button>
                       <div className="mt-2">
                        <span>Already register ? Please</span> <Link to="/login">Login</Link>
                       </div>
                    </Form>
            </Container>

        </>
    );
};

export default Register;