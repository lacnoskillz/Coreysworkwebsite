// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../Nav/Nav.css';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  return (
    <nav className="navcontainer">
      <div className='navdiv'>
        {Auth.loggedIn() ? (
          <div>
          <Link className="btn btn-sm btn-info m-2" to="/">
              Home
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/about">
              About
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/contact">
              Contact
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/reviews">
              Reviews
            </Link>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link className="btn btn-sm btn-info m-2" to="/">
              Home
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/about">
              About
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/contact">
              Contact
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/reviews">
              Reviews
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-sm btn-info m-2" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Nav;
