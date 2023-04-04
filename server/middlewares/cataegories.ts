import { Request, Response } from 'express';

import * as dotenve from 'dotenv';
import {
  create,
} from '../controllers/cataegories';

dotenve.config();

const createCategory = async (req:Request, res:Response) => {
  const {
    name,
  } = req.body;
  const category = await create({
    name,
  });
  if (!category) throw new Error('Error: Category not created');

  return res.status(200).json(category);
};

export {
  createCategory,
};
