import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// admin validation
const checkFirstName = body('firstName')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('First name is required')
  .isLength({ min: 3, max: 30 })
  .withMessage('first name: must be at least 3 chars long & maximum 30 chars');

const checkLastName = body('lastName')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Last name is required')
  .isLength({ min: 3, max: 30 })
  .withMessage('Last name: must be at least 3 chars long & maximum 30 chars');

const checkEmail = body('email')
  .isString()
  .isEmail()
  .withMessage('Email is not an email')
  .normalizeEmail()
  .trim()
  .exists({ checkFalsy: true })
  .withMessage('Email is required')
  .isLength({ min: 5, max: 100 })
  .withMessage('Email: must be at least 100 chars long & maximum 100 chars');

const checkUserName = body('username')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Username is required')
  .trim()
  .isLength({ min: 5, max: 30 })
  .withMessage('Username: must be at least 3 chars long & maximum 30 chars');

const checkPassowrd = body('password')
  .exists({ checkFalsy: true })
  .withMessage('Password is required')
  .trim()
  .isLength({ min: 8, max: 1024 })
  .withMessage('Password: must be at least 8 chars longs');
// author validation
const fullName = body('fullName')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Full-name is required')
  .isLength({ min: 3, max: 255 })
  .withMessage('Full-name: must be at least 3 chars long & maximum 30 chars');

const checkDate = body('DOB')
  .isDate()
  .withMessage('Date: must be in correct format yyyy:mm:dd')
  .exists({ checkFalsy: true })
  .withMessage('Date is required');

// book validation

const checkTitle = body('title')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Title is required')
  .isLength({ min: 3, max: 255 })
  .withMessage('Title: must be at least 3 chars long & maximum 255 chars');

const checkDescription = body('description')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Description is required')
  .isLength({ min: 3, max: 1024 })
  .withMessage('Description: must be at least 3 chars long & maximum 1000 chars');

const checkImage = body('image')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Image is required')
  .isLength({ min: 5, max: 1024 });

const checkRating = body('rating')
  .isNumeric()
  .withMessage('is not an number')
  .exists({ checkFalsy: true })
  .withMessage('Avg.Rating is required')
  .isFloat({ min: 0.0, max: 5.0 });

const checkPublishedDate = body('publishedDate')
  .isDate()
  .withMessage('Publishded Date is invalid');

// catagory validation
const checkCatagoryName = body('name')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 255 })
  .withMessage('Catagory name: must be at least 3 chars long & maximum 255 chars');

// review validation

const checkReview = body('content')
  .isString()
  .exists({ checkFalsy: true })
  .withMessage('Content is required')
  .isLength({ min: 3, max: 255 })
  .withMessage('Content: must be at least 3 chars long & maximum 255 chars');

const checkBookStatus = body('bookStatus')
  .isString()
  .isIn(['read', 'to_read', 'reading'])
  .default('to_read');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function validateInput(req: Request, res: Response, next:NextFunction): void {
  const errors = validationResult(req);
  const errorParameter = errors.array()[0];
  if (!errors.isEmpty()) throw new Error(errorParameter.msg);

  // res.json(errorParameter.msg);
  next();
}

export {
  checkFirstName,
  checkLastName,
  checkEmail,
  checkUserName,
  checkPassowrd,
  fullName,
  checkDate,
  checkTitle,
  checkDescription,
  checkImage,
  checkRating,
  checkPublishedDate,
  checkCatagoryName,
  checkReview,
  checkBookStatus,
  validateInput,
};
