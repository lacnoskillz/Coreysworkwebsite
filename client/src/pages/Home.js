import React, { useEffect } from 'react';
import './styles/Home.css';
import cali from './images/cali3.jpg';
import { Link } from 'react-router-dom';
import home from './images/homeinside.png'
import Card from '../components/Card'
const Home = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const mainContainer = document.querySelector('.servicesimages');
  //     const scrollPosition = window.scrollY;
  //     mainContainer.style.backgroundPositionY = -scrollPosition * 0.04 + 'vh';
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
       <p>Welcome to Corey's Handyman Repair Services, your go-to solution for a
        ll your handyman needs in sunny California. I take 
        pride in being a full-service handyman business, equipped
         to handle a wide array of tasks.Reach out today at (555) 123-4567 
         to discuss your home improvement plans. Let me make your home a better and safer place!

       </p>
       </div>
       <h2 className='ourservicesh2'>Our Services</h2>
       <div className='servicesimages' style={{ backgroundImage: `url(${home})` }}>
       <Card Description="descrip 1" Title="Title1" imageUrl=""/>
       <Card Description="descrip 2" Title="Title2" imageUrl=""/>
    <Card Description="descript3" Title="title3"imageUrl="https://th.bing.com/th/id/OIP.lg3S3tLmLAOjdxJ0PP8g8gHaDo?w=318&h=171&c=7&r=0&o=5&pid=1.7"/>
</div>
      </div>
    
    </div>
  );
};

export default Home;
