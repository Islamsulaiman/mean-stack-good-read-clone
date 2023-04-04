import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { create, getAllUsers, getOneUser } from '../controllers/users';

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

export { createUser, getAllUsersFunc, getOneUserFunc };
