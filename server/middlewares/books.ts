import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAll, getOne, update, deleteOne, bookAvarageRating, search, addCategory,
  addAuthor,
} from '../controllers/books';
import { addBook } from '../controllers/cataegories';
import { addBooktoAuth } from '../controllers/authors';
import { cloudi } from './imagesUpload';
import { log } from 'console';

dotenv.config();

// 1.createBook
const createBook = async (req:Request, res:Response) => {
  const {
    title,
    description,
    author, // ID
    category, // ID
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
    image,
  });
  if (!book) throw new Error('Error: Book not created');

  const bookId: any = book._id


  // add book to category 
  await addBook(category, bookId);

  // add book to author
  await addBooktoAuth(author, bookId)

  // Push category to book
  await addCategory(bookId,category)

  // Push author to book
  await addAuthor(bookId, author)


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
  
 console.log(req.file)
  // update image
  if (!req.file) throw new Error('No Image has uploaded');

  const uploadedImg = req.file.path;
  const images = await cloudi.uploader.upload(uploadedImg, {
    public_id: `${id}_profile`,
    width: 500,
    height: 500,
    crop: 'fill',

  });
   const image = images.url;
   console.log(image);
  if (!book) throw new Error('Error: Book not found');
  const updatedBook = await update(id, { title, description , image });
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
