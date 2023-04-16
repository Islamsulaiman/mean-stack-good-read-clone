import {
  Request, Response, NextFunction,
} from 'express';

// main error function at the application
const errorFunction = (err:Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message.substring(0, 6) === 'E11000') {
    // error from mongo (duplicated email)
    res.status(400).json({ 'Error Massage': 'Duplicated data!' });
  }

  console.log(err);

  next();
};

// high level Error wrapper function
const errorHandling = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export { errorFunction, errorHandling };
