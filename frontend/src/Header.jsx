import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Header.css";
import PropTypes from 'prop-types';

function Header({ user }) {

  const HandleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("user");
      localStorage.removeItem("data");
      axios.get("http://localhost:4000/logout", { withCredentials: true })
      window.location.reload();
    } catch (error) {
      console.error("Error Logout: ", error.message);
    }
  }

  return (
    <header className="App-header">
      <div className="header-content">
        <div className="site-name">
          <Link to="/">HarmonyHub</Link>
        </div>
        {!user &&
        <div className="login">
          <Link to="/Login">Se connecter</Link>
        </div>
        }
        {user &&
          <div className="logout">
            <Link to="/" onClick={HandleLogout}>Se déconnecter</Link>
          </div>
        }
      </div>
    </header>
  );

  Header.propTypes = {
    user: PropTypes.string,
  };
}

export default Header;