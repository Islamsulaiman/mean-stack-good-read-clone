import { Request, Response } from 'express';
import {
  create, get, edit, deleteRev,
} from '../controllers/reviews';
import { User } from '../models';

const addReview = async (req: Request, res: Response) => {
  const { content, userId } = req.body;
  const { id } = req.params;
  const review = await create(id, { content, userId });
  return res.status(200).json({ message: 'Review is created successfully', review });
};

const getReviews = async (req: Request, res: Response) => {
  const skip = parseInt(req.query.skip as string, 10);
  const limit = parseInt(req.query.limit as string, 10);

  const { id } = req.params;

  const reviews = await get(id, skip, limit);
  return res.status(200).json(reviews);
};

const editReview = async (req: Request, res: Response) => {
  const { content, userId } = req.body;
  const { id } = req.params; // book id
  //  const userId = '643b11f461dee46ad0581e9b'; // we will get it from front
  await edit(id, content, userId);
  return res.status(200).json({ message: 'Review is updated successfully' });
};

const deleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const { userId } = req.body;
  // const userId = '643b11f461dee46ad0581e9b'; // we will get it from front
  const deletedReview = await deleteRev(id);
  if (!deletedReview) throw new Error("Review doens't exist");
  return res.status(200).json({ message: 'Review has been deleted successfully' });
};

export {
  addReview,
  getReviews,
  editReview,
  deleteReview,
};
