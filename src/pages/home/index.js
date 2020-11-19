import React from 'react';
import { useSelector } from 'react-redux';

import SignOut from '../../components/signout';

import './styles.css';

const Home = () => {
    const auth = useSelector(state => state.auth);

    return (
        <div className="login-form login-text">
            <h1>Seja bem vindo {auth.email}!</h1>
            <SignOut />
        </div>
    )
}

export default Home;