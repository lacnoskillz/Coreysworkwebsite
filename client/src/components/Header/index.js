import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css'

import logo from '../../pages/images/hand.png'

const Header = () => {
  
  return (
    <header className="Headercontainer">
      
        <div>
        <Link style={{ textDecoration: 'none' }}className="text-dark" to="/">
        <img src={logo} className='logo' alt="logo"></img>
            </Link>
          
        </div>
       
        <a  className="headerphone" href="tel:+8088707003">📞(808) 870-7003</a>
      
    </header>
   
  );
};

export default Header;
