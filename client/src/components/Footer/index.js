import React from 'react';

import './Footer.css'

const Footer = () => {
 

  return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container text-center mb-5">

        <div className="social-links">
          {/* Add social media links here */}
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <h4>
          Made with{' '}
          <span className="emoji" role="img" aria-label="hammer" aria-hidden="false">
            &#128295;
          </span>{' '}
          Sample text
        </h4>
      </div>

      <div className="footer-navigation text-center">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>

      <p className="text-center mt-3 copyright">
        &copy; {new Date().getFullYear()} Coreys Handyman Repair Service. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

