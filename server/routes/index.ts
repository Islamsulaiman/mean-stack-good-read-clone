import { Router } from 'express';
import { studentRoute } from './users';
import { userLogin } from '../middlewares/login';
import { categoryRoute } from './cataegories';
import { bookRouter } from './books';

const router = Router();

router.use('/userLogin', userLogin);

// 1. user route
router.use('/user', studentRoute);
router.use('/category', categoryRoute);
router.use('/book', bookRouter);
export const indexRouter:Router = router;
