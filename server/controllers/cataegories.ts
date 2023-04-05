import { Category } from '../models';

// data types
type NewCategory = {
  name: string
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
const getOne = async (id:string) => {
  const category = await Category.findById({ id });
  return category;
};
// 4.update
const update = async (id:any, data:NewCategory) => {
  const category = await Category.findByIdAndUpdate({ id }, data, { new: true });
  return category;
};
// 5.delete
const deleteOne = async (id:any) => {
  const category = await Category.findByIdAndDelete({ id });
  return category;
};
export {
  create, getAll, getOne, update, deleteOne,
};
