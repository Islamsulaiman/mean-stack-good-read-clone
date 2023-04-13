import { Category } from '../models';

// data types
type NewCategory = {
  name: string
};

// 1.create new category
const create = (data:NewCategory) => Category.create(data);

// 2.get all categories
const getAll = async (skip:number, limit:number) => Category.find({}).skip(skip).limit(limit);

// 3.get One Category
const getOne = async (data:string) => {
  const category = await Category.findOne({ _id: data });
  return category;
};

// 4.update
const update = async (id: string, data:NewCategory) => {
  const category = await Category.findByIdAndUpdate({ _id: id }, data, { new: true });
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
