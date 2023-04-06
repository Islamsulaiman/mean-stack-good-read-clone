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
const get = (id: any, limit:any, page:any) => Review.paginate({ bookId: id }, {
  limit: limit > 0 && limit < 10 ? limit : 5,
  page: page || 1,
});

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
