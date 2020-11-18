import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loginRequest } from '../../store/ducks/auth/actions';

const SignIn = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [ email, setEmail ] = useState(auth.email);
    const [ password, setPassword ] = useState('');
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
    }

    if(auth.loggedIn) {
        return (
            <Redirect push to="/app" />
        );
    }

    return (
        <form onSubmit={onFormSubmit}>
            Email: <input value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" /> <br/>
            <input type="submit" value="Connect" />
        </form>
    );
}

export default SignIn;