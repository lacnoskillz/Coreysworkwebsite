import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css'
import Nav from '../Nav'
import logo from '../../pages/images/hand.png'

const Header = () => {
  
  return (
    <header className="Headercontainer">
      
        <div>
        <Link style={{ textDecoration: 'none' }}className="text-dark" to="/">
        <img src={logo} className='logo' alt="logo"></img>
            </Link>
          
        </div>
        <div className='navdiv'>
          <Nav/>
          
        </div>
      
      
    </header>
  );
};

export default Header;
