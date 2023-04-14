import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAll, getOne, update, deleteOne, bookAvarageRating, search
} from '../controllers/books';
import { cloudi } from './imagesUpload';

dotenv.config();

// 1.createBook
const createBook = async (req:Request, res:Response) => {
  const {
    title,
    description,
    author,
    category,
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

  const book = await create({
    title,
    description,
    author,
    category,
    image,
  });
  if (!book) throw new Error('Error: Book not created');

  return res.status(200).json({ message: 'Book created successfully', book });
};
// 2.getAllbooks
const getAllBooks = async (req:Request, res:Response) => {
  const skip = parseInt(req.query.skip as string, 10);
  const limit = parseInt(req.query.limit as string, 10);

  const book = await getAll(skip, limit);

  return res.status(200).json({ message: 'Books', book });
};
// 3.getOneBook
const getOneBook = async (req:Request, res:Response) => {
  const { id } = req.params;
  const book = await getOne(id);
  if (!book) throw new Error('Error: Book not found');

  return res.status(200).json({ message: 'Book Found Successfully', book });
};
// 4.updateBook
const updateBook = async (req:Request, res:Response) => {
  const { id } = req.params;
  const {
    title,
    description,
  } = req.body;
  const book = await getOne(id);
  if (!book) throw new Error('Error: Book not found');
  const updatedBook = await update(id, { title, description });
  if (!updatedBook) throw new Error('Error: Book not updated');
  return res.status(200).json({ message: 'Book updated successfully', updatedBook });
};
// 5.deleteBook
const deleteBook = async (req:Request, res:Response) => {
  const { id } = req.params;
  const book = await getOne(id);
  if (!book) throw new Error('Error: Book not found');
  const deletedBook = await deleteOne(id);
  if (!deletedBook) throw new Error('Error: Book not deleted');
  return res.status(200).json({ message: 'Book deleted successfully', deletedBook });
};

// 6. book avarage rating
const bookAvarageRatingFunc = async (req:Request, res:Response) => {
  const { id } = req.params;

  const book = await bookAvarageRating(id);
  if (!book) throw new Error('Error: Book avarage not found');

  // get total people voting
  let totalVoters : number = 0;

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in book) {
    if (key !== '0') {
      totalVoters += book[key];
    }
  }

  // get total votes
  let totalStarsSum : number = 0;

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in book) {
    totalStarsSum += book[key] * Number(key);
  }

  // the avarage rating
  const avarageRating = (totalStarsSum / totalVoters).toFixed(1);

  console.log(totalStarsSum, totalVoters);

  const popularityRating = "avrage rating * number of shelv's";

  return res.status(200).json(avarageRating);
};


// 7.Search for book
const searchForBook = async (req:Request, res:Response, ) =>{
    let payload = req.body.payload;
    const searchforBook = await search(payload);
    res.send({payload: searchforBook});
}

export {
  createBook, getAllBooks, getOneBook, updateBook, deleteBook, bookAvarageRatingFunc, searchForBook
};
