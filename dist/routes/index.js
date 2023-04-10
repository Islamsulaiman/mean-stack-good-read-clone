"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
const cataegories_1 = require("./cataegories");
const books_1 = require("./books");
const users_1 = require("./users");
const authors_1 = require("./authors");
const reviews_1 = require("./reviews");
const admins_1 = require("./admins");
const login_1 = require("../middlewares/login");
const router = (0, express_1.Router)();
router.use('/login', login_1.userLogin);
router.use('/admin~@~Login', login_1.adminLogin);
// 1. user route
router.use('/category', cataegories_1.categoryRoute);
router.use('/book', books_1.bookRouter);
router.use('/users', users_1.userRoute);
// 2. author route
router.use('/authors', authors_1.authors);
// 3. review route
router.use('/reviews', reviews_1.reviews);
// 4. Admin route
router.use('/admin', admins_1.AdminRoute);
exports.indexRouter = router;
