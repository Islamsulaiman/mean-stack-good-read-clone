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
exports.adminLogin = exports.userLogin = void 0;
const authuntication_1 = require("./authuntication");
const users_1 = require("../controllers/users");
const admins_1 = require("../controllers/admins");
/* User login */
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userDataFromDB = yield (0, users_1.getUser)(email);
    // Email or password dosnt match!, try again
    if (!userDataFromDB) {
        throw new Error('Login error 1');
    }
    // compare user input data with db data
    const compare = yield (0, authuntication_1.comparePasswd)(password, userDataFromDB.password);
    if (!compare)
        throw new Error('Login error 2');
    else {
        // send user a token
        const token = (0, authuntication_1.generateJWT)({ id: userDataFromDB.id });
        res.status(200).json({ 'user token': token });
    }
});
exports.userLogin = userLogin;
/* Admin login */
const adminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const adminDataFromDB = yield (0, admins_1.getAdmin)(email);
    // Email or password dosnt match!, try again
    if (!adminDataFromDB) {
        throw new Error('Login error 1');
    }
    // compare admin input data with db data
    const compare = yield (0, authuntication_1.comparePasswd)(password, adminDataFromDB.password);
    if (!compare)
        throw new Error('Login error 2');
    else {
        // send admin a token
        const token = (0, authuntication_1.generateJWT)({ id: adminDataFromDB.id });
        res.cookie('access_token', token, { httpOnly: true, secure: true });
    }
});
exports.adminLogin = adminLogin;
