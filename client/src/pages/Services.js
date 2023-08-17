import React, {useEffect} from "react"
import '../pages/styles/Services.css'
import Card from "../components/Card";
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
    return (
      <div>
    <div className='headerdiv3'>
  <div className="overlay2"></div>
  <h2 className='Servicesh2'>Services</h2>
</div>
      <div className="servicescontainer">
        {cardData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
    )
}
export default Services;