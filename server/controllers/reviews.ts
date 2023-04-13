// import { ObjectId } from 'mongoose';
import { Review } from '../models';

type Reviewdata = {
  content : string,
  userId: any,
};

// Create review
const create = (id: any, data: Reviewdata) => Review.create({
  bookId: id,
  content: data.content,
  userId: data.userId,
});

// Get reviews for specific book
const get = (id: string, skip:number, limit:number) => {
  const reviews = Review.find({ bookId: id }).skip(skip).limit(limit).populate('userId');
  return reviews;
};

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
