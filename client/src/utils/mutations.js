import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($reviewText: String!, $reviewAuthor: String!, $rating: Int!) {
    addReview(reviewText: $reviewText, reviewAuthor: $reviewAuthor, rating: $rating) {
      _id
      rating
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $reviewId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      reviewId: $reviewId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
export const REMOVE_REVIEW = gql`
mutation removeReview($reviewId: ID!) {
  removeReview(reviewId: $reviewId) {
    _id
    rating
    reviewText
    reviewAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const UPDATE_REVIEW = gql`
mutation updateReview($reviewId: ID!, $rating: Int, $reviewText: String, $createdAt: String) {
  updateReview(reviewId: $reviewId, rating: $rating, reviewText: $reviewText, createdAt: $createdAt) {
    _id
    rating
    reviewText
    reviewAuthor
    createdAt
  }
}
`;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import ReactStars from "react-rating-stars-component";
// import { ADD_REVIEW,REMOVE_REVIEW, UPDATE_REVIEW } from '../../utils/mutations';
// import { QUERY_REVIEWS, QUERY_USER } from '../../utils/queries';
// import Auth from '../../utils/auth';
// import { useQuery } from '@apollo/client';

// const ReviewForm = () => {
//   const [reviewText, setReviewText] = useState('');
//   const [rating, setRating] = useState('');
//   const [characterCount, setCharacterCount] = useState(0);
//   const [newReview, setNewReview] = useState(null);
//   const [removeReview, {err}] = useMutation(REMOVE_REVIEW)
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedReviewId, setEditedReviewId] = useState(null);
//   const [editedReviewText, setEditedReviewText] = useState('');
//   const [editedRating, setEditedRating] = useState(0);
//   const [updateReview] = useMutation(UPDATE_REVIEW);
//   const handleEditStart = (reviewId) => {
//     // Retrieve the review data and populate the edit form fields
//     const reviewToEdit = userReviews.find(review => review._id === reviewId);
//     if (reviewToEdit) {
//       setEditedReviewText(reviewToEdit.reviewText);
//       setEditedRating(reviewToEdit.rating);
//       setIsEditing(true);
//       setEditedReviewId(reviewId);
//     }
//   };
//   const handleEditSubmit = async (event) => {
//     event.preventDefault();
  
//     // Send the edited review data to the server using your updateReview mutation
//     try {
//       await updateReview({
//         variables: {
//           reviewId: editedReviewId,
//           rating: editedRating,
//           reviewText: editedReviewText,
//         },
//       });
  
//       // Reset the edit state
//       setIsEditing(false);
//       setEditedReviewId(null);
//       setEditedReviewText('');
//       setEditedRating(0);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleEditChange = (event) => {
//     // Update the state as the user types in the edit form
//     setEditedReviewText(event.target.value);
//   };
  
//   const handleEditRatingChange = (newRating) => {
//     setEditedRating(newRating);
//   };
//   const [addReview, { error }] = useMutation(ADD_REVIEW, {
//     update(cache, { data: { addReview } }) {
//       try {
//         const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

//         cache.writeQuery({
//           query: QUERY_REVIEWS,
//           data: { reviews: [addReview, ...reviews] },
//         });
//         window.location.reload()
//       } catch (e) {
//         console.error(e);
//       }
//     },
//   });
//   //get user data/ username
//   let loggedInProfile = ""
//   if(Auth.loggedIn()){
//     loggedInProfile = Auth.getProfile()
//   }
//   const loggedInUsername = loggedInProfile?.data?.username;

//   // Use the useQuery hook conditionally
//   const { loading: userLoading, data: userData } = useQuery(
//     QUERY_USER,
//     {
//       variables: loggedInUsername ? { username: loggedInUsername } : null,
//       skip: !loggedInUsername, // Skip the query if not logged in
//     }
//   );
// let h3value = ""

//   const userReviews = userData?.user?.reviews;
//   // console.log(userReviews,"userreverere")
//   if(!userReviews || userReviews[0] === undefined){
//     h3value = "Leave a Review"
//   }
//   // console.log(userReviews,"reviews")
//   //handle submit adding review
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       const { data } = await addReview({
//         variables: {
//           rating,
//           reviewText,
//           reviewAuthor: Auth.getProfile().data.username,
//         },
//       });
  
//       setReviewText('');
//       setNewReview(data.addReview); // Set the newly created review data
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const ratingChanged = (newRating) => {
//     console.log(typeof(newRating));
//       setRating(newRating)
//   };
//   const handleChange = (event) => {
//     const { name, value, } = event.target;

//     if (name === 'reviewText' && value.length <= 280) {
//       setReviewText(value);
//       setCharacterCount(value.length);
//     }
//   };

//   const handleRemoveReview = async (reviewId) => {
//     try {
//       const { data } = await removeReview({
//         variables: {
//           reviewId: reviewId
//         },
//         // Optionally, you can update the cache to reflect the removal
       
        
//       });
//       window.location.reload()
//       // Optionally, you can set a message or perform any other actions after the review is removed
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   return (
//     <div>
//       <h3>{h3value}</h3>

//       {Auth.loggedIn() ? (
//         <>
//           {userReviews && userReviews.length === 0 ? (
//             // Show the form for adding reviews
//             <>
//               {/* ... (your form code) */}
//             </>
//           ) : userReviews && userReviews.length > 0 ? (
//             // Display the user's review or edit form
//             <>
//               {newReview ? (
//                 // Display the newly created review
//                 <div key={newReview._id} className="card mb-4">
//                   {/* ... */}
//                 </div>
//               ) : (
//                 // Display the existing user's review or edit form
//                 <div key={userReviews[0]._id} className="card mb-4">
//                   {isEditing && editedReviewId === userReviews[0]._id ? (
//                     // Display the edit form
//                     <form onSubmit={handleEditSubmit}>
//                       {/* ... (your edit form code) */}
//                     </form>
//                   ) : (
//                     // Display the existing user's review
//                     <>
//                       <div>
//                         {/* ... */}
//                         <button
//                           className='btn btn-danger m-3'
//                           onClick={() => handleRemoveReview(userReviews[0]._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </>
//           ) : (
//             // Handle other cases or show loading state
//             <p>Loading...</p>
//           )}
//         </>
//       ) : (
//         // Show login/signup message
//         <p>
//           You need to be logged in to make a review. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };


// export default ReviewForm;