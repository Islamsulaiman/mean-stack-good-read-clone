"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const authorSchema = new Schema({
    fullName: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 255,
    },
    DOB: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    bookId: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Book',
        }],
});
const Author = mongoose_1.default.model('Author', authorSchema);
exports.default = Author;
