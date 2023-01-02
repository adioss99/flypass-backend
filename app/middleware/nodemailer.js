const nodemailer = require('nodemailer');
const ejs = require('ejs')

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
    const info = await transporter.sendMail(mailOptions(email, subject, html))
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log(error)
  }
}

const sendBookingInfo = async (req, res) => {
  try {
    const { flight1, flight2 } = req.payload
    if (!flight2) {
      console.log('true!')
    } else {
      console.log('false!')
    }
    console.log(flight1.flightCode)
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
    console.log(html)
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  sendBookingInfo,
  sendEmailVerification,
}
