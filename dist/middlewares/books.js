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
exports.deleteBook = exports.updateBook = exports.getOneBook = exports.getAllBooks = exports.createBook = void 0;
const dotenv = __importStar(require("dotenv"));
const books_1 = require("../controllers/books");
dotenv.config();
// 1.createBook
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, } = req.body;
    // Image handling
    let image = '';
    image = !req.file ? 'server\\uploadedImages\\default_avatar_41894.png' : req.file.path;
    const book = yield (0, books_1.create)({
        title,
        description,
        image,
    });
    if (!book)
        throw new Error('Error: Book not created');
    return res.status(200).json({ message: 'Book created successfully', book });
});
exports.createBook = createBook;
// 2.getAllbooks
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page } = req.query;
    const book = yield (0, books_1.getAll)(limit, page);
    return res.status(200).json({ message: 'Books', book });
});
exports.getAllBooks = getAllBooks;
// 3.getOneBook
const getOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield (0, books_1.getOne)(id);
    if (!book)
        throw new Error('Error: Book not found');
    return res.status(200).json({ message: 'Book Found Successfully', book });
});
exports.getOneBook = getOneBook;
// 4.updateBook
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, } = req.body;
    const book = yield (0, books_1.getOne)(id);
    if (!book)
        throw new Error('Error: Book not found');
    const updatedBook = yield (0, books_1.update)(id, { title, description });
    if (!updatedBook)
        throw new Error('Error: Book not updated');
    return res.status(200).json({ message: 'Book updated successfully', updatedBook });
});
exports.updateBook = updateBook;
// 5.deleteBook
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield (0, books_1.getOne)(id);
    if (!book)
        throw new Error('Error: Book not found');
    const deletedBook = yield (0, books_1.deleteOne)(id);
    if (!deletedBook)
        throw new Error('Error: Book not deleted');
    return res.status(200).json({ message: 'Book deleted successfully', deletedBook });
});
exports.deleteBook = deleteBook;
