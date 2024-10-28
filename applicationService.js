import Application from '../models/Application.js';
import { sendWelcomeEmail } from './emailService.js';

export const createApplication = async (applicationData) => {
  const application = await Application.create(applicationData);
  return application;
};

export const getApplicationById = async (applicationId, userId) => {
  return await Application.findOne({ _id: applicationId, userId });
};

export const updateApplicationStatus = async (applicationId, status) => {
  const application = await Application.findByIdAndUpdate(
    applicationId,
    { status, updatedAt: Date.now() },
    { new: true }
  );
  
  if (application) {
    // Send email notification about status update
    await sendWelcomeEmail(application);
  }
  
  return application;
};