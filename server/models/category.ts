// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose, {
  Schema,
} from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies

export const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 255,
    },
    Books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    }],
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
