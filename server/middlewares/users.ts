import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAllUsers, getOneUser, deleteUser, updateUser, addBookToUser, adduserRating,
} from '../controllers/users';
import { updateBookRating } from '../controllers/books';

import { hashPassword } from './authuntication';

// data types
type UpdteUserData = {
  firstName?: String;
  lastName?: String;
  password?: String
  email?: String,
  userName?: String
};

dotenv.config();

const createUser = async (req: Request, res: Response) : Promise<Response> => {
  const {
    firstName, lastName, email, userName,
  } = req.body;
  let { password } = req.body;

  // password = bcrypt.hashSync(password, 10);
  password = hashPassword(password);

  const user = await create({
    firstName, lastName, email, password, userName,
  });

  if (!user) throw new Error('Error: user is not created');

  return res.status(200).json(user);
};

const getAllUsersFunc = async (req: Request, res: Response): Promise<Response> => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};

const getOneUserFunc = async (req: Request, res: Response): Promise<Response> => {
  // const { id } = req.params;

  const id = '642f615500d8ccde87da9688';

  const oneUser = await getOneUser(id);

  return res.status(200).json(oneUser);
};

const deleteUserFunc = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await deleteUser(id);

  return res.status(200).json({ 'User deleted': student });
};

const updateUserFunc = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error('Enter id to update');
  }
  const { id } = req.params;

  const {
    firstName, lastName, email, userName,
  } = req.body;

  let { password } = req.body;

  if (password) {
    password = hashPassword(password);
  }

  const updateObject: UpdteUserData = {
    firstName, lastName, password, email, userName,
  };

  if (Object.keys(updateObject).length === 0) {
    throw new Error('Please enter data to update!');
  }

  const student = await updateUser(id, updateObject);

  return res.status(200).json(student);
};

const addBookToUserFunc = async (req: Request, res: Response) : Promise<Response> => {
  const { id } = req.body;
  const { bookId } = req.params;

  const book = await addBookToUser(id, bookId);

  return res.status(200).json(book);
};

const adduserRatingFunc = async (req: Request, res: Response) : Promise<Response> => {
  const { id, rating } = req.body;
  const { bookId } = req.params;

  // update the user rating for this book
  const oldUserRatingObject = await adduserRating(id, bookId, rating);

  const oldUserRating : any = oldUserRatingObject?.books[0].rating;
  const updatedBookId :any = oldUserRatingObject?.books[0].bookId;

  console.log(updatedBookId);

  // update the rating for the book
  const bookUpdated = await updateBookRating(updatedBookId, oldUserRating, rating);
  console.log(bookUpdated);

  return res.status(200).json(oldUserRating);
};

export {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUser, deleteUserFunc,
  updateUserFunc, addBookToUserFunc, adduserRatingFunc,
};
