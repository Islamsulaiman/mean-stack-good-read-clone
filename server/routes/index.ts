import { Router } from 'express';
import { studentRoute } from './users';
import { authors } from './authors';
import { userLogin } from '../middlewares/login';

const router = Router();

router.use('/userLogin', userLogin);

// 1. user route
router.use('/user', studentRoute);

// 2. author route
router.use('/authors', authors);

export const indexRouter:Router = router;
