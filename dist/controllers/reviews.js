"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRev = exports.edit = exports.get = exports.create = void 0;
// import { ObjectId } from 'mongoose';
const models_1 = require("../models");
// Create review
const create = (id, data) => models_1.Review.create({
    bookId: id,
    content: data.content,
    userId: data.userId,
});
exports.create = create;
// Get reviews for specific book
const get = (id, limit, page) => models_1.Review.paginate({ bookId: id }, {
    limit: limit > 0 && limit < 10 ? limit : 5,
    page: page || 1,
});
exports.get = get;
// edit review
const edit = (id, content, userId) => models_1.Review.findOneAndUpdate({
    bookId: id,
    userId,
}, { $set: { content } });
exports.edit = edit;
// delete review by id
const deleteRev = (id, userId) => models_1.Review.findOneAndDelete({
    bookId: id,
    userId,
});
exports.deleteRev = deleteRev;
