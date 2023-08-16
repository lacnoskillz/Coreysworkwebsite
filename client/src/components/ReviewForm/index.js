import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import ReactStars from "react-rating-stars-component";
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS } from '../../utils/queries';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
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
  //get user data/ username
  let loggedInProfile = ""
  if(Auth.loggedIn()){
    loggedInProfile = Auth.getProfile()
  }
  const loggedInUsername = loggedInProfile?.data?.username;

  // Use the useQuery hook conditionally
  const { loading: userLoading, data: userData } = useQuery(
    QUERY_USER,
    {
      variables: loggedInUsername ? { username: loggedInUsername } : null,
      skip: !loggedInUsername, // Skip the query if not logged in
    }
  );

  const userReviews = userData?.user?.reviews;
  console.log(userReviews,"reviews")
  //handle submit adding review
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
      <h3>Leave a Review</h3>
  
      {Auth.loggedIn() ? (
        <>
          {userReviews && userReviews.length === 0 ? (
            // Show the form
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
          ) : userReviews && userReviews.length > 0 ? (
            // Display the user's review
            <>
                   <div key={userReviews[0]._id} className="card mb-4">
            <h4 className="card-header bg-dark text-light p-2 m-0">
              You made this Review <br />
              <span style={{ fontSize: '1rem' }}>
                date made {userReviews[0].createdAt}
              </span>
            </h4>
           <ReactStars
           value={userReviews[0].rating}
           edit={false}
           />
            <div className="card-body bg-light p-2">
              <p>{userReviews[0].reviewText}</p>
            </div>
          
          </div>
            </>
          ) : (
            // Handle other cases or show loading state
            <p>Loading...</p>
          )}
        </>
      ) : (
        // Show login/signup message
        <p>
          You need to be logged in to make a review. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
  
};

export default ReviewForm;
