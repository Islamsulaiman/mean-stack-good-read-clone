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
export {
  create, getAll, getOne,
};
