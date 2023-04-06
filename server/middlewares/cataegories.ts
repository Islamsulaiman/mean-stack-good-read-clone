import { Request, Response } from 'express';

import * as dotenve from 'dotenv';
import {
  create, getAll, getOne, update, deleteOne,
} from '../controllers/cataegories';

dotenve.config();

// 1.createCategory
const createCategory = async (req:Request, res:Response) => {
  const {
    name,
  } = req.body;
  const category = await create({
    name,
  });
  if (!category) throw new Error('Error: Category not created');

  return res.status(200).json({ message: 'Category Created Successfully', category });
};
// 2.getAllCategories
const getAllCategories = async (req:Request, res:Response) => {
  const { limit, page } = req.query;
  const category = await getAll(limit, page);
  return res.status(200).json({ message: 'Categories : ', category });
};
// 3.get One Category
const getOneCategory = async (req:Request, res:Response) => {
  const { id } = req.params;
  const category = await getOne(id);
  if (!category) throw new Error('Error: Category not found');
  res.status(200).json({ message: 'Category Found Successfully: ', category });
};
// 4.update Category
const updateCategory = async (req:Request, res:Response) => {
  const { id } = req.params;
  const {
    name,
  } = req.body;
  const category = await getOne(id);
  if (!category) throw new Error('Error: Category not found');
  const updatedCategory = await update(id, { name });
  if (!updatedCategory) throw new Error('Error: Category not updated');
  res.status(200).json({ 'Category Updated Successfully': updatedCategory });
};

// 5.deleteCategory
const deleteCategory = async (req:Request, res:Response) => {
  const { id } = req.params;
  const category = await getOne(id);
  if (!category) throw new Error('Error: Category not found');
  const deletedCategory = await deleteOne(id);
  if (!deletedCategory) throw new Error('Error: Category not deleted');
  res.status(200).json({ 'Category deleted Successfully': deletedCategory });
};
export {
  createCategory, getAllCategories, getOneCategory, updateCategory, deleteCategory,
};
