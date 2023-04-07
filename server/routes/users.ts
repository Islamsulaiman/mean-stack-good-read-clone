import { Router } from 'express';
import {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUserFunc,
  updateUserFunc, addBookToUserFunc, adduserRatingFunc,
} from '../middlewares/users';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();

// add rating to a specific book inside one user with it's bookId
router.patch('/rating', adduserRatingFunc);

// add book to user with it's bookId
router.patch('/', addBookToUserFunc);

// 1)create user
router.post('/', errorHandling(createUser));

// 2. get all users
router.get('/', getAllUsersFunc);

// 3. get one user
router.get('/:id', getOneUserFunc);

// 4. delete user
router.delete('/:id', deleteUserFunc);

// 5. update user
router.patch('/:id', errorHandling(updateUserFunc));

export const userRoute: Router = router;
