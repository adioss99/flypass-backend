/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const {
  MAILER_HOST,
  MAILER_PORT,
  MAILER_ACCOUNT,
  MAILER_PASSWORD,
} = process.env

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: MAILER_HOST,
  port: MAILER_PORT,
  secure: true,
  auth: {
    user: MAILER_ACCOUNT,
    pass: MAILER_PASSWORD,
  },
})

const ejsHtml = (filename, data) => ejs.renderFile(`${__dirname}/mailer-templates/${filename}.ejs`, data)

const mailOptions = ((toEmail, subject, html) => ({
  from: `"Flypass" <${MAILER_ACCOUNT}`,
  to: toEmail,
  subject,
  html,
}))

const sendEmailVerification = async (req, res) => {
  try {
    const { name, email } = req.payload.user
    const { token } = req.payload.emailConfirmation
    const data = {
      name,
      token,
    }
    const html = await ejsHtml('emailConfirmation', data)
    const subject = 'Welcome to FlyPass! Please Verify Your Account'
    await transporter.sendMail(mailOptions(email, subject, html))
  } catch (error) { /* empty */ }
}

const sendBookingInfo = async (req, res) => {
  try {
    const { flight1, flight2 } = req.payload
    const {
      title, firstName, lastName, email,
    } = req.payload.PassengerContact
    const data = {
      name: `${title}. ${firstName} ${lastName}`,
      flight1,
    }
    if (flight2) {
      data.flight2 = flight2
    } else {
      data.flight2 = 'undefined'
    }
    const html = await ejsHtml('bookingSend', data)
    const subject = 'Your Booking Details!'
    const info = await transporter.sendMail(mailOptions(email, subject, html))
  } catch (error) { /* empty */ }
}

const sendResetPassword = async (req, res) => {
  try {
    const { userEmail, token } = req.payload;
    const data = {
      userEmail,
      token,
    };
    const html = await ejsHtml('resetPassword', data);
    const subject = 'Reset password';
    await transporter.sendMail(mailOptions(userEmail, subject, html));
  } catch (error) {
    /* empty */
  }
}

const sendResetPIN = async (req, res) => {
  try {
    const { email, token } = req.payload;
    const data = {
      email,
      token,
    };
    const html = await ejsHtml('resetPIN', data);
    const subject = 'Reset PIN';
    await transporter.sendMail(mailOptions(email, subject, html));
  } catch (error) {
    /* empty */
  }
}

module.exports = {
  sendBookingInfo,
  sendEmailVerification,
  sendResetPassword,
  sendResetPIN,
};
