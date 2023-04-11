import { Router } from 'express';
import { categoryRoute } from './cataegories';
import { bookRouter } from './books';
import { userRoute } from './users';
import { authors } from './authors';
import { AdminRoute } from './admins';
import { userLogin, adminLogin } from '../middlewares/login';
import { errorHandling } from '../middlewares/errorHandling';
import { userAuth } from '../middlewares/authuntication';
const router = Router();

router.use('/login', errorHandling(userLogin));
router.use('/admin~@~Login', adminLogin);

// 1. user route
router.use('/category', categoryRoute);
router.use('/book', bookRouter);


router.use('/users', errorHandling(userAuth), userRoute);

// 2. author route
router.use('/authors', authors);

// 3. Admin route
router.use('/admin', AdminRoute);

export const indexRouter:Router = router;
