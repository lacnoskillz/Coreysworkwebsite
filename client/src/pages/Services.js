import React, {useEffect} from "react"
import '../pages/styles/Services.css'
const Services = () => {
    useEffect(() => {
        const handleScroll = () => {
          const mainContainer = document.querySelector('.headerdiv3');
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
    <div className='headerdiv3'>
  <div className="overlay2"></div>
  <h2 className='Servicesh2'>Services</h2>
</div>
      </div>
    )
}
export default Services;