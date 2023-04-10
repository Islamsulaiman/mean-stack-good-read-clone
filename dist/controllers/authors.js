"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.edit = exports.get = exports.create = void 0;
// import { ObjectId } from 'mongoose';
const models_1 = require("../models");
// Create author
const create = (data) => models_1.Author.create(data);
exports.create = create;
// Get authors
const get = () => models_1.Author.find();
exports.get = get;
// edit author by id
const edit = (id, data) => {
    models_1.Author.findById(id);
    return models_1.Author.findByIdAndUpdate(id, data, { new: true });
};
exports.edit = edit;
// delete author by id
const deleteAuthor = (id) => models_1.Author.findByIdAndDelete(id);
exports.deleteAuthor = deleteAuthor;
