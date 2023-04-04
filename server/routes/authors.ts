import { Router } from 'express';
// import { errorHandling } from '../middelwares/errorFunction';
import {
  createAuthor, getAuthors, editAuthorById, deleteAuthorById,
} from '../middlewares/authors';

// import { authorUpload } from '../middlewares/imagesUpload';
// authorUpload.single('image')
const router = Router();
// Create author
router.post('/', createAuthor);

// Get authors
router.get('/', getAuthors);

// Modify author
router.patch('/:id', editAuthorById);

// Delete author
router.delete('/:id', deleteAuthorById);

export const authors: Router = router;
