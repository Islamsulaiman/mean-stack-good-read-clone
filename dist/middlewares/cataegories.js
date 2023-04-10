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
exports.deleteCategory = exports.updateCategory = exports.getOneCategory = exports.getAllCategories = exports.createCategory = void 0;
const dotenve = __importStar(require("dotenv"));
const cataegories_1 = require("../controllers/cataegories");
dotenve.config();
// 1.createCategory
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, } = req.body;
    const category = yield (0, cataegories_1.create)({
        name,
    });
    if (!category)
        throw new Error('Error: Category not created');
    return res.status(200).json({ message: 'Category Created Successfully', category });
});
exports.createCategory = createCategory;
// 2.getAllCategories
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page } = req.query;
    const category = yield (0, cataegories_1.getAll)(limit, page);
    return res.status(200).json({ message: 'Categories : ', category });
});
exports.getAllCategories = getAllCategories;
// 3.get One Category
const getOneCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield (0, cataegories_1.getOne)(id);
    if (!category)
        throw new Error('Error: Category not found');
    res.status(200).json({ message: 'Category Found Successfully: ', category });
});
exports.getOneCategory = getOneCategory;
// 4.update Category
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, } = req.body;
    const category = yield (0, cataegories_1.getOne)(id);
    if (!category)
        throw new Error('Error: Category not found');
    const updatedCategory = yield (0, cataegories_1.update)(id, { name });
    if (!updatedCategory)
        throw new Error('Error: Category not updated');
    res.status(200).json({ 'Category Updated Successfully': updatedCategory });
});
exports.updateCategory = updateCategory;
// 5.deleteCategory
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield (0, cataegories_1.getOne)(id);
    if (!category)
        throw new Error('Error: Category not found');
    const deletedCategory = yield (0, cataegories_1.deleteOne)(id);
    if (!deletedCategory)
        throw new Error('Error: Category not deleted');
    res.status(200).json({ 'Category deleted Successfully': deletedCategory });
});
exports.deleteCategory = deleteCategory;
