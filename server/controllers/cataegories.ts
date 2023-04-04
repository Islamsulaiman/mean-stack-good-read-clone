import { Category } from '../models';

// data types
type NewCategory = {
  name: string
};

// 1.create new category
const create = (data:NewCategory) => Category.create(data);

export {
  create,
};
