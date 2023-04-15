import { Router } from 'express';
import {
  createBook, getAllBooks, getOneBook, updateBook, deleteBook, bookAvarageRatingFunc, searchForBook
} from '../middlewares/books';

import {
  addReview, getReviews, editReview, deleteReview,
} from '../middlewares/reviews';
import { errorHandling } from '../middlewares/errorHandling';
import * as validation from '../middlewares/validateInput';

import { bookUpload } from '../middlewares/imagesUpload';
import { userAuth } from '../middlewares/authuntication';

const router = Router();

// book avarage rating
router.get('/bookAvarageRating/:id', bookAvarageRatingFunc);
// 1.create Book
router.post(
  '/',
  bookUpload.single('image'),
  validation.checkTitle,
  validation.checkDescription,
  validation.validateInput,
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
  bookUpload.single('image'),
  validation.checkTitle,
  validation.checkDescription,
  validation.validateInput,
  errorHandling(updateBook),
);
// 5.delete book
router.delete('/:id', errorHandling(deleteBook));

// 6.search for book
router.post('/search', errorHandling(searchForBook))

/* Reviews routes */

// 1. add review
// router.post('/:id/review', errorHandling(userAuth), errorHandling(addReview));
router.post('/:id/review', errorHandling(addReview));

// 2. get reviews
router.get('/:id/review', errorHandling(getReviews));

// 3. edit review
router.patch('/:id/review/update', errorHandling(userAuth), errorHandling(editReview));

// 4. delete review
router.delete('/:id/review/delete/', errorHandling(userAuth), errorHandling(deleteReview));

export const bookRouter : Router = router;
