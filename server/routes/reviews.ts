import { Router } from 'express';
// import { errorHandling } from '../middelwares/errorFunction';
import {
  addReview, getReviewById, editReviewById, deleteReview,
} from '../middlewares/reviews';

const router = Router();
// Add review
router.post('/', addReview);

// Get reivew
router.get('/:id', getReviewById);

// Modify author
router.patch('/:id', editReviewById);

// Delete author
router.delete('/:id', deleteReview);

export const reviews: Router = router;
