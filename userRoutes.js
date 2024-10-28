import express from 'express';
import { submitApplication, getApplicationStatus } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateToken);
router.post('/applications', submitApplication);
router.get('/applications/:applicationId', getApplicationStatus);

export default router;
