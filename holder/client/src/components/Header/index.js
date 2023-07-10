import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css'

import logo from '../../pages/images/handyman.png'
const Header = () => {
  
  return (
    <header className="Headercontainer">
      
        <div>
          <img src={logo} className='logo' alt="logo"></img>
        </div>
        <div>
          <Link style={{ textDecoration: 'none' }}className="text-dark" to="/">
            <h1 className="m-0">Corey Harrisons Handyman Services</h1>
          </Link>
          <p className="m-0">Get what need to be done, done!</p>
        </div>
      
      
    </header>
  );
};

export default Header;
