// import { ObjectId } from 'mongoose';
import { Review } from '../models';

type Reviewdata = {
  content : string,
  publishDate: Date
};

// Create review
const create = (data: string) => Review.create(data);

// Get reviews
const get = () => Review.find();

// Get review
const getById = (id: any) => Review.find(id);

// edit review by id
const edit = (id: any, data: Reviewdata) => {
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
