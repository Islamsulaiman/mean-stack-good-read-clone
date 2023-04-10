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
exports.categoryRoute = void 0;
const express_1 = require("express");
const cataegories_1 = require("../middlewares/cataegories");
const errorHandling_1 = require("../middlewares/errorHandling");
const validation = __importStar(require("../middlewares/validateInput"));
const router = (0, express_1.Router)();
// 1.create Category
router.post('/', validation.checkCatagoryName, validation.validateInput, (0, errorHandling_1.errorHandling)(cataegories_1.createCategory));
// 2.get all categories
router.get('/', cataegories_1.getAllCategories);
// 3.get one category
router.get('/:id', (0, errorHandling_1.errorHandling)(cataegories_1.getOneCategory));
// 4.update one category
router.patch('/:id', validation.checkCatagoryName, validation.validateInput, (0, errorHandling_1.errorHandling)(cataegories_1.updateCategory));
// 5.delete  category
router.delete('/:id', (0, errorHandling_1.errorHandling)(cataegories_1.deleteCategory));
exports.categoryRoute = router;
