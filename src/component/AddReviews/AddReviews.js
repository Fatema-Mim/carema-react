import React, { useRef, useState ,useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';

const AddReviews = () => {
    const { user } = useAuth();
    const [orderProducts, setOrderProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const nameRef = useRef();
    const emailRef = useRef();
    const reviewRef = useRef();
    const ratingRef = useRef();

    const history = useHistory();
    const redirect_uri = '/home';
    useEffect(() => {
        fetch('https://sleepy-anchorage-90808.herokuapp.com/productAdd')
            .then(res => res.json())
            .then(data => setOrderProducts(data))
            .finally(() => setIsLoading(false));

    }, [])
    const handelerAddReviews = e => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const review = reviewRef.current.value;
        const rate = ratingRef.current.value;
        

        const newReview = { name, email, review , rate};
        console.log(newReview);

        fetch('https://sleepy-anchorage-90808.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review add');
                    history.push(redirect_uri);
                }
            });
        e.preventDefault();


    }
    return (
        <div>
            <Container className="mt-5 mb-5">
                <Form onSubmit={handelerAddReviews}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={nameRef} type="text" value={user?.displayName || ''} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Email:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={emailRef} type="email" value={user?.email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Review:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={reviewRef} as="textarea" rows={3} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Rating point:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={ratingRef} type="number" placeholder="Enter number (1 - 5)" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="warning" type="submit">Added Review</Button>
                        </Col>
                    </Form.Group>


                </Form>
            </Container>
        </div>
    );
};

export default AddReviews;