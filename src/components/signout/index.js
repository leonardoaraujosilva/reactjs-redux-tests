import React from 'react';
import { useDispatch } from 'react-redux';

import { logoutRequest } from '../../store/ducks/auth/actions';

const SignOut = () => {
    const dispatch = useDispatch();
    
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(logoutRequest());
    };
    return (
        <button onClick={logout}>Desconectar</button>
    )
}

export default SignOut
