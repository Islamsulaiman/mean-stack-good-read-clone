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
      maxLength: 30,
      trim: true
    },
    DOB: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    Books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    }],
  },

);

const Author = mongoose.model('Author', authorSchema);

export default Author;
