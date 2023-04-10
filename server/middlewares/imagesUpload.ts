import multer from 'multer';
import cloudinary from 'cloudinary';

const cloudi = cloudinary.v2;
cloudi.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
const maxSize = 1024 * 1024 * 5;

/* Save images in server */
const authorStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploadedImages/authors');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + randomNumber.toString() + file.originalname);
  },
});

const bookStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploadedImages/books');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + randomNumber.toString() + file.originalname);
  },
});

const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploadedImages/users');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + randomNumber.toString() + file.originalname);
  },
});

function fileFilter(req: any, file: any, cb: any) {
  if (file.mimetype === 'image/png'
      || file.mimetype === 'image/jpg'
      || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const authorUpload = multer({ fileFilter, storage: authorStorage, limits: { fileSize: maxSize } });
const bookUpload = multer({ fileFilter, storage: bookStorage, limits: { fileSize: maxSize } });
const userUpload = multer({ fileFilter, storage: userStorage, limits: { fileSize: maxSize } });

export {
  authorUpload,
  bookUpload,
  userUpload,
  cloudi
};
