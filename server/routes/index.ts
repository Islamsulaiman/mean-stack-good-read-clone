import { Router } from 'express';
import { studentRoute } from './users';

const router = Router();

// 1. user route
router.use('/user', studentRoute);

export const indexRouter:Router = router;
