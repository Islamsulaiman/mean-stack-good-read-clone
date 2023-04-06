/* eslint-disable @typescript-eslint/no-unused-vars */

import { Router } from 'express';
// import {
//   addReview, getReviews, getReviews, editReview, deleteReview,
// } from '../middlewares/reviews';

import * as validator from '../middlewares/validateInput';
import { errorHandling } from '../middlewares/errorHandling';

const router = Router();
// // Add review
// router.post(
//   '/',
//   validator.checkReview,
//   errorHandling(addReview),
// );

// // Get reivews for a specific book
// router.get('/', errorHandling(getReviews));

// // Get reivew
// router.get('/:id', errorHandling(getReviewById));

// // Modify reviw
// router.patch(
//   '/:id',
//   validator.checkReview,
//   errorHandling(editReviewById),
// );

// // Delete review
// router.delete('/:id', errorHandling(deleteReview));

export const reviews: Router = router;
