"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.create = exports.getAdmin = void 0;
const models_1 = require("../models");
const getAdmin = (data) => {
    const AdminData = models_1.Admin.findOne({ email: data }).exec();
    return AdminData;
};
exports.getAdmin = getAdmin;
const create = (data) => models_1.Admin.create(data);
exports.create = create;
const deleteAdmin = (data) => models_1.Admin.deleteOne({ email: data });
exports.deleteAdmin = deleteAdmin;
