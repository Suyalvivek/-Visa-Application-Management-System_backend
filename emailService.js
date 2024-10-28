import nodemailer from 'nodemailer';
import logger from '../config/logger.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendWelcomeEmail = async (email, name) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Welcome to Study Abroad Portal',
      html: `<h1>Welcome ${name}!</h1>
            <p>Thank you for registering with our study abroad portal.</p>`
    });
  } catch (error) {
    logger.error('Email sending failed:', error);
    throw error;
  }
};