import { Category } from '../models';

// data types
type NewCategory = {
  name: string
};

type UpdateCategory = {
  name?: string
};
// 1.create new category
const create = (data:NewCategory) => Category.create(data);

// 2.get all categories
const getAll = async (limit:any, page:any) => {
  const categories = await Category.paginate({}, {
    limit: limit > 0 && limit < 10 ? limit : 5,
    page: page || 1,
  });
  return categories;
};
// 3.get One Category
const getOne = async (data:string) => {
  const category = await Category.findOne({ _id: data });
  return category;
};
// 4.update
const update = async (id: string, data:UpdateCategory) => {
  const category = await Category.findOneAndUpdate({ _id: id }, data);
  return category;
};
// 5.delete
const deleteOne = async (id:string) => {
  const category = await Category.findByIdAndDelete({ _id: id });
  return category;
};
export {
  create, getAll, getOne, update, deleteOne,
};
