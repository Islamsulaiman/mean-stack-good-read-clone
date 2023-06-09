import { Router } from 'express';
import {
  createCategory, getAllCategories,
  getOneCategory, updateCategory, deleteCategory, addBookToCategory,
} from '../middlewares/cataegories';

import { errorHandling } from '../middlewares/errorHandling';
import * as validation from '../middlewares/validateInput';

const router = Router();

// 1.create Category
router.post(
  '/',
  validation.checkCatagoryName,
  validation.validateInput,
  errorHandling(createCategory),
);
// 2.get all categories
router.get('/', errorHandling(getAllCategories));
// 3.get one category
router.get('/:id', errorHandling(getOneCategory));
// 4.update one category
// add book to author with it's bookId
router.patch(
  '/:id',
  validation.checkCatagoryName,
  validation.validateInput,
  errorHandling(updateCategory),
);
router.patch('/:id/book', errorHandling(addBookToCategory));

// 5.delete  categorys
router.delete('/:id', errorHandling(deleteCategory));
export const categoryRoute : Router = router;
