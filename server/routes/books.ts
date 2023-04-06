import { Router } from 'express';
import {
  createBook, getAllBooks,
} from '../middlewares/books';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();
// 1.create Book
router.post('/', errorHandling(createBook));
// 2.get all books
router.get('/', getAllBooks);

export const bookRouter : Router = router;
