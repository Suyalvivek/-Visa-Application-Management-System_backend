import Application from '../models/Application.js';
import { createApplication, getApplicationById } from '../services/applicationService.js';

export const submitApplication = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const application = await createApplication({ ...req.body, userId });

    res.status(201).json({
      status: 'success',
      data: { application }
    });
  } catch (error) {
    next(error);
  }
};

export const getApplicationStatus = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const application = await getApplicationById(req.params.applicationId, userId);

    if (!application) {
      return res.status(404).json({
        status: 'error',
        message: 'Application not found'
      });
    }

    res.json({
      status: 'success',
      data: { application }
    });
  } catch (error) {
    next(error);
  }
};