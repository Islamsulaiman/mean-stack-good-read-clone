import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

const compareUserData = async (userPassword: string, DBUserPassword: any) :
Promise<boolean> => {
  // check if password match Db password
  const result = await bcrypt.compare(userPassword, DBUserPassword); // return's bool
  return result;
};

type IokenPayload = {
  id: string
};

// eslint-disable-next-line max-len
const generateJWT = (payload: IokenPayload):String => jwt.sign(payload, process.env.JWT_SECRET as string);

const hashPassword = (password: String): String => bcrypt.hashSync(password as string, 10);
export { compareUserData, generateJWT, hashPassword };
