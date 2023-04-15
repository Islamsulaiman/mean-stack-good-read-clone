import { User } from '../models';

// data types
type NewUser = {
  firstName: String;
  lastName: String;
  password: String
  email: String,
  userName: String
  image: String
};

type UpdteUserData = {
  firstName?: String;
  lastName?: String;
  password?: String
  email?: String,
  userName?: String
  image?: String
};

// 1. create new user
const create = (data: NewUser) => User.create(data);

// 2. get all users
const getAllUsers = () => User.find().exec();

// 3. get one user
const getOneUser = (data: string, skip:number, limit:number) => {
  if (limit === 0) {
    const user = User.findOne({ _id: data }).populate('books.bookId').populate({
      path: 'books.bookId',
      populate: [
        {
          path: 'category',
          model: 'Category',
        },
        {
          path: 'author',
          model: 'Author',
        },
      ],
    });
    return user;
  }
  const user = User.findOne({ _id: data }, { books: { $slice: [skip, limit] }, numberOfPages: { $ceil: { $divide: [{ $size: '$books' }, limit] } } }).populate('books.bookId').populate({
    path: 'books.bookId',
    populate: [
      {
        path: 'category',
        model: 'Category',
      },
      {
        path: 'author',
        model: 'Author',
      },
    ],
  });

  return user;
};

// 4. delete user
const deleteUser = (data: string) => User.deleteOne({ _id: data });

// 5 login, return hashed password
const getUser = (email:string) => {
  const user = User.findOne({ email });
  return user;
};
// 6. update user
const updateUser = (id: string, data: UpdteUserData) => User.updateOne({ _id: id }, data);

// 7. Add book to user
// eslint-disable-next-line max-len, max-len
const addBookToUser = (id: string, bookId: string) => User.updateOne({ _id: id }, { $push: { books: { bookId } } });

const removeBookFromUser = async (userId: string, bookId: string) => {
  try {
    const user = await User.findOneAndUpdate({ _id: userId }, { $pull: { books: { bookId } } });
    return user;
  } catch (error) {
    throw new Error('wrong data');
  }
};

// 8. update user rating
const adduserRating = (id: string, bookId: string, rating: number) => {
  const user = User.findOneAndUpdate(
    { _id: id, 'books.bookId': bookId },
    { $set: { 'books.$.rating': rating } },
    { projection: { 'books.$': 1, _id: 0 } },
  );
  return user;
};

// 9. update image
const UpdteUserImg = (id: string, image: string) => User.findOneAndUpdate({ _id: id }, { image });

// update book status
const updateBookStatus = (userId: string, bookId:string, bookStatus: string) => {
  console.log('contro', userId, bookId, bookStatus);
  // eslint-disable-next-line max-len
  const user = User.updateOne({ _id: userId, 'books.bookId': bookId }, { $set: { 'books.$.book_status': bookStatus } }).exec();
  // const user = User.findOne({ _id: userId }).exec();

  return user;
};

export {
  create, getAllUsers, getOneUser, deleteUser, updateUser, getUser,
  addBookToUser, adduserRating, UpdteUserImg, updateBookStatus, removeBookFromUser,
};
