// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    Book_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
    content: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
    user: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    ],

  },
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
