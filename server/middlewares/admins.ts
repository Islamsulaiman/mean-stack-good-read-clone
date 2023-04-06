import { Request, Response } from 'express';
import { getAdmin } from '../controllers/admins';

const getAdminData = async (req:Request, res:Response) => {
  const ourAdmin = await getAdmin(req.body.email);
  res.status(200).json(ourAdmin);
};

export { getAdminData };
