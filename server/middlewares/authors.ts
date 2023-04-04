import { Request, Response } from 'express';
import {
  create, get, edit, deleteAuthor,
} from '../controllers/authors';
// import { authors } from '../routes/authors';

const createAuthor = async (req: Request, res: Response) => {
  const {
    firstName, lastName, DOB, image,
  } = req.body;
  const author = await create({
    firstName, lastName, DOB: new Date(DOB), image,
  });
  return res.status(200).json(author);
};

const getAuthors = async (req: Request, res: Response) => {
  const author = await get();
  return res.status(200).json(author);
};

const editAuthorById = async (req: Request, res: Response) => {
  const {
    firstName, lastName, DOB, image,
  } = req.body;

  const { id } = req.params;
  const author = await edit(id, {
    firstName, lastName, DOB: new Date(DOB), image,
  });
  return res.status(200).json(author);
};

const deleteAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteAuthor(id);
  return res.status(200).json('Author has been deleted successfully');
};
export {
  createAuthor,
  getAuthors,
  editAuthorById,
  deleteAuthorById,
};
