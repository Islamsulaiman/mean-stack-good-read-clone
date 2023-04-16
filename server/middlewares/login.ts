import { Request, Response } from 'express';
import { comparePasswd, generateJWT } from './authuntication';

import { getUser } from '../controllers/users';
import { getAdmin } from '../controllers/admins';

/* User login */
const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userDataFromDB: any = await getUser(email);

  // Email or password dosnt match!, try again
  if (!userDataFromDB) {
    res.status(401).json('error1');
  }
  // compare user input data with db data
  const compare = await comparePasswd(password, userDataFromDB.password);
  if (!compare) res.status(401).json('error2');
  else {
  // send user a token
    const token = generateJWT({ id: userDataFromDB.id });
    res.status(200).json({ token });
  }
};

/* Admin login */
const adminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const adminDataFromDB: any = await getAdmin(email);

  // Email or password dosnt match!, try again
  if (!adminDataFromDB) {
    throw new Error('Login error 1');
  }

  // compare admin input data with db data
  const compare = await comparePasswd(password, adminDataFromDB.password);
  if (!compare) throw new Error('Login error 2');
  else {
    // send admin a token
    const token = generateJWT({ id: adminDataFromDB.id });
    res.cookie('access_token', token, { httpOnly: true, secure: true });
  }
};

export {
  userLogin,
  adminLogin,
};
