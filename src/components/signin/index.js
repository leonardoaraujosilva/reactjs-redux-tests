import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loginRequest } from '../../store/ducks/auth/actions';
import api from '../../services/api';

const SignIn = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [ form, setForm ] = useState({ username: auth.email, password: '' });
    const [ errorMessage, setErrorMessage ] = useState('');

    const onChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setErrorMessage.apply('');

        api.post('/api/v1/auth/token', form)
            .then(({ data }) => {
                localStorage.setItem('token', data.accessToken);
                dispatch(loginRequest(data));
            })
            .catch((error) => {
                console.log(error);
                var { data } = error.response;
                setErrorMessage(`${data.title}: ${data.description}`);
            });
    }

    if(auth.token) {
        return (
            <Redirect push to="/app" />
        );
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input name="username" placeholder="Email" type="email" onChange={onChangeForm} value={form.username} /> <br/>
            <input name="password" placeholder="Password" type="password" onChange={onChangeForm} value={form.password} /> <br/>
            { errorMessage }<br/>
            <input type="submit" value="Connect" />
        </form>
    );
}

export default SignIn;