import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAll, getOne,
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
// 2.getAllbooks
const getAllBooks = async (req:Request, res:Response) => {
  const { limit, page } = req.query;
  const book = await getAll(limit, page);
  return res.status(200).json({ message: 'Books', book });
};
// 3.getOneBook
const getOneBook = async (req:Request, res:Response) => {
  const { id } = req.params;
  const book = await getOne(id);
  if (!book) throw new Error('Error: Book not found');

  return res.status(200).json({ message: 'Book Found Successfully', book });
};
export {
  createBook, getAllBooks, getOneBook,
};
