import { Request, Response } from 'express';
import {
  create, get, getById, edit, deleteRev,
} from '../controllers/reviews';

const addReview = async (req: Request, res: Response) => {
  const { content } = req.body;
  const bookId = '642ca9cd340e07f65ed05a07'; // we will get it from front
  const review = await create({ bookId, content });
  return res.status(200).json(review);
};

const getReviews = async (req: Request, res: Response) => {
  const { bookId } = req.query;
  const reviews = await get(bookId);
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
  const deletedReview = await deleteRev(id);
  console.log(deleteReview);
  if (!deletedReview) throw new Error("Review doens't exist");
  return res.status(200).json('Review has been deleted successfully');
};
export {
  addReview,
  getReviews,
  getReviewById,
  editReviewById,
  deleteReview,
};
