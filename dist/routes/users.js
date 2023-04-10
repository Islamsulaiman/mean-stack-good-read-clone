"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const users_1 = require("../middlewares/users");
const errorHandling_1 = require("../middlewares/errorHandling");
const router = (0, express_1.Router)();
// 1)create user
router.post('/', (0, errorHandling_1.errorHandling)(users_1.createUser));
// 2. get all users
router.get('/', users_1.getAllUsersFunc);
// 3. get one user
router.get('/:id', users_1.getOneUserFunc);
// 4. delete user
router.delete('/:id', users_1.deleteUserFunc);
// 5. update user
router.patch('/:id', (0, errorHandling_1.errorHandling)(users_1.updateUserFunc));
exports.userRoute = router;
