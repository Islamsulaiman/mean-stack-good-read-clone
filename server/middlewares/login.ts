import { Request, Response } from 'express';
import { compareUserData, generateJWT } from './authuntication';

import { login } from '../controllers/users';

const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userDataFromDB: any = await login(email);

  // Email or password dosnt match!, try again
  if (!userDataFromDB) {
    throw new Error('Login error 1');
  }

  // compare user input data with db data
  const compare = await compareUserData(password, userDataFromDB.password);
  if (!compare) throw new Error('Login error 2');
  else {
  // send user a token
    const token = generateJWT({ id: userDataFromDB.id });
    res.status(200).json({ 'user token': token });
  }
};

export { userLogin };
