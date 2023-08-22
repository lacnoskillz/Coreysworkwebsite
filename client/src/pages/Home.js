import React, {  useState, useEffect
} from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';
import home from './images/house2.jpg'
import Card from '../components/Card'
const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.maincontainer');
      if (mainContainer) { // Check if the element exists
        const scrollPosition = window.scrollY;
        mainContainer.style.backgroundPosition = `center ${60 - scrollPosition * 0.08}%`;
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
  const initialNumOfCards = 3;
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(initialNumOfCards);

  const cardData = [
    {
      Description: "From fixing leaky faucets to patching up broken cabinets, I am here to tackle a wide range of repairs. No matter how big or small the issue, I am dedicated to restoring functionality and aesthetics to your living space.",
      Title: 'Repair',
      imageUrl:
        'https://th.bing.com/th/id/OIP.lg3S3tLmLAOjdxJ0PP8g8gHaDo?w=318&h=171&c=7&r=0&o=5&pid=1.7',
    },
    {
      Description: "From repairing minor damages to crafting custom solutions for small spaces, I take pride in using my woodworking expertise to enhance the functionality and aesthetics of your living environment. Whether it's fixing a wobbly table or creating clever storage solutions, I'm here to add a touch of craftsmanship to every corner of your home.",
      Title: 'Carpentry',
      imageUrl:
        'https://media.istockphoto.com/photos/carpenter-taking-measurement-picture-id481628382?k=6&m=481628382&s=170667a&w=0&h=B__iljjxXdZIvZGvDB1pJZaeG96YfHaPNnhxbXY4gPY=',
    },
    {
      Description: "Let me transform your living space with a fresh coat of paint. As a skilled painter, I take care of every detail, ensuring even application and vibrant results that rejuvenate your home's appearance.",
      Title: 'Painting',
      imageUrl:
        'https://media.istockphoto.com/photos/painting-picture-id155097002?k=6&m=155097002&s=170667a&w=0&h=e1O77Pum4RfPxqymKScPxTYaapL3OLwZWxUroLW3Kkc=',
    },
    {
      Description: "Plumbing issues can be a hassle, but with my expertise, you can count on efficient solutions. From fixing leaks to replacing pipes, I provide reliable plumbing services to keep your home running smoothly.",
      Title: 'Plumbing',
      imageUrl: 'https://th.bing.com/th/id/R.8f065d082c52d2b6f5133569909066c6?rik=zLqjIfSV4nhUwQ&riu=http%3a%2f%2fgreenwoodhandymanpros.com%2fwp-content%2fuploads%2f2022%2f06%2fPlumbing-Image-2.jpg&ehk=Gq9ko%2bu6DRUQyf11anvjSGfuBtK%2bw0y8DcY9Q%2bmD%2fDg%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      Description: "Enhance your home's ambiance with expert flooring installations. With my attention to detail and commitment to quality, I install various flooring types, ensuring a seamless and beautiful finish that adds value to your property.",
      Title: 'Flooring',
      imageUrl: 'https://th.bing.com/th/id/OIP.Y2rM-dWi4BMf8mzctmHSmAHaEz?pid=ImgDet&rs=1',
    },
    {
      Description: "I offer comprehensive installation services, covering everything from appliances to fixtures. With meticulous attention to detail, I ensure that each installation is completed securely and to your satisfaction.",
      Title: 'Installations',
      imageUrl: 'https://th.bing.com/th/id/OIP.rKqxQwY9z8J29hioypAGlQHaE8?pid=ImgDet&rs=1',
    },
    {
      Description: "When it comes to drywall, I'm your go-to handyman for repairs and installations. I provide smooth and flawless surfaces that serve as the perfect foundation for your home's interior design.",
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
      <div className='maincontainer'>
        <div className='mainintro'>
          <p className='maininfo'>Handy Man California</p>
          <p className='mainsubinfo'>
            RELIABLE, FAIR, AND SAFE - Handyman Services, San Diego and surrounding areas
          </p>
          <em className='mainquote'>lets work together</em>
          <br></br>
          <div className='learnaboutdiv'>
          <Link to='/about'>
            <button className='learnabout'>
              <span>MEET YOUR NEW HANDYMAN</span>
            </button>
          </Link>
          </div>
        </div>
      </div>
      
      <div className='Servicesdiv'>
        <div className='servicestext'>
       <h2>Professional Handyman and Repair Services</h2>
       <p>Welcome to Corey's Handyman & Repair Services, your go-to solution for all your handyman needs in sunny California. I take 
        pride in being a full-service handyman business, equipped
         to handle a wide array of tasks. Reach out today at <a href="tel:8088707003">808-870-7003</a> to discuss your home improvement plans. Let me make your home a better and safer place!

       </p>
       </div>
       <h2 className='ourservicesh2'>My Services</h2>
     
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

  {cardData.slice(startIdx, endIdx).map((card, index)=> (
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
