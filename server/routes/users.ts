import { Router } from 'express';
import { createUser, getAllUsersFunc, getOneUserFunc } from '../middlewares/users';

const router = Router();

// 1)create user
router.post('/', createUser);

// 2. get all users
router.get('/', getAllUsersFunc);

// 3. get one user
router.get('/:id', getOneUserFunc);

export const studentRoute: Router = router;
