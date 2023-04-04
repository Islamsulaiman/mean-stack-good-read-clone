import { Router } from 'express';
import {
  createCategory, getAllCategories,
} from '../middlewares/cataegories';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();

// 1.create Category
router.post('/', errorHandling(createCategory));
// 2.get all categories
router.get('/', getAllCategories);

export const categoryRoute : Router = router;
