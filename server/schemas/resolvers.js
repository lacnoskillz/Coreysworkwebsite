const { AuthenticationError } = require('apollo-server-express');
const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
     //find info of logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().populate('reviews');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('reviews');
    },
    reviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },
    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, { reviewText, reviewAuthor , rating}) => {
      const review = await Review.create({ reviewText, reviewAuthor, rating });

      await User.findOneAndUpdate(
        { username: reviewAuthor },
        { $addToSet: { reviews: review._id } }
      );

      return review;
    },
    addComment: async (parent, { reviewId, commentText, commentAuthor }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReview: async (parent, { reviewId }) => {
      return Review.findOneAndDelete({ _id: reviewId });
    },
    updateReview: async (parent, { reviewId, rating, reviewText, createdAt }, context) => {
      // You should have the Review model imported and accessible
    
      try {
        // Find the review by its ID
        const review = await Review.findOne({ _id: reviewId });
    
        if (!review) {
          throw new Error("Review not found");
        }
    
        // Update the review fields if provided
        if (rating !== undefined) {
          review.rating = rating;
        }
        if (reviewText !== undefined) {
          review.reviewText = reviewText;
        }
        if (createdAt !== undefined) {
          review.createdAt = createdAt;
        }
    
        // Save the updated review
        await review.save();
    
        return review; // Return the updated review
      } catch (error) {
        throw new Error("Error updating review: " + error.message);
      }
    },
    
    removeComment: async (parent, { reviewId, commentId }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
