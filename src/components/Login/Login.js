import React, { useState } from 'react';
import './Login.css';
import Nav from '../Nav/Nav';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = () => {
        const { username, password } = formData;

        // Password validation
        if (password.length < 8 || password.length > 12) {
            alert("Your password should be within 8-12 characters");
            return;
        }

        console.log("Username:", username);
        console.log("Password:", password);

        //code for sending the login data to the server

    };

    return (
        <div>
            <Nav/>
            <div className="login-container">
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="button" onClick={submitForm}>Login</button>
            </form>
        </div>
        </div>

    );
}

export default Login;
