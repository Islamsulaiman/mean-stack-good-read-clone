// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;
import mongoosePaginate from 'mongoose-paginate-v2';

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
    bookId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    }],
  },

);


authorSchema.plugin(mongoosePaginate);
interface AuthorType extends mongoose.Document {}
const Author = mongoose.model<
AuthorType,
mongoose.PaginateModel<AuthorType>
>('authors', authorSchema, 'authors');

export default Author;
