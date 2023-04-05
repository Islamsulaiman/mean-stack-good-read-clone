// import { ObjectId } from 'mongoose';
import { Review } from '../models';

type Reviewdata = {
  bookId: any,
  content : string,
  publishDate?: Date
};

type ReviewEdit = {
  bookId?: any,
  content: string,
  publishDate?: Date
};

// Create review
const create = (data: Reviewdata) => Review.create(data);

// Get reviews for specific book
const get = (id: any) => Review.find({ bookId: id });

// Get review
const getById = (id: any) => Review.findOne({ _id: id });

// edit review by id
const edit = (id: any, data: ReviewEdit) => {
  Review.findById(id);
  return Review.findByIdAndUpdate(id, data, { new: true });
};

// delete review by id
const deleteRev = (id: any) => Review.findByIdAndDelete(id);

export {
  create,
  get,
  getById,
  edit,
  deleteRev,
};
