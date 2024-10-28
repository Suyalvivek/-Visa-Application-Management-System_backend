import Application from '../models/Application.js';
import { updateApplicationStatus } from '../services/applicationService.js';

export const getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find()
      .populate('userId', 'name email')
      .sort('-createdAt');

    res.json({
      status: 'success',
      data: { applications }
    });
  } catch (error) {
    next(error);
  }
};

export const updateStatus = async (req, res, next) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    const application = await updateApplicationStatus(applicationId, status);

    res.json({
      status: 'success',
      data: { application }
    });
  } catch (error) {
    next(error);
  }
};