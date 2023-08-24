import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      reviews {
        _id
        rating
        reviewText
        createdAt
        updatedAt
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviews {
      _id
      rating
      reviewText
      reviewAuthor
      createdAt
      updatedAt
      comments{
          commentAuthor
        }
    }
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
      _id
      rating
      reviewText
      reviewAuthor
      createdAt
      updatedAt
      comments {
        _id
        commentText
        createdAt
        commentAuthor
      }
    }
  }
`;
//declare query for getting me that has user info
export const QUERY_ME = gql`
{
me {
_id
email
password
username
reviews
}
}`;