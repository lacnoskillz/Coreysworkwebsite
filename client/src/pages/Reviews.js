import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_REVIEWS } from '../utils/queries';
import '../pages/styles/Review.css'
const Reviews = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      <div className="reviewcontainer">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid black' }}
        >
          <ReviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList
              reviews={reviews}
              title="Recent reviews."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Reviews;
