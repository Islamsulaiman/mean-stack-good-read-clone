// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    description: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1024,
    },
    // image: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   minLength: 5,
    //   maxLength: 1024,
    // },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },

    ],

    author: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
    },
    ],
    rating: {
      type: Number,
      // required: true,
      min: 0.0,
      max: 5.0,
    },
    published_date: {
      type: Date,
    },
  },

);

const Book = mongoose.model('Book', bookSchema);

export default Book;
