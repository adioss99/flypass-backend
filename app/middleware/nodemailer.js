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
    console.log(name, email)
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
    const bookingData = req.bookingData.booking
    const {
      contactTitle, contactFirstName, contactLastName, contactEmail,
    } = req.body
    const context = {
      name: `${contactTitle}. ${contactFirstName} ${contactLastName}`,
    }
    // const info = await transporter.sendMail({
    //   from: `"Flypass" <${MAILER_ACCOUNT}`, // sender address
    //   to: `${contactEmail}`, // list of receivers
    //   subject: 'Hello ✔', // Subject line
    //   text: 'Hello world?', // plain text body
    //   html: `<b>Yooooo {name}</b>${context}`,
    // });
    // console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  sendBookingInfo,
  sendEmailVerification,
}
