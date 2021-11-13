import React ,{useState} from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';


const ManageAllProduct = (props) => {
    const { _id, name, price, image, discription } = props.product;
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const redirect_uri = '/home';


    const handleDeletOrder = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://sleepy-anchorage-90808.herokuapp.com/productAdd/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfullly ');
                        const remainingProduct = products.filter(product => _id !== id);
                        setProducts(remainingProduct);
                        history.push(redirect_uri);
                    }
                });
        }
    }


    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className="img-border-set" />
                <Card.Body className="pt-3 pb-3">
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h3 className="mt-3 mb-3">Price : <span className="text-warning">${price}</span> </h3>
                        <p className="mt-3 mb-3">{discription}</p>
                        <div className="d-grid gap-2" style={{ textDecoration: 'none' }}>
                            <Button variant="danger" onClick={() => handleDeletOrder(_id)}>Delete</Button>
                            </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageAllProduct;

