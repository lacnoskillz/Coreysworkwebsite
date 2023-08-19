const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    required: 'You need to leave a review!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,

  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  updatedAt: {
    type: Date,
    default: null,
    get: (timestamp) => dateFormat(timestamp), 
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Review = model('Review', reviewSchema);

module.exports = Review;
