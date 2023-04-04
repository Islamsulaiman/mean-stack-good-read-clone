// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import paginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

export const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  },
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
