import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';


const Review = (props) => {
    const { name, review, rate} = props.review ;
    const style ={
        background : 'white',
        border: '2px solid #fff79e',
        boxShadow:'2px 2px 1px #fff79e '
     }
     const uppercase = {
         textTransform: 'uppercase'
     }
    return (
        <Col>
            <Card style={style}>
                <Card.Body className=" text-center">
                    <Card.Title style={uppercase}>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Rating
                        className='text-warning'
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={rate}
                        readonly>
                    </Rating>
                    <Card.Text className="mt-3">
                        <p>{review}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;