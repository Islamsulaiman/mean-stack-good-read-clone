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
const get = async (limit: number, page: number) => {
  const perPage = limit > 0 && limit < 10 ? limit : limit == 0 ? limit = 100 : 5;
  const pageNumber = page || 1;
  const skip = (pageNumber - 1) * perPage;

  const totalAuthors = await Author.countDocuments({});
  const totalPages = Math.ceil(totalAuthors / perPage);

  const authors = await Author.find({})
    .skip(skip)
    .limit(perPage)
    .populate('Books');

  return {
    authors,
    totalPages,
  };
};

// Get author by id
const getById = (id: any) => Author.findById(id).populate('Books');

// edit author by id
const edit = (id: any, data: EditAuthor) => {
  Author.findById(id);
  return Author.findByIdAndUpdate(id, data, { new: true });
};

// Add book to author
// eslint-disable-next-line max-len, max-len
const addBooktoAuth = (id: string, Books: string) => {
  const bookObjectId = new mongoose.Types.ObjectId(Books);
  return Author.updateOne({ _id: id }, { $push: { Books: bookObjectId } });
};

// delete author by id
const deleteAuthor = (id: any) => Author.findByIdAndDelete(id);

// Get popular author
const getPopular = async () => Author.aggregate([
  // Lookup to get all books for each author
  {
    $lookup: {
      from: 'books',
      localField: 'Books',
      foreignField: '_id',
      as: 'books',
    },
  },
  { $unwind: '$books' },
  {
    $group: {
      _id: '$_id',
      fullName: { $first: '$fullName' },
      image: { $first: '$image' },
      popUlarityRating: { $first: '$books.popUlarityRating' },
    },
  },
  // Sort by highest rating first
  { $sort: { popUlarityRating: -1 } },
  // Limit the results to the top 10 authors
  { $limit: 5 },
]);

export {
  create,
  get,
  getById,
  edit,
  deleteAuthor,
  addBooktoAuth,
  getPopular,
};
