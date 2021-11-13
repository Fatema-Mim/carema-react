import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <Container fluid className="footer-bg text-light">
                <Row className="p-4">
                    <Col xs="12" md="6" lg="6"  className="text-center">
                        <h1 className="text-light">Our <span className="footer-title">Vision</span></h1>
                        <p className="custom-text mt-3">Our vision is to provide qualitiful product to all and also witnin their cost </p>
                    </Col>
                    <Col xs="12" md="6" lg="6" className="ps-5">
                        <h1>Contact <span className="footer-title">Info</span></h1>
                        <div className="custom-text mt-3">
                            <p><i className="fas fa-map-marker footer-title"></i> PlotNo 31,Road 3, Block-D, Mirpur </p>
                            <p><i className="fas fa-envelope footer-title"></i> Email : lockedTime@gmail.com </p>
                            <p><i className="fas fa-phone-alt footer-title"></i> Phone : +0992838299</p>
                        </div>
                    </Col>
                </Row>
        </Container>  
        </>
    );
};

export default Footer;