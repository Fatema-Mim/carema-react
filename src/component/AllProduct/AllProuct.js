import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const AllProuct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-anchorage-90808.herokuapp.com/productAdd')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <Container className="mt-5 mb-5">
                <h1 className="text-center mt-5 mb-5 text-size-one ">
                    Pac<span className="text-warning">kage</span>
                </h1>
                <Row xs={1} md={2} lg={4} className="g-4">

                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }

                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default AllProuct;