import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Admin, User } from '../models';

const { promisify } = require('util');

const verify = promisify(jwt.verify);

dotenv.config();
const JWTSecret = process.env.JWT_SECRET;
const comparePasswd = async (enteredPassword: string, DB_password: any) :
Promise<boolean> => {
  // check if password match Db password
  const result = await bcrypt.compare(enteredPassword, DB_password); // return's bool
  return result;
};

type IokenPayload = {
  id: string
};

// eslint-disable-next-line max-len
const generateJWT = (payload: IokenPayload):String => jwt.sign(payload, JWTSecret as string, { expiresIn: '7d' });

const hashPassword = (password: String): String => bcrypt.hashSync(password as string, 10);

// Check if admin
const auth = async (req: Request, res: Response, next: any) => {
  const token = req.cookies.access_token;
  const payload = verify(token, JWTSecret as string);
  const admin = await Admin.findById(payload.id);

  if (!admin) { throw new Error('User not found'); }

  return next();
};

// Check if user
const userAuth = async (req: Request, res: Response, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader == null) return res.sendStatus(401);

  const payload = verify(authHeader, JWTSecret as string);
  const user = await User.findById(payload.id);

  if (!user) { throw new Error('User not found'); }

  return next();
};

export {
  comparePasswd, generateJWT, hashPassword, auth, userAuth,
};
