import { Router } from 'express';
import { authors } from './authors';

const router = Router();

router.use('/authors', authors);

export const routes:Router = router;
