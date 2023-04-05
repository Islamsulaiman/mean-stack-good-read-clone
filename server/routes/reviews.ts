import { Router } from 'express';
// import { errorHandling } from '../middelwares/errorFunction';
import {
  addReview, getReviews, getReviewById, editReviewById, deleteReview,
} from '../middlewares/reviews';

const router = Router();
// Add review
router.post('/', addReview);

// Get reivews for a specific book
router.get('/', getReviews);

// Get reivew
router.get('/:id', getReviewById);

// Modify reviw
router.patch('/:id', editReviewById);

// Delete review
router.delete('/:id', deleteReview);

export const reviews: Router = router;
