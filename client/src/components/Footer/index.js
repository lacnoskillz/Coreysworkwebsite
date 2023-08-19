import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' instead of 'smooth' for instant scrolling
    });
  };

  return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container footer-outer text-center mb-5">
        <h4 className='h4footermadewith'>
          Building Solutions{' '}
          <span className="emoji" role="img" aria-label="hammer" aria-hidden="false">
            &#128296;
          </span>{' '}
          Nailing Every Detail
        </h4>

        <div className='footercontainer'>

          <div className="social-links">
            <h4>Socials</h4>
            {/* <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a> */}
            <a href="https://www.facebook.com/corey.harrison.3785" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sk808corey/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div className="footercontact">
            <h4>Contact</h4>
            <a href="http://maps.google.com/?q=San Diego California"><i className="bi bi-house-fill"></i>Address</a>
            <p className='footercontactptag'>City-Name California</p>
            <a href="mailto:name@email.com"><i className="bi bi-envelope-fill"></i>Email</a>
            <p className='footercontactptag'>Sample@example.com</p>
            <a href="tel:8088707003"><i className="bi bi-telephone-fill"></i>Phone</a>
            <p className='footercontactptag'>808-870-7003</p>
          </div>
          <div className="footer-navigation text-center">
            <h4>Links</h4>
            <Link className="footer-link" to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link className="footer-link" to="/about" onClick={scrollToTop}>
              About
            </Link>
            <Link className="footer-link" to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
            {auth.loggedIn() ? (
          <Link className="footer-link" to="/reviews" onClick={scrollToTop}>
          Reviews
        </Link>
        
      ) : (
        // Render "Login" and "Sign Up" links when the user is not logged in
        <>
          <Link className="footer-link" to="/login" onClick={scrollToTop}>
            Login
          </Link>
          <Link className="footer-link" to="/signup" onClick={scrollToTop}>
            Sign Up
          </Link>
        </>
      )}
          </div>



        </div>

        <div className='allrightsres'>
          <p className="text-center mt-3 copyright">
            &copy; {new Date().getFullYear()} Corey's Handyman & Repair Services. All rights reserved.
          </p>
          <p className="text-center mt-3 made-by">
            Site made by Kai <a href="https://github.com/lacnoskillz"><i className="bi bi-github"></i></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

