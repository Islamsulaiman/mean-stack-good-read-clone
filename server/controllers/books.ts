import { Book } from '../models';

type NewBook = {
  title:string,
  description:string
};

// 1.createBook
const create = (data:NewBook) => Book.create(data);

export {
  create,
};
