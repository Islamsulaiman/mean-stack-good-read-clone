import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { create } from '../controllers/users';

dotenv.config();

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

export { createUser };
