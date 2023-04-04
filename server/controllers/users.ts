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

export { create };
