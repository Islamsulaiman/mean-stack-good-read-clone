import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

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
const generateJWT = (payload: IokenPayload):String => jwt.sign(payload, process.env.JWT_SECRET as string);

const hashPassword = (password: String): String => bcrypt.hashSync(password as string, 10);
export { comparePasswd, generateJWT, hashPassword };
