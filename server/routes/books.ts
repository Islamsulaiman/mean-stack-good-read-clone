import { Router } from 'express';
import {
  createBook, getAllBooks, getOneBook, updateBook, deleteBook,
} from '../middlewares/books';

import { errorHandling } from '../middlewares/errorHandling';
import * as validation from '../middlewares/validateInput';

import { bookUpload } from '../middlewares/imagesUpload';

const router = Router();
// 1.create Book
router.post(
  '/',
  validation.checkTitle,
  validation.checkDescription,
  validation.validateInput,
  bookUpload.single('image'),
  errorHandling(createBook),
);
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

export const bookRouter : Router = router;
