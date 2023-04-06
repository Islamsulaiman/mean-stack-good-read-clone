import { Router } from 'express';
import { getAdminData } from '../middlewares/admins';

const router = Router();

router.get('/', getAdminData);

export const AdminRoute : Router = router;
