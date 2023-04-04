import { Router } from 'express';
import { createUser } from '../middlewares/users';

const router = Router();

// 1)create user
router.post('/', createUser);

export const studentRoute: Router = router;
