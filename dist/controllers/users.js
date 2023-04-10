"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.updateUser = exports.deleteUser = exports.getOneUser = exports.getAllUsers = exports.create = void 0;
const models_1 = require("../models");
// 1. create new user
const create = (data) => models_1.User.create(data);
exports.create = create;
// 2. get all users
const getAllUsers = () => models_1.User.find().exec();
exports.getAllUsers = getAllUsers;
// 3. get one user
const getOneUser = (data) => models_1.User.findOne({ _id: data });
exports.getOneUser = getOneUser;
// 4. delete user
const deleteUser = (data) => models_1.User.deleteOne({ _id: data });
exports.deleteUser = deleteUser;
// 5 login, return hashed password
const getUser = (email) => {
    const user = models_1.User.findOne({ email });
    return user;
};
exports.getUser = getUser;
// 6. update user
const updateUser = (id, data) => models_1.User.updateOne({ _id: id }, data);
exports.updateUser = updateUser;
