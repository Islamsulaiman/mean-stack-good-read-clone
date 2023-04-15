import mongoose from 'mongoose';
import { Category } from '../models';

// data types
type NewCategory = {
  name: string
};

// 1.create new category
const create = (data:NewCategory) => Category.create(data);

// 2.get all categories
const getAll =  async (limit: number, page: number) => {
  const perPage = limit > 0 && limit < 10 ? limit : limit == 0 ? limit = 100 : 5;
  const pageNumber = page || 1;
  const skip = (pageNumber - 1) * perPage;

  const totalCategories = await Category.countDocuments({});
  const totalPages = Math.ceil(totalCategories / perPage);

  const categories = await Category.find({})
    .skip(skip)
    .limit(perPage)
    .populate('Books');

  return {
    categories,
    totalPages
  }
};

// 3.get One Category
const getOne = (id: any) => Category.findById(id).populate('Books');;


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


const addBook = (id: string, Books: string) => {
  const bookObjectId = new mongoose.Types.ObjectId(Books);
  return Category.updateOne({ _id: id }, { $push: { Books: bookObjectId } });
}
export {
  create, getAll, getOne, update, deleteOne, addBook
};
