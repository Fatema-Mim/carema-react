import React, { useEffect, useState } from 'react';
import { Container, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import Product from '../Product/Product';
const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/productAdd')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Container className="mt-5 mb-5 m-auto">
                <h1 className="text-center mt-5 mb-5 text-size-one ">
                    Pro<span className="text-warning">du</span>ct
                </h1>
                <Row xs={1} md={2} lg={3} className="g-4">

                   {
                       
                        products.map(product => <ManageAllProduct key={product._id} product={product}></ManageAllProduct>)
                   }

                </Row>
            </Container>
            
        </div>
    );
};

export default ManageAllProducts;
