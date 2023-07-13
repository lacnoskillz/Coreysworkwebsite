import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import Auth from '../../utils/auth';
import '../Nav/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navcontainer">
      <div className={isOpen ? 'navbars open' : 'navbars'}>
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-sm btn-info m-2" to="/main">
              Home
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/about">
              About
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/contact">
              Contact
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/">
              Reviews
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-sm btn-light m-2" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>

      <div className={isOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
        <button className="btn btn-sm btn-info m-2" onClick={toggleMenu}>
          ☰ Menu
        </button>
      </div>
    </nav>
  );
};

export default Nav;
