import React, { useEffect, useRef, useState } from 'react';

const Reviews2 = () => {
  const [placeDetails, setPlaceDetails] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const placeId = 'ChIJZ92Qj31CXIYR1i6OU-1uHp0';

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;

    window.initMap = () => {
      const service = new window.google.maps.places.PlacesService(mapContainerRef.current);

      const request = {
        placeId: placeId,
        fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'reviews']
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaceDetails(place); // Store the place details in state
        } else {
          console.error('Error fetching place details:', status);
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
     <h1>Google Reviews</h1>
{placeDetails ? (
  <div>
    <h2>{placeDetails.name}</h2>
    <p>Rating: {placeDetails.rating}</p>
    <p>Phone: {placeDetails.formatted_phone_number}</p>
    <div>
      <h3>Reviews:</h3>
      {placeDetails.reviews.map((review, index) => (
        <div key={index}>
          <p>Author: {review.author_name}</p>
          <p>Rating: {review.rating}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  </div>
) : (
  <p>Loading place details...</p>
)}

      <div ref={mapContainerRef}></div>
    </div>
  );
};

export default Reviews2;



  