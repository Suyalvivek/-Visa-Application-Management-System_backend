import express from 'express';
import { getAllApplications, updateStatus } from '../controllers/adminController.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateToken, isAdmin);
router.get('/applications', getAllApplications);
router.patch('/applications/:applicationId/status', updateStatus);

export default router;