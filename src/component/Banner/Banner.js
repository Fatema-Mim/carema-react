import React from 'react';
import { Carousel } from 'react-bootstrap';
import b2 from '../../Image/banner/b2.png';
import b3 from '../../Image/banner/b3.png';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b3}
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;