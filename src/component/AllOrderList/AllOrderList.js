import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AllOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://sleepy-anchorage-90808.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
            .finally(() => setIsLoading(false));

    }, [isLoading]);
    const handleDeletOrder = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sleepy-anchorage-90808.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfullly ');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    };

    function handleConfirm(id) {
        const proceed = window.confirm('Are you sure, you want to Confirm?');
        if (proceed) {
            const url = `https://sleepy-anchorage-90808.herokuapp.com/confirm/${id}`
            fetch(url, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setIsLoading(!isLoading);
                    }
                });
        }

    }
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="grow" variant="warning" />
        </div>
    }
    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-center mb-5"> All <span className="text-warning"> Orders</span> </h1>

            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        orders.map(order => <tr>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{order.productName}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleConfirm(order._id)}>Shipping</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDeletOrder(order._id)}>Delete</Button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default AllOrderList;