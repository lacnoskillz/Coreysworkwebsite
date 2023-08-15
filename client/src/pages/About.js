import React, { useEffect } from 'react';
import coreypic from './images/coreypic.jpeg';
import './styles/About.css';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.headerdiv');
      if (mainContainer) { // Check if the element exists
        const scrollPosition = window.scrollY;
        mainContainer.style.backgroundPosition = `center ${60 - scrollPosition * 0.07}%`;
      }
    };

    if (window.innerWidth > 960) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.innerWidth > 960) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div>
      
      <div className='headerdiv'>
      <h2 className='Abouth2'>About</h2>
      </div>
      <div className='picaboutdiv'>
      <div className='aboutdiv'>
<p>Meet Corey Harrison, a spirited individual who embarked on a journey from the serene shores of Maui, Hawaii, to the dynamic landscapes of California. Driven by an unwavering passion for building and creating, Corey has taken his experience and love for craftsmanship to establish his own venture – a top-tier handyman services company. With each nail he hammers and every wall he paints, Corey's dedication shines through, a testament to his commitment to turning houses into homes. Beyond his workbench, you'll often find Corey spending time with his girl friend and cruising the streets on his skateboard, a true reflection of his carefree spirit and love for adventure.</p>
      </div>
      <div className='picdiv'>
        <img className='coreyimage' src={coreypic} alt="Corey's harrison and girlfriend" />
      </div>
      </div>
      <div className='calldiv'>
      Call and let me know how I can help you!
      </div>
      <div className='buttondiv'>
<button class="button-89" >Call Now: (808)-808-8080</button>
</div>
    </div>
  );
};

export default About;
