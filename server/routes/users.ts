import { Router } from 'express';
import {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUserFunc,
  updateUserFunc, addBookToUserFunc, adduserRatingFunc, changeImgFunc, updateBookStatusFunc,
  removeBookFromUserFunc,
} from '../middlewares/users';

import {
  checkEmail, checkUserName, fullName, checkImage,
} from '../middlewares/validateInput';

import * as validation from '../middlewares/validateInput';
import { errorHandling } from '../middlewares/errorHandling';
import { userUpload } from '../middlewares/imagesUpload';

const router = Router();

router.patch('/remove', errorHandling(removeBookFromUserFunc));
// change book progress
router.patch('/bookProgress', errorHandling(updateBookStatusFunc));

// add rating to a specific book inside one user with it's bookId
router.patch('/rating/', errorHandling(adduserRatingFunc));

// add book to user with it's bookId
router.patch('/addBook', errorHandling(addBookToUserFunc));

// Change Image
router.patch('/image/:id', userUpload.single('image'), errorHandling(changeImgFunc));

// 1)create user
router.post('/', checkEmail, errorHandling(createUser));

// 2. get all users
router.get('/', errorHandling(getAllUsersFunc));

// 3. get one user
router.get('/oneUser', errorHandling(getOneUserFunc));

// 4. delete user
router.delete('/:id', errorHandling(deleteUserFunc));

// 5. update users
router.patch(
  '/profile/:id',
  validation.checkFirstName,
  validation.checkLastName,
  validation.checkEmail,
  validation.validateInput,
  errorHandling(updateUserFunc),
);

export const userRoute: Router = router;
