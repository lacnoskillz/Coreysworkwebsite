import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import ReactStars from "react-rating-stars-component";
import { ADD_REVIEW,REMOVE_REVIEW, UPDATE_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_USER} from '../../utils/queries';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [newReview, setNewReview] = useState(null);
  const [removeReview, {err}] = useMutation(REMOVE_REVIEW)
  const [show, setShow] = useState(false);
    const [editedReviewId, setEditedReviewId] = useState(null);
    const [editedReviewText, setEditedReviewText] = useState('');
    const [editedRating, setEditedRating] = useState(0);
    const [updateReview] = useMutation(UPDATE_REVIEW);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleEditSubmit = async (event) => {
    event.preventDefault();
  
    // Send the edited review data to the server using your updateReview mutation
    try {
      await updateReview({
        variables: {
          reviewId: editedReviewId,
          rating: editedRating,
          reviewText: editedReviewText,
        },
      });
  
      // Reset the edit state
     
      setEditedReviewId(null);
      setEditedReviewText('');
      setEditedRating(0);
    } catch (error) {
      console.error(error);
    }
    window.location.reload()
  };
    const handleEditChange = (event) => {
    // Update the state as the user types in the edit form
    setEditedReviewText(event.target.value);
  };
  
  const handleEditRatingChange = (newRating) => {
    setEditedRating(newRating);
  };
  const [addReview, { error }] = useMutation(ADD_REVIEW,
     {
    update(cache, { data: { addReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] },
        });
        window.location.reload()
      } catch (e) {
        console.error(e);
      }
    },
  } );
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
let h3value = ""

  const userReviews = userData?.user?.reviews;
 
  // console.log(userReviews,"userreverere")
  if(!userReviews || userReviews[0] === undefined){
    h3value = "Leave a Review"
  }
  // console.log(userReviews,"reviews")
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
      setNewReview(data.addReview); // Set the newly created review data
    } catch (err) {
      console.error(err);
    }
  };
  const ratingChanged = (newRating) => {
    // console.log(typeof(newRating));
      setRating(newRating)
  };
  const handleChange = (event) => {
    const { name, value, } = event.target;

    if (name === 'reviewText' && value.length <= 280) {
      setReviewText(value);
      setCharacterCount(value.length);
    }
  };

  const handleRemoveReview = async (reviewId) => {
    try {
      await removeReview({
        variables: {
          reviewId: reviewId
        },
        // Optionally, you can update the cache to reflect the removal
       
        
      });
      window.location.reload()
      // Optionally, you can set a message or perform any other actions after the review is removed
    } catch (err) {
      console.error(err);
    }
    
  };
 
  return (
    <div>
      <h3>{h3value}</h3>
  
      {Auth.loggedIn() && Auth.getProfile().data.role != 'admin'? (
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
            {newReview ? (
  // Display the newly created review
  <div key={newReview._id} className="card mb-4">
    <h4 className="card-header bg-dark text-light p-2 m-0">
      You made this Review <br />
      <span style={{ fontSize: '1rem' }}>
        date made {newReview.createdAt}
      </span>
    </h4>
    <ReactStars
      value={newReview.rating}
      edit={false}
    />
    <div className="card-body bg-light p-2">
      <p>{newReview.reviewText}</p>
    </div>
  </div>
) : (
  // Display the existing user's review
  <div key={userReviews[0]._id} className="card mb-4">
            <h4 className="card-header bg-dark text-light p-2 m-0">
              You made this Review <br />
              <span style={{ fontSize: '1rem' }}>
                on {userReviews[0].createdAt}
              </span><br></br>
              {userReviews[0].updatedAt !== null && (
              <span style={{ fontSize: '1rem' }}>
                updated at {userReviews[0].updatedAt}
              </span>
              )}
            </h4>
           <ReactStars
           value={userReviews[0].rating}
           edit={false}
           />
            <div className="card-body bg-light p-2">
              <p>{userReviews[0].reviewText}</p>
            </div>
            <div>
            <Button variant="primary"   onClick={() => {
    handleShow();
    setEditedReviewId(userReviews[0]._id); // Set the review ID for editing
    setEditedRating(userReviews[0].rating); // Set the initial rating for editing
    setEditedReviewText(userReviews[0].reviewText); // Set the initial review text for editing
  }}>
        edit
      </Button>
          <button className='btn btn-danger m-3 ' onClick={() => handleRemoveReview(userReviews[0]._id)}>delete</button>
          </div>
          </div>
          
            ) 
            }
            
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
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Rating</Form.Label>
                  <ReactStars
                    count={5}
                    onChange={handleEditRatingChange}
                    value={editedRating}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={editedReviewText}
                    onChange={handleEditChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleEditSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
    </div>
    
  );
  
};

export default ReviewForm;
