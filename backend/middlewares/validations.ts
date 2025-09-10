import { check, validationResult } from "express-validator";
import {type Request, type Response, type NextFunction } from "express";

const validateUser = [
    check("fullname")
        .notEmpty()
        .withMessage("Full Name is Required")
        .isLength({ min: 3, max: 3 })
        .withMessage("Full name must be between 3 and 50 character"),
  
    check('username')
        .notEmpty().withMessage("Username is required")
        .isLength({ min: 5, max: 50 }).withMessage("Username has invalid length"),
    
    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage("Password is too short"),



  (req: Request, res: Response, next: NextFunction) => {
    const results = validationResult(req);

    results.isEmpty() ? next() : res.status(422).send((results as any).errors);
  },
];

export default validateUser;
