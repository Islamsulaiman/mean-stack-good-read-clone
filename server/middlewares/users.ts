import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAllUsers, getOneUser, deleteUser, updateUser,
} from '../controllers/users';

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

// : Promise<Response>
const createUser = async (req: Request, res: Response) => {
  const {
    firstName, lastName, email, userName,
  } = req.body;
  let { password } = req.body;

  // password = bcrypt.hashSync(password, 10);
  password = hashPassword(password);

  const user = await create({
    firstName, lastName, email, password, userName,
  });

  return res.status(200).json(user);
};

const getAllUsersFunc = async (req: Request, res: Response) => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};

const getOneUserFunc = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

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

export {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUser, deleteUserFunc, updateUserFunc,
};
