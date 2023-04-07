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
      // required: true,
      // unique: true,
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
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
      },
    },
    published_date: {
      type: Date,
    },
  },

);

bookSchema.plugin(mongoosePaginate);
interface BookType extends mongoose.Document {}
const Book = mongoose.model<
BookType,
mongoose.PaginateModel<BookType>
>('books', bookSchema, 'books');
export default Book;
