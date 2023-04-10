"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const reviewSchema = new Schema({
    bookId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    content: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
});
// const Review = mongoose.model('Review', reviewSchema);
reviewSchema.plugin(mongoose_paginate_v2_1.default);
const Review = mongoose_1.default.model('reviews', reviewSchema, 'reviews');
exports.default = Review;
