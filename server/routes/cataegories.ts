import { Router } from 'express';
import {
  createCategory,
} from '../middlewares/cataegories';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();

// 1.create Category
router.post('/', errorHandling(createCategory));

export const categoryRoute : Router = router;
