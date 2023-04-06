import { Router } from 'express';
import {
  createBook, getAllBooks, getOneBook, updateBook, deleteBook,
} from '../middlewares/books';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();
// 1.create Book
router.post('/', errorHandling(createBook));
// 2.get all books
router.get('/', getAllBooks);
// 3.get one book
router.get('/:id', getOneBook);
// 4.update one book
router.patch('/:id', errorHandling(updateBook));
// 5.delete book
router.delete('/:id', errorHandling(deleteBook));

export const bookRouter : Router = router;
