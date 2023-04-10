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
exports.authors = void 0;
const express_1 = require("express");
const errorHandling_1 = require("../middlewares/errorHandling");
const validation = __importStar(require("../middlewares/validateInput"));
const authors_1 = require("../middlewares/authors");
const authuntication_1 = require("../middlewares/authuntication");
const imagesUpload_1 = require("../middlewares/imagesUpload");
// authorUpload.single('image')
const router = (0, express_1.Router)();
router.use((0, errorHandling_1.errorHandling)(authuntication_1.auth));
// Create author
router.post('/', validation.fullName, validation.checkDate, validation.validateInput, imagesUpload_1.authorUpload.single('image'), (0, errorHandling_1.errorHandling)(authors_1.createAuthor));
// Get authors
router.get('/', (0, errorHandling_1.errorHandling)(authors_1.getAuthors));
// Modify author
router.patch('/:id', validation.fullName, validation.checkDate, validation.validateInput, imagesUpload_1.authorUpload.single('image'), (0, errorHandling_1.errorHandling)(authors_1.editAuthorById));
// Delete author
router.delete('/:id', (0, errorHandling_1.errorHandling)(authors_1.deleteAuthorById));
exports.authors = router;
