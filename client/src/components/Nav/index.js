import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../Nav/Nav.css';

const Nav = () => {
  // toggle hamburger nav collapse when link is clicked
  const [isNavOpen, setIsNavOpen] = useState(false);
// collapse navbar on click
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  //scroll to top then call toggleNav to collapse Navbar
  const scrollToTop = () => {
    // Create a Promise to wait for the scroll to complete
    const scrollToTopPromise = new Promise((resolve) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      
    resolve()
   
    });
  
    scrollToTopPromise.then(() => {
      toggleNav();
    });
  };
  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

 
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container">
       <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`} id="navbarCollapse">
          {Auth.loggedIn() ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={scrollToTop}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews" onClick={scrollToTop}>
                  Reviews
                </Link>
              </li> 
              <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={scrollToTop}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews" onClick={scrollToTop}>
                  Reviews
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={scrollToTop}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup" onClick={scrollToTop}>
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;


