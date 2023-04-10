"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = exports.errorFunction = void 0;
// main error function at the application
const errorFunction = (err, req, res, next) => {
    console.log(err);
    next();
};
exports.errorFunction = errorFunction;
// high level Error wrapper function
const errorHandling = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.errorHandling = errorHandling;
