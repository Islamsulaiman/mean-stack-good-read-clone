// import { ObjectId } from 'mongoose';
import { Review } from '../models';

type Reviewdata = {
  content : string,
  userId: any,
};

// Create review
const create = (id: any, data: Reviewdata) => Review.create({ bookId: id, data });

// Get reviews for specific book
const get = (id: any) => Review.find({ bookId: id });

// edit review
const edit = (id: any, content: string, userId: any) => Review.findOneAndUpdate(
  {
    bookId: id,
    userId,
  },
  { $set: { content } },
);

// delete review by id
const deleteRev = (id: any, userId: any) => Review.findOneAndDelete({
  bookId: id,
  userId,
});

export {
  create,
  get,
  edit,
  deleteRev,
};
