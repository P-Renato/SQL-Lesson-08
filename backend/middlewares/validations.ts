import { check, validationResult } from "express-validator";

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



  (req, res, next) => {
    const results = validationResult(req);

    results.isEmpty() ? next() : res.status(422).send(results.errors);
  },
];

export default validateUser;
