"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Review = exports.Category = exports.Book = exports.Author = exports.Admin = void 0;
const admin_1 = __importDefault(require("./admin"));
exports.Admin = admin_1.default;
const author_1 = __importDefault(require("./author"));
exports.Author = author_1.default;
const book_1 = __importDefault(require("./book"));
exports.Book = book_1.default;
const category_1 = __importDefault(require("./category"));
exports.Category = category_1.default;
const review_1 = __importDefault(require("./review"));
exports.Review = review_1.default;
const user_1 = __importDefault(require("./user"));
exports.User = user_1.default;
