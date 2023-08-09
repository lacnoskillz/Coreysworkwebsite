import React, {  useState } from 'react';
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
  const initialNumOfCards = 3;
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(initialNumOfCards);

  const cardData = [
    {
      Description: 'descrip asd asdasdas 1',
      Title: 'Repair',
      imageUrl:
        'https://th.bing.com/th/id/OIP.lg3S3tLmLAOjdxJ0PP8g8gHaDo?w=318&h=171&c=7&r=0&o=5&pid=1.7',
    },
    {
      Description: 'descrip 2',
      Title: 'Carpentry',
      imageUrl:
        'https://media.istockphoto.com/photos/carpenter-taking-measurement-picture-id481628382?k=6&m=481628382&s=170667a&w=0&h=B__iljjxXdZIvZGvDB1pJZaeG96YfHaPNnhxbXY4gPY=',
    },
    {
      Description: 'descript3',
      Title: 'Painting',
      imageUrl:
        'https://media.istockphoto.com/photos/painting-picture-id155097002?k=6&m=155097002&s=170667a&w=0&h=e1O77Pum4RfPxqymKScPxTYaapL3OLwZWxUroLW3Kkc=',
    },
    {
      Description: 'descript4',
      Title: 'Plumbing',
      imageUrl: 'https://th.bing.com/th/id/R.8f065d082c52d2b6f5133569909066c6?rik=zLqjIfSV4nhUwQ&riu=http%3a%2f%2fgreenwoodhandymanpros.com%2fwp-content%2fuploads%2f2022%2f06%2fPlumbing-Image-2.jpg&ehk=Gq9ko%2bu6DRUQyf11anvjSGfuBtK%2bw0y8DcY9Q%2bmD%2fDg%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      Description: 'descript5',
      Title: 'Flooring',
      imageUrl: 'https://th.bing.com/th/id/OIP.Y2rM-dWi4BMf8mzctmHSmAHaEz?pid=ImgDet&rs=1',
    },
    {
      Description: 'install',
      Title: 'Installations',
      imageUrl: 'https://th.bing.com/th/id/OIP.rKqxQwY9z8J29hioypAGlQHaE8?pid=ImgDet&rs=1',
    },
    {
      Description: 'drywall',
      Title: 'DryWall',
      imageUrl: 'https://www.lifesavvy.com/p/uploads/2021/07/95b8f811-3.jpg?width=1200',
    },
  ];

  const handleNextClick = () => {
    // If the next card exceeds the total cardData length, do nothing.
    if (endIdx >= cardData.length) {
      return;
    }

    // Increment the indices to show the next card
    setStartIdx((prevStartIdx) => prevStartIdx + 1);
    setEndIdx((prevEndIdx) => prevEndIdx + 1);
  };

  const handlePrevClick = () => {
    // If the previous card goes before the first card, do nothing.
    if (startIdx <= 0) {
      return;
    }

    // Decrease the indices to show the previous card
    setStartIdx((prevStartIdx) => prevStartIdx - 1);
    setEndIdx((prevEndIdx) => prevEndIdx - 1);
  };
  return (
    <div>
      <div className='maincontainer' style={{ backgroundImage: `url(${cali})` }}>
        <div className='mainintro'>
          <p className='maininfo'>Handy Man California</p>
          <p className='mainsubinfo'>RELIABLE, FAIR, AND SAFE - Handyman Services, San Francisco and surrounding areas</p>
          <em className='mainquote'>Contact me today for a free quote and lets work together</em><br></br>
          <Link to="/contact">
            Contact Page
          </Link>
        </div>
      </div>
      <div className='Servicesdiv'>
        <div className='servicestext'>
       <h2>Professional Handyman and Repair Services</h2>
       <p>Welcome to Corey's Handyman Repair Services, your go-to solution for all your handyman needs in sunny California. I take 
        pride in being a full-service handyman business, equipped
         to handle a wide array of tasks. Reach out today at (808) 870-7003 
         to discuss your home improvement plans. Let me make your home a better and safer place!

       </p>
       </div>
       <h2 className='ourservicesh2'>Our Services</h2>
     
      </div>
      <div className="p-3 servicesimages" style={{ backgroundImage: `url(${home})` }}>
  {/* Display only the first 'numOfCards' cards */}
  <button
    onClick={handlePrevClick}
    className={`btn btn-primary nextpage ${startIdx <= 0 ? 'disabled' : ''}`}
    disabled={startIdx <= 0}
  >
    &#8249;
  </button>
  {cardData.slice(startIdx, endIdx).map((card, index) => (
    <Card key={index} {...card} />
  ))}
  <button
    onClick={handleNextClick}
    className={`btn btn-primary nextpage ${endIdx >= cardData.length ? 'disabled' : ''}`}
    disabled={endIdx >= cardData.length}
  >
    &#8250;
  </button>
</div>
     
      
    </div>
    
    
   
  );
};

export default Home;
