import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import offer1 from '../../Image/offer1.png';
import offer2 from '../../Image/offer2.png';
import offer3 from '../../Image/offer3.png';

const Offers = () => {
    return (
        <div>
            <Container className="mt-5 mb-5">
                <h1 className="text-center mt-5 mb-5 text-size-one ">
                    Of<span className="text-warning">fe</span>r
                </h1>
                <Row>

                    <Col lg={3} xs={12} md={6} >
                        <img src={offer1} alt="offer" />
                    </Col>
                    <Col xs={12} md={6} lg={6}  >
                        <img src={offer2} alt="offer" fluid />
                    </Col>
                    <Col lg={3} xs={12} md={6}>
                        <img src={offer3} alt="offer" fluid/>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Offers;