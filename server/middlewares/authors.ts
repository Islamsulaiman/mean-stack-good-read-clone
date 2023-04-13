import { Request, Response } from 'express';
import {
  create, get, getById, edit, deleteAuthor, addBook,
} from '../controllers/authors';
import { cloudi } from './imagesUpload';
// import { authors } from '../routes/authors';

const createAuthor = async (req: Request, res: Response) => {
  const {
    fullName, DOB,
  } = req.body;

  // Image handling
  let image: any = '';
  if (!req.file) {
    image = 'https://res.cloudinary.com/drbxb4sn7/image/upload/v1681107813/p499wcwgyytpkhv5dsjx.png';
  } else {
    const uploadedImg = await cloudi.uploader.upload(req.file.path, {
      public_id: `${Date.now}_author`,
      width: 500,
      height: 500,
      crop: 'fill',

    });
    image = uploadedImg.url;
  }
  const author = await create({
    fullName, DOB: new Date(DOB), image,
  });
  return res.status(200).json(author);
};

const getAuthors = async (req: Request, res: Response) => {
  const { limit, page } = req.query;
  const author = await get(limit, page);
  return res.status(200).json(author);
};

const getAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getAuthor = await getById(id);
  if (!getAuthor) throw new Error("User doens't exist");
  return res.status(200).json(getAuthor);
}
const editAuthorById = async (req: Request, res: Response) => {
  const {
    fullName, DOB,
  } = req.body;
  const { id } = req.params;

  // Image handling
  let author;
  const imgPath = req.file;
  if (!imgPath) {
    author = await edit(id, {
      fullName, DOB: new Date(DOB),
    });
  } else {
    const uploadedImg = await cloudi.uploader.upload(imgPath.path, {
      public_id: `${Date.now}_author`,
      width: 500,
      height: 500,
      crop: 'fill',

    });
    const image = uploadedImg.url;

    author = await edit(id, {
      fullName, DOB: new Date(DOB), image,
    });
  }

  return res.status(200).json(author);
};

const deleteAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedAuthor = await deleteAuthor(id);
  if (!deletedAuthor) throw new Error("User doens't exist");
  return res.status(200).json('Author has been deleted successfully');
};




const addBookToAuthor = async (req: Request, res: Response) : Promise<Response> => {
  const { bookId } = req.body;
  const { id } = req.params;

  const book = await addBook(id, bookId);

  return res.status(200).json(book);
};



export {
  createAuthor,
  getAuthors,
  getAuthorById,
  editAuthorById,
  deleteAuthorById,
  addBookToAuthor,
};
