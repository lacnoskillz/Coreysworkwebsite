import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { REMOVE_REVIEW } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';

const ReviewList = ({ reviews, title }) => {

  const [removeReview, { err }] = useMutation(REMOVE_REVIEW);
  const [deleteConfirmationStates, setDeleteConfirmationStates] = useState(
    reviews.map(() => false)
  );
  const [reviewList, setReviewList] = useState(reviews);
  let userRole = "user"
if(auth.loggedIn()){
   userRole = auth.loggedIn ? auth.getProfile().data.role : null;
}
  const handleRemoveReview = async (reviewId, index) => {
    try {
      const { data } = await removeReview({
        variables: {
          reviewId: reviewId,
        },
      });

      setReviewList(reviewList.filter((review) => review._id !== reviewId));

      // Close the confirmation dialog after deletion
      setDeleteConfirmationStates((prevStates) =>
        prevStates.map((state, i) => (i === index ? false : state))
      );

      console.log('Review deleted successfully!');
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(reviewList,"list")
  if (reviewList.length === 0) {
    return <h3>No reviews yet. Be the first!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviewList.map((review, index) => (
        <div key={review._id} className="card mb-4">
          <h4 className="card-header bg-dark text-light p-2 m-0">
            {review.reviewAuthor} <br />
            <span style={{ fontSize: '1rem' }}>
              made this review on {review.createdAt}
            </span><br></br>
            {review.updatedAt != null && (
            <span style={{ fontSize: '1rem' }}>
             updated at {review.updatedAt}
            </span>
            )}
          </h4>
          <ReactStars value={review.rating} edit={false} />
          <div className="card-body bg-light p-2">
            <p>{review.reviewText}</p>
          </div>
          {userRole === 'admin' && (
            <button
              className="btn bg-danger btn-block btn-squared"
              onClick={() =>
                setDeleteConfirmationStates((prevStates) =>
                  prevStates.map((state, i) =>
                    i === index ? !state : state
                  )
                )
              }
            >
              Delete Review
            </button>
          )}
          {deleteConfirmationStates[index] && (
            <div>
              <p>Are you sure you want to delete this review?</p>
              <button
                className="btn btn-danger mr-2"
                onClick={() => handleRemoveReview(review._id, index)}
              >
                Confirm
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  setDeleteConfirmationStates((prevStates) =>
                    prevStates.map((state, i) =>
                      i === index ? false : state
                    )
                  )
                }
              >
                Cancel
              </button>
            </div>
          )}
        {review.comments.length > 0 && (
  <div>
    <Link
      className="btn bg-primary btn-block btn-squared"
      to={`/reviews/${review._id}`}
    >
      View comments
    </Link>
  </div>
)}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;

