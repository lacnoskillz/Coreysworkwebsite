import React, { useEffect } from 'react';
import './styles/Home.css';
import cali from './images/cali3.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const mainContainer = document.querySelector('.maincontainer');
  //     const scrollPosition = window.scrollY;
  //     mainContainer.style.backgroundPositionY = -scrollPosition * 0.4 + 'px';
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <div className='maincontainer' style={{ backgroundImage: `url(${cali})` }}>
        <div className='mainintro'>
          <p className='maininfo'>Handy Man California</p>
          <p className='mainsubinfo'>RELIABLE, FAIR, AND SAFE - Handyman Services, city Texas and surrounding areas</p>
          <em className='mainquote'>Contact me today for a free quote and lets work together</em><br></br>
          <Link to="/contact">
            Contact Page
          </Link>
        </div>
      </div>
      <div className='Servicesdiv'>
        <div className='servicestext'>
       <h2>Professional Handyman and Repair Services</h2>
       </div>
       <div className='servicesimages'>

</div>
      </div>
    
    </div>
  );
};

export default Home;
