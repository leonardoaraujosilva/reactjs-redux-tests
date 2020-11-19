import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api/webapp';

import SignOut from '../../components/signout';

import './styles.css';

const Home = () => {
    const auth = useSelector(state => state.auth);
    const [orderPage, setOrderPage] = useState({ totalElements: 0, numberOfElements: 0, content: [] });

    const getOrderList = async () => {
        const { data } = await api.get('/api/v1/order');
        setOrderPage(data);
    };

    useEffect(() => {
        getOrderList();
    }, []);

    return (
        <div className="login-form login-text">
            <h1>Welcome {auth.email}!</h1>
            <SignOut />

            <h2>Order list</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th style={{ textAlign: 'left' }}>Client</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderPage.content.length > 0 && orderPage.content.map(each => (
                            <tr key={each.id}>
                                <td>{each.id}</td>
                                <td style={{ textAlign: 'left' }}>{each.clientName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <small>Exibindo {orderPage.numberOfElements} de {orderPage.totalElements} itens</small>
        </div>
    )
}

export default Home;