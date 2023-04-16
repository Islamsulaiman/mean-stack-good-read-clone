import { Router } from 'express';
import {
  getAdminData, createAdmin, deleteAdminfunc, loginfunc,
} from '../middlewares/admins';

import { errorHandling } from '../middlewares/errorHandling';

const router = Router();

router.get('/', errorHandling(getAdminData));
router.post('/add', errorHandling(createAdmin));
router.post('/delete', errorHandling(deleteAdminfunc));
router.post('/login', errorHandling(loginfunc));

export const AdminRoute : Router = router;
