import { Router } from 'express';
import { userRoute } from './users';
import { authors } from './authors';
import { userLogin } from '../middlewares/login';

const router = Router();

router.use('/userLogin', userLogin);

// 1. user route
router.use('/users', userRoute);

// 2. author route
router.use('/authors', authors);

export const indexRouter:Router = router;
