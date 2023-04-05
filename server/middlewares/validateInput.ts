import { body } from 'express-validator';

// admin validation
const checkFirstName = body('first_name')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 30 });

const checkLastName = body('last_name')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 30 });

const checkEmail = body('email')
  .isString()
  .isEmail()
  .normalizeEmail()
  .trim()
  .exists({ checkFalsy: true })
  .isLength({ min: 5, max: 100 });

const checkUserName = body('username')
  .isString()
  .exists({ checkFalsy: true })
  .trim()
  .isLength({ min: 5, max: 30 });

const checkPassowrd = body('password')
  .exists({ checkFalsy: true })
  .trim()
  .isLength({ min: 8, max: 1024 });
// author validation

const checkDate = body('DOB')
  .isDate()
  .exists({ checkFalsy: true });

// book validation

const checkTitle = body('title')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 255 });

const checkDescription = body('description')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 1024 });

const checkImage = body('image')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 5, max: 1024 });

const checkRating = body('rating')
  .isNumeric()
  .exists({ checkFalsy: true })
  .isFloat({ min: 0.0, max: 5.0 });

const checkPublishedDate = body('published_date')
  .isDate();

// catagory validation
const checkCatagoryName = body('name')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 255 });

// review validation

const checkReview = body('review')
  .isString()
  .exists({ checkFalsy: true })
  .isLength({ min: 3, max: 255 });

const checkBookStatus = body('book_status')
  .isString()
  .isIn(['read', 'to_read', 'reading'])
  .default('to_read');

export {
  checkFirstName,
  checkLastName,
  checkEmail,
  checkUserName,
  checkPassowrd,
  checkDate,
  checkTitle,
  checkDescription,
  checkImage,
  checkRating,
  checkPublishedDate,
  checkCatagoryName,
  checkReview,
  checkBookStatus,
};
