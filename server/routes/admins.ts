import { Router } from 'express';
import { getAdminData, createAdmin, deleteAdminfunc, loginfunc } from '../middlewares/admins';

const router = Router();

router.get('/', getAdminData);
router.post('/add', createAdmin);
router.post('/delete', deleteAdminfunc);
router.post('/login', loginfunc);

export const AdminRoute : Router = router;
