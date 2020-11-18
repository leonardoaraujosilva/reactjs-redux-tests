import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutRequest } from '../../store/ducks/auth/actions';

import './styles.css';

const Home = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    
    const logout = () => {
        dispatch(logoutRequest());
    };

    return (
        <div className="login-form login-text">
            <h1>Seja bem vindo {auth.email}!</h1>
            <button onClick={logout}>Desconectar</button>
        </div>
    )
}

export default Home;