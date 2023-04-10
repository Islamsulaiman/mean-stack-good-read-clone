"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 100,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 1024,
    },
    image: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 1024,
    },
    books: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Book',
            book_status: {
                type: String,
                enum: ['read', 'to_read', 'reading'],
                default: 'to_read',
            },
        },
    ],
}, {
    timestamps: true,
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
