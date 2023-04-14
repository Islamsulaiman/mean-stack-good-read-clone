import { Router } from 'express';
import {
  createCategory, getAllCategories, getOneCategory, updateCategory, deleteCategory, addBookToCategory
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
router.get('/', getAllCategories);
// 3.get one category
router.get('/:id', errorHandling(getOneCategory));
// 4.update one category
// add book to author with it's bookId
router.patch('/:id', errorHandling(addBookToCategory));
router.patch(
  '/:id',
  validation.checkCatagoryName,
  validation.validateInput,
  errorHandling(updateCategory),
);
// 5.delete  category
router.delete('/:id', errorHandling(deleteCategory));
export const categoryRoute : Router = router;
