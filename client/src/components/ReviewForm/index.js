import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import ReactStars from "react-rating-stars-component";
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS } from '../../utils/queries';

import Auth from '../../utils/auth';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          rating,
          reviewText,
          reviewAuthor: Auth.getProfile().data.username,
        },
      });

      setReviewText('');
    } catch (err) {
      console.error(err);
    }
  };
  const ratingChanged = (newRating) => {
    console.log(typeof(newRating));
      setRating(newRating)
  };
  const handleChange = (event) => {
    const { name, value, } = event.target;

    if (name === 'reviewText' && value.length <= 280) {
      setReviewText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Tell us how we did!</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="reviewText"
                placeholder="Add review here..."
                value={reviewText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <ReactStars
            
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Review
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to make a review. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
