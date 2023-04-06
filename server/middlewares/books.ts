import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create,
} from '../controllers/books';

dotenv.config();

// 1.createBook
const createBook = async (req:Request, res:Response) => {
  const {
    title,
    description,
  } = req.body;
  const book = await create({
    title,
    description,
  });
  if (!book) throw new Error('Error: Book not created');

  return res.status(200).json({ message: 'Book created successfully', book });
};

export {
  createBook,
};
