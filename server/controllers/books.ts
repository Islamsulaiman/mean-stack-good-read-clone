// import { toWords } from 'num-to-words';
import { Book } from '../models';

type NewBook = {
  title:string,
  description:string,
  author?: string,
  category?:string
  image:string,
};
type UpdatedBook = {
  title?:string,
  description?:string,
  image?: string,
};
// 1.createBook
const create = async (data:NewBook) => Book.create(data);
// 2.get All books
const getAll = async (skip:number, limit:number) => {
  const books = await Book.find({}).skip(skip).limit(limit).populate('category')
    .populate('author');

  return books;
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
// 5.deleteBook
const deleteOne = async (id:string) => {
  const book = await Book.findByIdAndDelete({ _id: id });
  return book;
};

// update book rating
const updateBookRating = async (bookId:string, oldRating:number, newRating:number) => {
  const oldRatingField = `rating.${oldRating.toString()}`;
  const newRatingField = `rating.${newRating.toString()}`;

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

const search = async (payload: string) => (await Book.find({ title: { $regex: new RegExp('^' + payload + '.*', 'i') } })
  .exec())
  .slice(0,10)
export {
  create, getAll, getOne, update, deleteOne, updateBookRating, bookAvarageRating, search
};
