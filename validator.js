import { body } from 'express-validator';

export const registerValidator = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('mobileNumber')
    .matches(/^[0-9]{10}$/)
    .withMessage('Invalid mobile number'),
  body('cgpa')
    .isFloat({ min: 0, max: 10 })
    .withMessage('CGPA must be between 0 and 10'),
  body('workExperience')
    .isInt({ min: 0 })
    .withMessage('Work experience must be a positive number')
];