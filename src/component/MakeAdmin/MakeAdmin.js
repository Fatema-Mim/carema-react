import React, { useRef, useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';

const MakeAdmin = () => {
   const [success , setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const emailRef = useRef();
   
    const handelerAddAdmin = e => {

        const email = emailRef.current.value;
        


        const newAdmin = { email };
        console.log(newAdmin);

        fetch('https://sleepy-anchorage-90808.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmin)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                    
                }
            });
        e.preventDefault();


    }
    return (
        <div>
            <Container className="mt-5 mb-5">
                <Form onSubmit={handelerAddAdmin}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Email:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={emailRef} type="email"  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="warning" type="submit">Add New Admin</Button>
                        </Col>
                    </Form.Group>

                    {
                        success && <Alert variant="success">
                           Added done
                        </Alert>
                    }


                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;