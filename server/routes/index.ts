import { Router } from 'express';
import { categoryRoute } from './cataegories';
import { bookRouter } from './books';
import { userRoute } from './users';
import { authors } from './authors';
import { AdminRoute } from './admins';
import { userLogin, adminLogin } from '../middlewares/login';

const router = Router();

router.use('/login', userLogin);
router.use('/admin~@~Login', adminLogin);

// 1. user route
router.use('/category', categoryRoute);
router.use('/book', bookRouter);
router.use('/users', userRoute);

// 2. author route
router.use('/authors', authors);

// 3. Admin route
router.use('/admin', AdminRoute);

export const indexRouter:Router = router;
