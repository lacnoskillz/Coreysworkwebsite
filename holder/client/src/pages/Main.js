
import React from 'react';
import './styles/Main.css'
import cali from './images/cali3.jpg'

const Main = () => {
   
    return (
    <div className='maincontainer' style={{backgroundImage: `url(${cali})`}}>
        <div className='mainintro'>
        <p className='maininfo'>Handy Man California</p>
        <p className='mainsubinfo'>RELIABLE,FAIR, AND SAFE - Handyman Services, city Texas and surronding areas</p>
        <em className='mainquote'>Lets work together</em>
        </div>
        
    </div>
    );
  };


export default Main;