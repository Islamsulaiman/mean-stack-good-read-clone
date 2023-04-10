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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = require("express");
const books_1 = require("../middlewares/books");
const reviews_1 = require("../middlewares/reviews");
const errorHandling_1 = require("../middlewares/errorHandling");
const validation = __importStar(require("../middlewares/validateInput"));
const imagesUpload_1 = require("../middlewares/imagesUpload");
const router = (0, express_1.Router)();
// 1.create Book
router.post('/', validation.checkTitle, validation.checkDescription, validation.validateInput, imagesUpload_1.bookUpload.single('image'), (0, errorHandling_1.errorHandling)(books_1.createBook));
// 1.create Book
router.post('/', imagesUpload_1.bookUpload.single('image'), (0, errorHandling_1.errorHandling)(books_1.createBook));
// 2.get all books
router.get('/', books_1.getAllBooks);
// 3.get one book
router.get('/:id', (0, errorHandling_1.errorHandling)(books_1.getOneBook));
// 4.update one book
router.patch('/:id', validation.checkTitle, validation.checkDescription, validation.validateInput, imagesUpload_1.bookUpload.single('image'), (0, errorHandling_1.errorHandling)(books_1.updateBook));
// 5.delete book
router.delete('/:id', (0, errorHandling_1.errorHandling)(books_1.deleteBook));
/* Reviews routes */
// 1. add review
router.post('/:id/review', (0, errorHandling_1.errorHandling)(reviews_1.addReview));
// 2. get reviews
router.get('/:id/review', (0, errorHandling_1.errorHandling)(reviews_1.getReviews));
// 3. edit review
router.patch('/:id/review/update', (0, errorHandling_1.errorHandling)(reviews_1.editReview));
// 4. delete review
router.delete('/:id/review/delete/', (0, errorHandling_1.errorHandling)(reviews_1.deleteReview));
exports.bookRouter = router;
