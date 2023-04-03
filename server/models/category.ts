// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
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
