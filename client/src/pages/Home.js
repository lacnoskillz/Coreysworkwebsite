
import React from 'react';
import './styles/Home.css'
import cali from './images/cali3.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
   
    return (
      <div>
    <div className='maincontainer' style={{backgroundImage: `url(${cali})`}}>
        <div className='mainintro'>
        <p className='maininfo'>Handy Man California</p>
        <p className='mainsubinfo'>RELIABLE,FAIR, AND SAFE - Handyman Services, city Texas and surronding areas</p>
        <em className='mainquote'>Contact me today for a free quote and lets work together</em><br></br>
        <Link  to="/contact">
       Contact Page
            </Link>
        </div>
        
    </div>
    <div></div>
    </div>
    );
  };


export default Home;