import { Router } from 'express';
import { studentRoute } from './users';
import { userLogin } from '../middlewares/login';
import { categoryRoute } from './cataegories';

const router = Router();

router.use('/userLogin', userLogin);

// 1. user route
router.use('/user', studentRoute);
router.use('/category', categoryRoute);
export const indexRouter:Router = router;
