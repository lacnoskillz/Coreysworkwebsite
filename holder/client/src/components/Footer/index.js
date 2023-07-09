import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with &#128295;
          <span
            className="emoji"
            role="img"
            aria-label="hammer"
            aria-hidden="false"
          >
            
          </span>{' '}
          Sample text
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
