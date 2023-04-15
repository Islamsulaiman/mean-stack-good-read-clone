// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose, {
  Schema,
} from 'mongoose';

export const bookSchema = new Schema(
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
    image: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 1024,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
    ],

    author: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
    ],
    rating: {
      type: Object,
      default: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    },
    published_date: {
      type: Date,
    },
  },

);

const Book = mongoose.model('Book', bookSchema);

export default Book;
