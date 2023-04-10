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
// 1.create new category
const create = (data) => models_1.Category.create(data);
exports.create = create;
// 2.get all categories
const getAll = (limit, page) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield models_1.Category.paginate({}, {
        limit: limit > 0 && limit < 10 ? limit : 5,
        page: page || 1,
    });
    return categories;
});
exports.getAll = getAll;
// 3.get One Category
const getOne = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield models_1.Category.findOne({ _id: data });
    return category;
});
exports.getOne = getOne;
// 4.update
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield models_1.Category.findByIdAndUpdate({ _id: id }, data, { new: true });
    return category;
});
exports.update = update;
// 5.delete
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield models_1.Category.findByIdAndDelete({ _id: id });
    return category;
});
exports.deleteOne = deleteOne;
