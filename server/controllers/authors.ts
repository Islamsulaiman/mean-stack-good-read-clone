// import { ObjectId } from 'mongoose';
import { Author } from '../models';

type CreateAuthor = {
  fullName: string
  DOB: Date,
  image: string
};

type EditAuthor = {
  fullName?: string
  DOB?: Date,
  image?: string
};

// Create author
const create = (data: CreateAuthor) => Author.create(data);

// Get authors
const get = () => Author.find();

// edit author by id
const edit = (id: any, data: EditAuthor) => {
  Author.findById(id);
  return Author.findByIdAndUpdate(id, data, { new: true });
};

// delete author by id
const deleteAuthor = (id: any) => Author.findByIdAndDelete(id);

export {
  create,
  get,
  edit,
  deleteAuthor,
};
