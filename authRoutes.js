import express from 'express';
import { register, login } from '../controllers/authController.js';
import { registerValidator } from '../middleware/validator.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/register', registerValidator, register);
router.post('/login', loginLimiter, login);

export default router;