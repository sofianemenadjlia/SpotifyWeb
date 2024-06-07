import React, { useState } from 'react';
import Header from './Header';
import { useNavigate, Link, Form } from 'react-router-dom';
import { faSpotify, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleGoogleLogin = () => {
    // Redirect to Google login
    window.location.href = "http://localhost:4000/api/auth/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("userEmail", email);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("data", JSON.stringify(response.data));
      console.log("Server response:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error in API request:", error.message);
      setErrorMessage("Identifiants incorrects");
    }
  };

  return (
    <div className="Login">
            <Header />
            <main className="Login-main">
                <h2>Se connecter</h2>
                <Form onSubmit={handleSubmit} className="form">
                    <input type="email" name="email" placeholder="email" value={email} onChange={handleEmailChange} required />
                    <input type="password" name="mdp" placeholder="mot de passe" value={password} onChange={handlePasswordChange} required />
                    <button onClick={handleGoogleLogin}>Se connecter avec Google <FontAwesomeIcon className="icon" icon={faGoogle} /></button>
                    <button type="submit">Se connecter</button>
                    {/* <button>Se connecter avec Spotify <FontAwesomeIcon classname="icon" icon={faSpotify}/></button> */}
                    <Link to="/signup" className="signup-link">Pas encore de compte? S'inscrire</Link>
                </Form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </main>
        </div>
  );
};

export default Login;