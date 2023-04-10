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
exports.deleteReview = exports.editReview = exports.getReviews = exports.addReview = void 0;
const reviews_1 = require("../controllers/reviews");
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    const { id } = req.params;
    const userId = '642ca9cd340e07f65ed05a07'; // we will get it from front
    const review = yield (0, reviews_1.create)(id, { content, userId });
    return res.status(200).json({ message: 'Review is created successfully', review });
});
exports.addReview = addReview;
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page } = req.query;
    const { id } = req.params;
    const reviews = yield (0, reviews_1.get)(id, limit, page);
    return res.status(200).json(reviews);
});
exports.getReviews = getReviews;
const editReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    const { id } = req.params; // book id
    const userId = '642ca9cd340e07f65ed05a07'; // we will get it from front
    yield (0, reviews_1.edit)(id, content, userId);
    return res.status(200).json({ message: 'Review is updated successfully' });
});
exports.editReview = editReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userId = '642ca9cd340e07f65ed05a07'; // we will get it from front
    const deletedReview = yield (0, reviews_1.deleteRev)(id, userId);
    if (!deletedReview)
        throw new Error("Review doens't exist");
    return res.status(200).json({ message: 'Review has been deleted successfully' });
});
exports.deleteReview = deleteReview;
