import { Router } from 'express';
import {
  getAdminData, createAdmin, deleteAdminfunc, loginfunc,
} from '../middlewares/admins';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();

router.get('/', errorHandling(getAdminData));
router.post('/add', createAdmin);
router.post('/delete', deleteAdminfunc);
router.post('/login', loginfunc);

export const AdminRoute : Router = router;
