import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as userCont from '../controllers/users';
import { updateBookRating, getOne } from '../controllers/books';
import { cloudi } from './imagesUpload';
import { hashPassword } from './authuntication';
import { bookAvarageRatingFunc, updateAvgRatingFunc } from './books';

// data types
type UpdteUserData = {
  firstName?: String;
  lastName?: String;
  password?: String
  email?: String,
  userName?: String
  image?: String
};

dotenv.config();

const createUser = async (req: Request, res: Response) : Promise<Response> => {
  const {
    firstName, lastName, email, userName,
  } = req.body;
  let { password } = req.body;

  password = hashPassword(password);

  // Avatar
  const image = 'https://res.cloudinary.com/drbxb4sn7/image/upload/v1681107813/p499wcwgyytpkhv5dsjx.png';
  const user = await userCont.create({
    firstName, lastName, email, password, userName, image,
  });

  if (!user) throw new Error('Error: user is not created');

  return res.status(200).json(user);
  // return res.status(200);
};

const getAllUsersFunc = async (req: Request, res: Response): Promise<Response> => {
  const users = await userCont.getAllUsers();

  return res.status(200).json(users);
};

const getOneUserFunc = async (req: Request, res: Response): Promise<Response> => {
  const { id, skip, limit } = req.query;

  if (parseInt(skip as string, 10) < 0 || parseInt(limit as string, 10) < 0) throw new Error('Please enter valid range');

  const oneUser = await userCont.getOneUser(
    id as string,
    parseInt(skip as string, 10),

    parseInt(limit as string, 10),
  );
  // oneUser.totalBooks = 10;

  return res.status(200).json(oneUser);
};

const deleteUserFunc = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await userCont.deleteUser(id);

  return res.status(200);
};

const updateUserFunc = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error('Enter id to update');
  }
  const { id } = req.params;

  const {
    firstName, lastName, email, userName,
  } = req.body;

  let { password } = req.body;

  if (password) {
    password = hashPassword(password);
  }

  const updateObject: UpdteUserData = {
    firstName, lastName, password, email, userName,
  };

  if (Object.keys(updateObject).length === 0) {
    throw new Error('Please enter data to update!');
  }

  const newStudent = await userCont.updateUser(id, updateObject);

  return res.status(200).json(newStudent);
};

const addBookToUserFunc = async (req: Request, res: Response) : Promise<Response> => {
  const { id, bookId } = req.query;

  const book = await userCont.addBookToUser(id as string, bookId as string);

  return res.status(200).json(book);
};

const removeBookFromUserFunc = async (req: Request, res: Response) : Promise<Response> => {
  const { userId, bookId } = req.query;

  const book = await userCont.removeBookFromUser(userId as string, bookId as string);
  return res.status(200).json(book);
};

const adduserRatingFunc = async (req: Request, res: Response) : Promise<Response> => {
  const bookId = req.query.bookId as string;
  const id = req.query.id as string;
  const rating = parseInt(req.query.rating as string, 10);

  // update the user rating for this book
  const oldUserRatingObject = await userCont.adduserRating(id, bookId, rating);

  const oldUserRating : any = oldUserRatingObject?.books[0].rating;
  const updatedBookId :any = oldUserRatingObject?.books[0].bookId;

  // update the rating for the book
  await updateBookRating(updatedBookId, oldUserRating, rating);

  // get avarage rating and popularity for the book
  const avgRatingAndPopularity = await bookAvarageRatingFunc(bookId);

  // go to book and add these attributes
  await updateAvgRatingFunc(avgRatingAndPopularity, bookId);

  // get the final book
  const finalBook = await getOne(bookId);

  return res.status(200).json(finalBook);
};

const changeImgFunc = async (req: Request, res: Response) : Promise<Response> => {
  if (!req.params.id) {
    throw new Error('Enter id to update');
  }
  const { id } = req.params;
  // update image
  if (!req.file) throw new Error('No Image has uploaded');

  const uploadedImg = req.file.path;
  const image = await cloudi.uploader.upload(uploadedImg, {
    public_id: `${id}_profile`,
    width: 500,
    height: 500,
    crop: 'fill',

  });

  await userCont.UpdteUserImg(id, image.url);
  return res.status(200).json('Image has been uploaded');
};

const updateBookStatusFunc = async (req: Request, res: Response): Promise<Response> => {
  if (!req.query.bookId || !req.query.bookStatus || !req.query.userId) {
    throw new Error('Missing data!!');
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { bookId, bookStatus, userId } = req.query;
  // const { userId } = req.body;

  console.log(bookId, bookStatus, userId);
  console.log('status', bookStatus);

  const states = ['reading', 'to_read', 'read'];
  // const states = ['completed', 'to_read', 'reading'];

  if (!states.includes(bookStatus as string)) {
    throw new Error('invalid book state');
  }

  const progress = await userCont.updateBookStatus(
    userId as string,
    bookId as string,

    bookStatus as string,
  );
  return res.status(200).json(progress);
};

export {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUserFunc,
  updateUserFunc, addBookToUserFunc, adduserRatingFunc, changeImgFunc, updateBookStatusFunc,
  removeBookFromUserFunc,
};
