"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpload = exports.bookUpload = exports.authorUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
const maxSize = 1024 * 1024 * 5;
/* Save images in server */
const authorStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploadedImages/authors');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + randomNumber.toString() + file.originalname);
    },
});
const bookStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploadedImages/books');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + randomNumber.toString() + file.originalname);
    },
});
const userStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploadedImages/users');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + randomNumber.toString() + file.originalname);
    },
});
function fileFilter(req, file, cb) {
    if (file.mimetype === 'image/png'
        || file.mimetype === 'image/jpg'
        || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
const authorUpload = (0, multer_1.default)({ fileFilter, storage: authorStorage, limits: { fileSize: maxSize } });
exports.authorUpload = authorUpload;
const bookUpload = (0, multer_1.default)({ fileFilter, storage: bookStorage, limits: { fileSize: maxSize } });
exports.bookUpload = bookUpload;
const userUpload = (0, multer_1.default)({ fileFilter, storage: userStorage, limits: { fileSize: maxSize } });
exports.userUpload = userUpload;
