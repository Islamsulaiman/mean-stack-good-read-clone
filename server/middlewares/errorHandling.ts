import {
  Request, Response, NextFunction,
} from 'express';

// main error function at the application
const errorFunction = (err:Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  next();
};

// high level Error wrapper function
const errorHandling = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export { errorFunction, errorHandling };
