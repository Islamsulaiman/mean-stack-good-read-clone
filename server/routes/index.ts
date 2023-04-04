import { Router } from 'express';
import { studentRoute } from './users';
import { userLogin } from '../middlewares/login';

const router = Router();

router.use('/userLogin', userLogin);

// 1. user route
router.use('/user', studentRoute);

export const indexRouter:Router = router;
