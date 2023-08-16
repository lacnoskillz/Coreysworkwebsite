import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-4">
            <h4 className="card-header bg-dark text-light p-2 m-0">
              {review.reviewAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                made this review on {review.createdAt}
              </span>
            </h4>
           <ReactStars
           value={review.rating}
           edit={false}
           />
            <div className="card-body bg-light p-2">
              <p>{review.reviewText}</p>
            </div>
            <Link
              className="btn bg-primary btn-block btn-squared"
              to={`/reviews/${review._id}`}
            >
              Join the discussion.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
