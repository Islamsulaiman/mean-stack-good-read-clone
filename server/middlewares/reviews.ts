import { Request, Response } from 'express';
import {
  create, get, edit, deleteRev,
} from '../controllers/reviews';

const addReview = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { id } = req.params;
  const userId = '642ca9cd340e07f65ed05a07'; // we will get it from front
  const review = await create(id, { content, userId });
  return res.status(200).json({ message: 'Review is created successfully', review });
};

const getReviews = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reviews = await get(id);
  return res.status(200).json(reviews);
};

const editReview = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { id } = req.params; // book id
  const userId = '642ca9cd340e07f65ed05a07'; // we will get it from front
  await edit(id, content, userId);
  return res.status(200).json({ message: 'Review is updated successfully' });
};

const deleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = '642ca9cd340e07f65ed05a07'; // we will get it from front
  const deletedReview = await deleteRev(id, userId);
  if (!deletedReview) throw new Error("Review doens't exist");
  return res.status(200).json({ message: 'Review has been deleted successfully' });
};
export {
  addReview,
  getReviews,
  editReview,
  deleteReview,
};
