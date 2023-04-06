import { Book } from '../models';

type NewBook = {
  title:string,
  description:string
};

// 1.createBook
const create = (data:NewBook) => Book.create(data);
// 2.get All books
const getAll = async (limit:any, page:any) => {
  const books = await Book.paginate({}, {
    limit: limit > 0 && limit < 10 ? limit : 5,
    page: page || 1,
  });
  return books;
};
export {
  create, getAll,
};
