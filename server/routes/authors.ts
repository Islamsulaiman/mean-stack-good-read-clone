import { Router } from 'express';
import { errorHandling } from '../middlewares/errorHandling';
import * as validation from '../middlewares/validateInput';
import {
  createAuthor, getAuthors, editAuthorById, deleteAuthorById,
} from '../middlewares/authors';

import { authorUpload } from '../middlewares/imagesUpload';
// authorUpload.single('image')
const router = Router();
// Create author
router.post(
  '/',
  validation.fullName,
  validation.checkDate,
  validation.validateInput,
  authorUpload.single('image'),
  errorHandling(createAuthor),
);

// Get authors
router.get('/', errorHandling(getAuthors));

// Modify author
router.patch(
  '/:id',
  validation.fullName,
  validation.checkDate,
  validation.validateInput,
  authorUpload.single('image'),
  errorHandling(editAuthorById),
);

// Delete author
router.delete('/:id', errorHandling(deleteAuthorById));

export const authors: Router = router;
