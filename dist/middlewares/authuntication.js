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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.hashPassword = exports.generateJWT = exports.comparePasswd = void 0;
const dotenv = __importStar(require("dotenv"));
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models");
const { promisify } = require('util');
const verify = promisify(jwt.verify);
dotenv.config();
const JWTSecret = process.env.JWT_SECRET;
const comparePasswd = (enteredPassword, DB_password) => __awaiter(void 0, void 0, void 0, function* () {
    // check if password match Db password
    const result = yield bcrypt_1.default.compare(enteredPassword, DB_password); // return's bool
    return result;
});
exports.comparePasswd = comparePasswd;
// eslint-disable-next-line max-len
const generateJWT = (payload) => jwt.sign(payload, JWTSecret, { expiresIn: '7d' });
exports.generateJWT = generateJWT;
const hashPassword = (password) => bcrypt_1.default.hashSync(password, 10);
exports.hashPassword = hashPassword;
// Check if admin
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.access_token;
    const payload = verify(token, JWTSecret);
    const admin = yield models_1.Admin.findById(payload.id);
    if (!admin) {
        throw new Error('User not found');
    }
    return next();
});
exports.auth = auth;
