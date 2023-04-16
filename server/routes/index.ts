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
router.use('/category', errorHandling(categoryRoute));
router.use('/book', errorHandling(bookRouter));

// router.use('/users', errorHandling(userAuth), userRoute);
router.use('/users', errorHandling(userRoute));

// 2. author route
router.use('/authors', errorHandling(authors));

// 3. Admin route
router.use('/admin', errorHandling(AdminRoute));

export const indexRouter:Router = router;
