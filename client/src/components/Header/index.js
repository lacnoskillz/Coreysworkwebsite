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
       
        <button id="headerphone" className="btn btn-m " href="tel:+8083858740">📞(808)-555-5555</button>
      
    </header>
   
  );
};

export default Header;