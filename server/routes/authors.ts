import { Router } from 'express';
import { errorHandling } from '../middlewares/errorHandling';
import * as validation from '../middlewares/validateInput';
import {
  createAuthor, getAuthors, editAuthorById, deleteAuthorById, getAuthorById,
  addBookToAuthor, popularAuthors,
} from '../middlewares/authors';
import { authorUpload } from '../middlewares/imagesUpload';
// authorUpload.single('image')
const router = Router();

// Create author
router.post(
  '/',
  authorUpload.single('image'),
  validation.fullName,
  validation.checkDate,
  validation.validateInput,
  errorHandling(createAuthor),
);

// Get authors
router.get('/', errorHandling(getAuthors));
router.get('/:id', errorHandling(getAuthorById));
router.get('/all/popular', errorHandling(popularAuthors));

// Modify author
router.patch(
  '/:id',
  authorUpload.single('image'),
  validation.fullName,
  validation.checkDate,
  validation.validateInput,
  errorHandling(editAuthorById),
);

// add book to author with it's bookId
router.patch('/:id', errorHandling(addBookToAuthor));



// Delete author
router.delete('/:id', errorHandling(deleteAuthorById));

export const authors: Router = router;
