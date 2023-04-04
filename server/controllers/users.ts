import { User } from '../models';

// data types
type NewUser = {
  firstName: String;
  lastName: String;
  password: String
  email: String,
  userName: String
};

type UpdteUserData = {
  firstName?: String;
  lastName?: String;
  password?: String
  email?: String,
  userName?: String
};

// 1. create new user
const create = (data: NewUser) => User.create(data);

// 2. get all users
const getAllUsers = () => User.find().exec();

// 3. get one user
const getOneUser = (data: string) => User.findOne({ _id: data });

// 4. delete user
const deleteUser = (data: string) => User.deleteOne({ _id: data });

// 5 login, return hashed password
const login = (email:string) => {
  const student = User.findOne({ email });
  return student;
};

// 6. update user
const updateUser = (id: string, data: UpdteUserData) => User.updateOne({ _id: id }, data);

export {
  create, getAllUsers, getOneUser, deleteUser, updateUser, login,
};
