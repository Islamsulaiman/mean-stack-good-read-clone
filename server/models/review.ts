// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
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
    userId: {
      // required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
