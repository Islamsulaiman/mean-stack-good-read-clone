import { Router } from 'express';
import {
  addReview, getReviews, getReviewById, editReviewById, deleteReview,
} from '../middlewares/reviews';

import * as validator from '../middlewares/validateInput';
import { errorHandling } from '../middlewares/errorHandling';

const router = Router();
// Add review
router.post(
  '/',
  validator.checkReview,
  validator.validateInput,
  errorHandling(addReview),
);

// Get reivews for a specific book
router.get('/', errorHandling(getReviews));

// Get reivew
router.get('/:id', errorHandling(getReviewById));

// Modify reviw
router.patch(
  '/:id',
  validator.checkReview,
  validator.validateInput,
  errorHandling(editReviewById),
);

// Delete review
router.delete('/:id', errorHandling(deleteReview));

export const reviews: Router = router;
