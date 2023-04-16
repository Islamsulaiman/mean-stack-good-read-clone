// import { toWords } from 'num-to-words';
import mongoose from 'mongoose';
import { Book } from '../models';

type NewBook = {
  title:string,
  description:string,
  author?: string,
  category?:string
  image:string,
  popularityRating?: number,
  avarageRating?: number
};
type UpdatedBook = {
  title?:string,
  description?:string,
  image?: string,
};
type Ratings = {
  avarageRating: number,
  popularityRating: number
};

// 1.createBook
const create = async (data:NewBook) => Book.create(data);
// 2.get All books
const getAll = async (skip:number, limit:number) => {
  if (!limit) {
    const books = await Book.find({}).skip(skip).limit(limit).populate('category')
      .populate('author');

    return books;
  }
  const books = await Book.find({}).skip(skip).limit(limit).populate('category')
    .populate('author');

  let noOfPages = await Book.find({}).count();
  noOfPages /= limit <= 0 ? 1 : limit;
  noOfPages = Math.ceil(noOfPages);

  return { books, noOfPages };
};
// 3.getOneBook
const getOne = async (data:string) => {
  const book = await Book.findById({ _id: data }).populate('category')
    .populate('author');
  return book;
};
// 4.updateBook
const update = async (id:string, data:UpdatedBook) => {
  const book = await Book.findByIdAndUpdate({ _id: id }, data, { new: true });
  return book;
};

// Add category to book
const addCategory = (id: string, category: string) => {
  const categoryId = new mongoose.Types.ObjectId(category);
  return Book.updateOne({ _id: id }, { $push: { category: categoryId } });
};

// Add author to book
const addAuthor = (id: string, author: string) => {
  const authorId = new mongoose.Types.ObjectId(author);
  return Book.updateOne({ _id: id }, { $push: { author: authorId } });
};

// 5.deleteBook
const deleteOne = async (id:string) => {
  const book = await Book.findByIdAndDelete({ _id: id });
  return book;
};

// update book rating
const updateBookRating = async (bookId:string, oldRating:number, newRating:number) => {
  const oldRatingField = `rating.${oldRating.toString()}`;
  const newRatingField = `rating.${newRating.toString()}`;

  if (oldRatingField === newRatingField) {
    const book = Book.findById({ _id: bookId });
    return book;
  }

  const book = await Book.findByIdAndUpdate(
    { _id: bookId },
    { $inc: { [oldRatingField]: -1, [newRatingField]: 1 } },
  );
  return book;
};

// get book avarage rating
const bookAvarageRating = async (bookId:string) => {
  const rating : any = await Book.findOne({ _id: bookId }, { rating: 1, _id: 0 });
  const returnBook = rating.rating;
  return returnBook;
};

const search = async (payload: string) => (await Book.find({ title: { $regex: new RegExp(`^${payload}.*`, 'i') } })
  .exec())
  .slice(0, 10);

// update user avgrating and popularity rating
const updateAvgRating = async (avgRating: number, popUlarityRating: number, bookId: string) => {
  const rating = await Book.findByIdAndUpdate({ _id: bookId }, { avgRating, popUlarityRating });
  return rating;
};

// Get popular books
const getPopular = async () => Book.find().sort({ popUlarityRating: -1 }).limit(5);

export {
  create, getAll, getOne, update, deleteOne, updateBookRating, bookAvarageRating,
  search, updateAvgRating, addAuthor, addCategory, getPopular,
};
