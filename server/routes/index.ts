import { Router } from 'express';
import { userRoute } from './users';
import { authors } from './authors';
import { reviews } from './reviews';
import { userLogin, adminLogin } from '../middlewares/login';

const router = Router();

router.use('/login', userLogin);
router.use('/admin~@~Login', adminLogin);

// 1. user route
router.use('/users', userRoute);

// 2. author route
router.use('/authors', authors);

// 3. review route
router.use('/reviews', reviews);

export const indexRouter:Router = router;
