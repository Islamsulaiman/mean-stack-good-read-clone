import { Router } from 'express';
import { getAdminData, createAdmin, deleteAdminfunc } from '../middlewares/admins';

const router = Router();

router.get('/', getAdminData);
router.post('/add', createAdmin);
router.post('/delete', deleteAdminfunc);

export const AdminRoute : Router = router;
