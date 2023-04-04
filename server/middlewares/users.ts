import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAllUsers, getOneUser, deleteUser,
} from '../controllers/users';

dotenv.config();

// : Promise<Response>
const createUser = async (req: Request, res: Response) => {
  const {
    firstName, lastName, email, userName,
  } = req.body;
  const { password } = req.body;

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

export {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUser, deleteUserFunc,
};
