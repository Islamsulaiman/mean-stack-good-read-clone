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
exports.deleteOne = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const models_1 = require("../models");
// 1.createBook
const create = (data) => __awaiter(void 0, void 0, void 0, function* () { return models_1.Book.create(data); });
exports.create = create;
// 2.get All books
const getAll = (limit, page) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield models_1.Book.paginate({}, {
        limit: limit > 0 && limit < 10 ? limit : 5,
        page: page || 1,
    });
    return books;
});
exports.getAll = getAll;
// 3.getOneBook
const getOne = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield models_1.Book.findById({ _id: data });
    return book;
});
exports.getOne = getOne;
// 4.updateBook
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield models_1.Book.findByIdAndUpdate({ _id: id }, data, { new: true });
    return book;
});
exports.update = update;
// 5.deleteBook
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield models_1.Book.findByIdAndDelete({ _id: id });
    return book;
});
exports.deleteOne = deleteOne;
