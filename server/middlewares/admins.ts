import { Request, Response } from 'express';
import { getAdmin, create } from '../controllers/admins';
import { hashPassword } from './authuntication';

const getAdminData = async (req:Request, res:Response) => {
  const ourAdmin = await getAdmin(req.body.email);
  res.status(200).json(ourAdmin);
};

const createAdmin = async (req: Request, res: Response) => {
  const {
    firstName, lastName, email, userName,
  } = req.body;
  let { password } = req.body;

  password = hashPassword(password);

  const admin = await create({
    firstName, lastName, email, password, userName,
  });

  if (!admin) throw new Error('Error: Admin is not created');

  return res.status(200).json(admin);
};

export { getAdminData, createAdmin };
