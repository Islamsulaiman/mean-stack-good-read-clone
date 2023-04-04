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
    page: page || 1,
    limit: limit > 0 && limit < 10 ? limit : 10,
  });
  return categories;
};

export {
  create, getAll,
};
