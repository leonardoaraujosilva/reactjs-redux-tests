import React, { useState } from 'react';

const SignUp = () => {
    const [ form, setForm ] = useState('');

    const onChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setForm({email: '', password: ''});
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input name="email" placeholder="Email" type="email" onChange={onChangeForm} value={form.email} />
            <input name="password" type="password" onChange={onChangeForm} value={form.password} />
        </form>
    );
}

export default SignUp;