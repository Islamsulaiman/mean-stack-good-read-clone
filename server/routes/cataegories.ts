import { Router } from 'express';
import {
  createCategory, getAllCategories, getOneCategory, updateCategory, deleteCategory,
} from '../middlewares/cataegories';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();

// 1.create Category
router.post('/', errorHandling(createCategory));
// 2.get all categories
router.get('/', getAllCategories);
// 3.get one category
router.get('/:id', getOneCategory);
// 4.update one category
router.patch('/:id', errorHandling(updateCategory));
// 5.delete  category
router.delete('/:id', errorHandling(deleteCategory));
export const categoryRoute : Router = router;
