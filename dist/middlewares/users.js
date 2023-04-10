"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updateUserFunc = exports.deleteUserFunc = exports.deleteUser = exports.getOneUserFunc = exports.getAllUsersFunc = exports.createUser = void 0;
const dotenv = __importStar(require("dotenv"));
const users_1 = require("../controllers/users");
Object.defineProperty(exports, "deleteUser", { enumerable: true, get: function () { return users_1.deleteUser; } });
const authuntication_1 = require("./authuntication");
dotenv.config();
// : Promise<Response>
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, userName, } = req.body;
    let { password } = req.body;
    // password = bcrypt.hashSync(password, 10);
    password = (0, authuntication_1.hashPassword)(password);
    const user = yield (0, users_1.create)({
        firstName, lastName, email, password, userName,
    });
    if (!user)
        throw new Error('Error: user is not created');
    return res.status(200).json(user);
});
exports.createUser = createUser;
const getAllUsersFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, users_1.getAllUsers)();
    return res.status(200).json(users);
});
exports.getAllUsersFunc = getAllUsersFunc;
const getOneUserFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const oneUser = yield (0, users_1.getOneUser)(id);
    return res.status(200).json(oneUser);
});
exports.getOneUserFunc = getOneUserFunc;
const deleteUserFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const student = yield (0, users_1.deleteUser)(id);
    return res.status(200).json({ 'User deleted': student });
});
exports.deleteUserFunc = deleteUserFunc;
const updateUserFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        throw new Error('Enter id to update');
    }
    const { id } = req.params;
    const { firstName, lastName, email, userName, } = req.body;
    let { password } = req.body;
    if (password) {
        password = (0, authuntication_1.hashPassword)(password);
    }
    const updateObject = {
        firstName, lastName, password, email, userName,
    };
    if (Object.keys(updateObject).length === 0) {
        throw new Error('Please enter data to update!');
    }
    const student = yield (0, users_1.updateUser)(id, updateObject);
    return res.status(200).json(student);
});
exports.updateUserFunc = updateUserFunc;
