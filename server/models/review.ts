// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;
import mongoosePaginate from 'mongoose-paginate-v2';
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

// const Review = mongoose.model('Review', reviewSchema);

reviewSchema.plugin(mongoosePaginate);
interface ReviewType extends mongoose.Document {}

const Review = mongoose.model<ReviewType, mongoose.PaginateModel<ReviewType>>('reviews', reviewSchema, 'reviews');

export default Review;
