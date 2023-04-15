import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getAdmin, create, deleteAdmin } from '../controllers/admins';
import { comparePasswd, hashPassword } from './authuntication';

const getAdminData = async (req: Request, res: Response) => {
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

const deleteAdminfunc = async (req: Request, res: Response) => {
  const { email } = req.body;
  const student = await deleteAdmin(email);

  return res.status(200).json({ 'Admin deleted': student });
};

const loginfunc = async (req: Request, res: Response) => {
  const secretKey = 'your_secret_key_here';
  const { email, password } = req.body;
  const admin = await getAdmin(email);
  if (!admin) throw new Error('Error: No Admin with this Email');

  const compare = await comparePasswd(password, admin.password);
  if (!compare) res.status(401).json('error2');
  else {
    const token = jwt.sign({ data: admin }, secretKey);

    res.status(200).json({ message: 'success', token });
  }
};

export { getAdminData, createAdmin, deleteAdminfunc, loginfunc };
