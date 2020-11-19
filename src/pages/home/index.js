import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api/webapp';

import SignOut from '../../components/signout';

import './styles.css';

const INITIAL_ORDER_LIST = { totalElements: 0, numberOfElements: 0, pageable: { offset: 0 }, content: [] };

const Home = () => {
    const auth = useSelector(state => state.auth);
    const [orderPage, setOrderPage] = useState(INITIAL_ORDER_LIST);
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(0);

    const nextPage = async () => {
        if(pageIndex < orderPage.totalPages - 1)
            setPageIndex(pageIndex + 1);
    }

    const previousPage = async () => {
        if(pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    }

    const getOrderList = async () => {
        setLoading(true);
        const { data } = await api.get('/api/v1/order', {
            params: {
                page: pageIndex
            }
        });
        setLoading(false);
        setOrderPage(data);
    };

    useEffect(() => { getOrderList() }, [pageIndex]);

    return (
        <div className="login-form login-text">
            <h1>Welcome {auth.email}!</h1>
            <SignOut />

            <h2>Order list</h2>

            <button onClick={getOrderList}>Refresh</button><br />

            <button onClick={previousPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
            <br />

            {
                loading && <small>Loading...</small>
            }
            {
                !loading && <table>
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
            }
            <small>Show {orderPage.numberOfElements > 0? orderPage.pageable.offset + 1 : 0} to {orderPage.pageable.offset + orderPage.numberOfElements} of {orderPage.totalElements} items</small> <br/>
            <small>Page {orderPage.number + 1} of {orderPage.totalPages}</small>
        </div>
    )
}

export default Home;