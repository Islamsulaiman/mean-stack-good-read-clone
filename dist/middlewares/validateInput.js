"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = exports.checkBookStatus = exports.checkReview = exports.checkCatagoryName = exports.checkPublishedDate = exports.checkRating = exports.checkImage = exports.checkDescription = exports.checkTitle = exports.checkDate = exports.fullName = exports.checkPassowrd = exports.checkUserName = exports.checkEmail = exports.checkLastName = exports.checkFirstName = void 0;
const express_validator_1 = require("express-validator");
// admin validation
const checkFirstName = (0, express_validator_1.body)('firstName')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('First name is required')
    .isLength({ min: 3, max: 30 })
    .withMessage('first name: must be at least 3 chars long & maximum 30 chars');
exports.checkFirstName = checkFirstName;
const checkLastName = (0, express_validator_1.body)('lastName')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Last name is required')
    .isLength({ min: 3, max: 30 })
    .withMessage('Last name: must be at least 3 chars long & maximum 30 chars');
exports.checkLastName = checkLastName;
const checkEmail = (0, express_validator_1.body)('email')
    .isString()
    .isEmail()
    .withMessage('Email is not an email')
    .normalizeEmail()
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Email is required')
    .isLength({ min: 5, max: 100 })
    .withMessage('Email: must be at least 100 chars long & maximum 100 chars');
exports.checkEmail = checkEmail;
const checkUserName = (0, express_validator_1.body)('username')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Username is required')
    .trim()
    .isLength({ min: 5, max: 30 })
    .withMessage('Username: must be at least 3 chars long & maximum 30 chars');
exports.checkUserName = checkUserName;
const checkPassowrd = (0, express_validator_1.body)('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required')
    .trim()
    .isLength({ min: 8, max: 1024 })
    .withMessage('Password: must be at least 8 chars longs');
exports.checkPassowrd = checkPassowrd;
// author validation
const fullName = (0, express_validator_1.body)('fullName')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Full-name is required')
    .isLength({ min: 3, max: 255 })
    .withMessage('Full-name: must be at least 3 chars long & maximum 30 chars');
exports.fullName = fullName;
const checkDate = (0, express_validator_1.body)('DOB')
    .isDate()
    .withMessage('Date: must be in correct format yyyy:mm:dd')
    .exists({ checkFalsy: true })
    .withMessage('Date is required');
exports.checkDate = checkDate;
// book validation
const checkTitle = (0, express_validator_1.body)('title')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Title is required')
    .isLength({ min: 3, max: 255 })
    .withMessage('Title: must be at least 3 chars long & maximum 255 chars');
exports.checkTitle = checkTitle;
const checkDescription = (0, express_validator_1.body)('description')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Description is required')
    .isLength({ min: 3, max: 1024 })
    .withMessage('Description: must be at least 3 chars long & maximum 1000 chars');
exports.checkDescription = checkDescription;
const checkImage = (0, express_validator_1.body)('image')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Image is required')
    .isLength({ min: 5, max: 1024 });
exports.checkImage = checkImage;
const checkRating = (0, express_validator_1.body)('rating')
    .isNumeric()
    .withMessage('is not an number')
    .exists({ checkFalsy: true })
    .withMessage('Avg.Rating is required')
    .isFloat({ min: 0.0, max: 5.0 });
exports.checkRating = checkRating;
const checkPublishedDate = (0, express_validator_1.body)('publishedDate')
    .isDate()
    .withMessage('Publishded Date is invalid');
exports.checkPublishedDate = checkPublishedDate;
// catagory validation
const checkCatagoryName = (0, express_validator_1.body)('name')
    .isString()
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 255 })
    .withMessage('Catagory name: must be at least 3 chars long & maximum 255 chars');
exports.checkCatagoryName = checkCatagoryName;
// review validation
const checkReview = (0, express_validator_1.body)('content')
    .isString()
    .exists({ checkFalsy: true })
    .withMessage('Content is required')
    .isLength({ min: 3, max: 255 })
    .withMessage('Content: must be at least 3 chars long & maximum 255 chars');
exports.checkReview = checkReview;
const checkBookStatus = (0, express_validator_1.body)('bookStatus')
    .isString()
    .isIn(['read', 'to_read', 'reading'])
    .default('to_read');
exports.checkBookStatus = checkBookStatus;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function validateInput(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    const errorParameter = errors.array()[0];
    if (!errors.isEmpty())
        throw new Error(errorParameter.msg);
    // res.json(errorParameter.msg);
    next();
}
exports.validateInput = validateInput;
