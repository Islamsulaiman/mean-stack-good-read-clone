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
exports.deleteAuthorById = exports.editAuthorById = exports.getAuthors = exports.createAuthor = void 0;
const authors_1 = require("../controllers/authors");
// import { authors } from '../routes/authors';
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, DOB, } = req.body;
    // Image handling
    let image = '';
    image = !req.file ? 'server\\uploadedImages\\default_avatar_41894.png' : req.file.path;
    const author = yield (0, authors_1.create)({
        fullName, DOB: new Date(DOB), image,
    });
    return res.status(200).json(author);
});
exports.createAuthor = createAuthor;
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield (0, authors_1.get)();
    return res.status(200).json(author);
});
exports.getAuthors = getAuthors;
const editAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, DOB, } = req.body;
    const { id } = req.params;
    const author = yield (0, authors_1.edit)(id, {
        fullName, DOB: new Date(DOB),
    });
    return res.status(200).json(author);
});
exports.editAuthorById = editAuthorById;
const deleteAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedAuthor = yield (0, authors_1.deleteAuthor)(id);
    if (!deletedAuthor)
        throw new Error("User doens't exist");
    return res.status(200).json('Author has been deleted successfully');
});
exports.deleteAuthorById = deleteAuthorById;
