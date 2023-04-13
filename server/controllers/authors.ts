// import { ObjectId } from 'mongoose';
import mongoose from 'mongoose';
import { auth } from '../middlewares/authuntication';
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
const get = async (limit:any, page:any) => {
  const authors = await Author.paginate({}, {
    limit: limit > 0 && limit < 10 ? limit : 5,
    page: page || 1,
  });
  return authors;
};

//Get author by id
const getById = (id: any) => Author.findById(id);


// edit author by id
const edit = (id: any, data: EditAuthor) => {
  Author.findById(id);
  return Author.findByIdAndUpdate(id, data, { new: true });
};

// Add book to author
// eslint-disable-next-line max-len, max-len
const addBook = (id: string, bookId: string) => {
  const bookObjectId = new mongoose.Types.ObjectId(bookId);
  return Author.updateOne({ _id: id }, { $push: { bookId: bookObjectId } });
}


// delete author by id
const deleteAuthor = (id: any) => Author.findByIdAndDelete(id);

export {
  create,
  get,
  getById,
  edit,
  deleteAuthor,
  addBook,
};
