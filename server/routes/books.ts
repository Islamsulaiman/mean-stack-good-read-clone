import { Router } from 'express';
import {
  createBook, getAllBooks, getOneBook, updateBook, deleteBook, bookAvarageRatingFunc,
} from '../middlewares/books';

import {
  addReview, getReviews, editReview, deleteReview,
} from '../middlewares/reviews';
import { errorHandling } from '../middlewares/errorHandling';
import * as validation from '../middlewares/validateInput';

import { bookUpload } from '../middlewares/imagesUpload';

const router = Router();

// book avarage rating
router.get('/bookAvarageRating/:id', bookAvarageRatingFunc);
// 1.create Book
router.post(
  '/',
  validation.checkTitle,
  validation.checkDescription,
  validation.validateInput,
  bookUpload.single('image'),
  errorHandling(createBook),
);
// 1.create Book
router.post('/', bookUpload.single('image'), errorHandling(createBook));
// 2.get all books
router.get('/', getAllBooks);
// 3.get one book
router.get('/:id', errorHandling(getOneBook));
// 4.update one book
router.patch(
  '/:id',
  validation.checkTitle,
  validation.checkDescription,
  validation.validateInput,
  bookUpload.single('image'),
  errorHandling(updateBook),
);
// 5.delete book
router.delete('/:id', errorHandling(deleteBook));

/* Reviews routes */

// 1. add review
router.post('/:id/review', errorHandling(addReview));

// 2. get reviews
router.get('/:id/review', errorHandling(getReviews));

// 3. edit review
router.patch('/:id/review/update', errorHandling(editReview));

// 4. delete review
router.delete('/:id/review/delete/', errorHandling(deleteReview));

export const bookRouter : Router = router;
