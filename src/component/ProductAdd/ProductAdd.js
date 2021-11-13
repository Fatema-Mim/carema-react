import React, { useRef } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';


const ProductAdd = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const discriptionRef = useRef();
    const handleAddProduct = e =>{
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const discription = discriptionRef.current.value;

        const newUser = {name,price,image,discription};
        fetch('http://localhost:5000/productAdd',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added your product');
                e.target.reset();
            }
        })

        e.preventDefault();
    }
    
    return (
        <>
            <Container className="mt-5 mb-5">
                <h1 className="text-center"> Add <span className="text-warning"> Product</span> </h1>
                <Form onSubmit={handleAddProduct} className="mt-5">
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Product Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={nameRef} type="text" placeholder="Add product name" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Product Price:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={priceRef} type="number" placeholder="Add product price" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Product Image:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={imageRef} type="link" placeholder="Add a image url" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Product Discription:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={discriptionRef} as="textarea"  rows={3} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="warning" type="submit">Submit</Button>
                        </Col>
                    </Form.Group>


                </Form>
            </Container>
        </>
    );
};

export default ProductAdd;