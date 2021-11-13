import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const UserOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://shielded-scrubland-27688.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {
                const findOrder = data.filter(data => data.email == user?.email);
                setOrders(findOrder);
            })
            .finally(() => setIsLoading(false));


    }, []);
    const handleDeletOrder = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://shielded-scrubland-27688.herokuapp.com/${id}`;
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
    }
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="grow" variant="warning" />
        </div>
    }
    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-center mb-5"> My <span className="text-warning"> Orders</span> </h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Package Title</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => <tr>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.address}</td>
                            <td>{order?.title}</td>
                            <td>{order?.price}</td>
                            <td>{order?.status}</td>
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

export default UserOrders;