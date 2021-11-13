import React from 'react';
import { Container } from 'react-bootstrap';
import error from '../../Image/error.png';

const NoFound = () => {
    return (
        <div>
            <Container className="justify-content-center d-flex mt-5 mb-5 ">
                <img src={error} alt="img" />
            </Container>
        </div>
    );
};

export default NoFound;