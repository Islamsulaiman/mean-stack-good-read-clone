// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const authorSchema = new Schema(
  {
    fullName: {
      type: String,
      unique: true,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    DOB: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  },

);

const Author = mongoose.model('Author', authorSchema);

export default Author;
