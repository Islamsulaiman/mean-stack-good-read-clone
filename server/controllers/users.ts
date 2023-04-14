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
const getOneUser = (data: string) => {
  const user = User.findOne({ _id: data }).populate('books.bookId').populate({
    path: 'books.bookId',
    // populate: {
    //   path: 'author',
    //   model: 'Author',
    // },
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

export {
  create, getAllUsers, getOneUser, deleteUser, updateUser, getUser,
  addBookToUser, adduserRating, UpdteUserImg,
};
