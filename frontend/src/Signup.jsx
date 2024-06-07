import React, { useState } from 'react';
import Header from './Header';
import { useNavigate, Link, Form } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:4000/api/auth/signup', { email, password });
            console.log('Response from server:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error during API request:', error.response?.data?.message || error.message);
            setErrorMessage(error.response?.data?.message || 'Error during signup');
        }
    };

    return (
        <div className="Signup">
            <Header />
            <main className="Signup-main">
                <h2>S'inscrire</h2>
                <Form onSubmit={handleSubmit} className="form">
                    <input type="email" name="email" placeholder="email" value={email} onChange={handleEmailChange} required />
                    <input type="password" name="mdp" placeholder="mot de passe" value={password} onChange={handlePasswordChange} required />
                    <button type="submit">S'inscrire</button>
                    <Link to="/Login" className="login-link">Déjà un compte? Se connecter</Link>
                </Form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </main>
        </div>
    );
}

export default Signup;
