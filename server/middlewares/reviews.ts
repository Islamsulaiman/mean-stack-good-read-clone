import { Request, Response } from 'express';
import {
  create, get, getById, edit, deleteRev,
} from '../controllers/reviews';

const addReview = async (req: Request, res: Response) => {
  const { content } = req.body;

  const review = await create(content);
  return res.status(200).json(review);
};

const getReviews = async (req: Request, res: Response) => {
  const reviews = await get();
  return res.status(200).json(reviews);
};

const getReviewById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const review = await getById(id);
  return res.status(200).json(review);
};

const editReviewById = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { id } = req.params;
  const review = await edit(id, { content, publishDate: new Date() });
  return res.status(200).json(review);
};

const deleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteRev(id);
  return res.status(200).json('Review has been deleted successfully');
};
export {
  addReview,
  getReviews,
  getReviewById,
  editReviewById,
  deleteReview,
};
