// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose, {
  Schema,
} from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoosePaginate from 'mongoose-paginate-v2';

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
      },
    ],

    author: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
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

// bookSchema.plugin(mongoosePaginate);
// interface BookType extends mongoose.Document {}
// const Book = mongoose.model<
// BookType,
// mongoose.PaginateModel<BookType>
// >('books', bookSchema, 'books');
// export default Book;

const Book = mongoose.model('Book', bookSchema);

export default Book;