import { User } from '../models';

// data types
type NewUser = {
  firstName: String;
  lastName: String;
  password: String
  email: String,
  userName: String
};

// 1. create new user
const create = (data: NewUser) => User.create(data);

// 2. get all users
const getAllUsers = () => User.find().exec();

// 3. get one user
const getOneUser = (data: string) => User.findOne({ _id: data });

export { create, getAllUsers, getOneUser };
