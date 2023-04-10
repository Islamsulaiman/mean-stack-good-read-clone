"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminfunc = exports.createAdmin = exports.getAdminData = void 0;
const admins_1 = require("../controllers/admins");
const authuntication_1 = require("./authuntication");
const getAdminData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ourAdmin = yield (0, admins_1.getAdmin)(req.body.email);
    res.status(200).json(ourAdmin);
});
exports.getAdminData = getAdminData;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, userName, } = req.body;
    let { password } = req.body;
    password = (0, authuntication_1.hashPassword)(password);
    const admin = yield (0, admins_1.create)({
        firstName, lastName, email, password, userName,
    });
    if (!admin)
        throw new Error('Error: Admin is not created');
    return res.status(200).json(admin);
});
exports.createAdmin = createAdmin;
const deleteAdminfunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const student = yield (0, admins_1.deleteAdmin)(email);
    return res.status(200).json({ 'Admin deleted': student });
});
exports.deleteAdminfunc = deleteAdminfunc;
