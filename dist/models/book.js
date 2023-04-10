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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSchema = void 0;
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose_1 = __importStar(require("mongoose"));
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
exports.bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255,
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 1024,
    },
    image: {
        type: String,
        // required: true,
        // unique: true,
        minLength: 5,
        maxLength: 1024,
    },
    category: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
    author: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Author',
        },
    ],
    rating: {
        type: Number,
        // required: true,
        min: 0.0,
        max: 5.0,
    },
    published_date: {
        type: Date,
    },
});
exports.bookSchema.plugin(mongoose_paginate_v2_1.default);
const Book = mongoose_1.default.model('books', exports.bookSchema, 'books');
exports.default = Book;
