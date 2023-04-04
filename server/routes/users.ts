import { Router } from 'express';
import { createUser, getAllUsersFunc } from '../middlewares/users';

const router = Router();

// 1)create user
router.post('/', createUser);

// 2. get all users
router.get('/', getAllUsersFunc);

export const studentRoute: Router = router;
