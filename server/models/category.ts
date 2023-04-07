// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose, {
  Schema,
} from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoosePaginate from 'mongoose-paginate-v2';

export const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 255,
    },
  },
  {
    timestamps: true,
  },
);
categorySchema.plugin(mongoosePaginate);
interface CategoryType extends mongoose.Document {}
const Category = mongoose.model<
CategoryType,
mongoose.PaginateModel<CategoryType>
>('categories', categorySchema, 'categories');
export default Category;
