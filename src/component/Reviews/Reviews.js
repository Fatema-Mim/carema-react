import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-anchorage-90808.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <Container className="mt-5 mb-5">
                <h1 className="text-center mt-5 mb-5 text-size-one ">
                    Client <span className="text-warning">Re</span>views
                </h1>
                <Row xs={1} md={2} lg={4} className="g-4">

                    {
                        reviews.map(review => <Review key={review._id} review={review} ></Review> )
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Reviews;
