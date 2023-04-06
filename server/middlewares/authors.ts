import { Request, Response } from 'express';
import {
  create, get, edit, deleteAuthor,
} from '../controllers/authors';
// import { authors } from '../routes/authors';

const createAuthor = async (req: Request, res: Response) => {
  const {
    fullName, DOB,
  } = req.body;
  // Image handling
  let image = '';
  image = !req.file ? 'server\\uploadedImages\\default_avatar_41894.png' : req.file.path;
  const author = await create({
    fullName, DOB: new Date(DOB), image,
  });
  return res.status(200).json(author);
};

const getAuthors = async (req: Request, res: Response) => {
  const author = await get();
  return res.status(200).json(author);
};

const editAuthorById = async (req: Request, res: Response) => {
  const {
    fullName, DOB,
  } = req.body;

  const { id } = req.params;
  const author = await edit(id, {
    fullName, DOB: new Date(DOB),
  });

  return res.status(200).json(author);
};

const deleteAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedAuthor = await deleteAuthor(id);
  if (!deletedAuthor) throw new Error("User doens't exist");
  return res.status(200).json('Author has been deleted successfully');
};
export {
  createAuthor,
  getAuthors,
  editAuthorById,
  deleteAuthorById,
};
