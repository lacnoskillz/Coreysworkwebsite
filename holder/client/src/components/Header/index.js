import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css'
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="Headercontainer">
      <div className="navcontainer">
        <div>
          <Link className="text-dark" to="/">
            <h1 className="m-0">Corey Harrisons Handyman Services</h1>
          </Link>
          <p className="m-0">Get what need to be done, done!</p>
        </div>
        <div className='navbars'>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
             <Link className="btn btn-lg btn-info m-2" to="/main">
                Home
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/about">
                About
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/contact">
                Contact
              </Link>
               <Link className="btn btn-lg btn-info m-2" to="/">
                Reviews
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
