import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'

const Footer = () => {


  return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container footer-outer text-center mb-5">
        <h4 className='h4footermadewith'>
          Made with{' '}
          <span className="emoji" role="img" aria-label="hammer" aria-hidden="false">
            &#128295;
          </span>{' '}
          Sample text
        </h4>
        
        <div className='footercontainer'>
          
          <div className="social-links">
      <h4>Socials</h4>
            {/* <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a> */}
            <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>

      
       
        </div>
        
        <div className='allrightsres'>
          <p className="text-center mt-3 copyright">
            &copy; {new Date().getFullYear()} Coreys Handyman Repair Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

