const nodemailer = require('nodemailer');

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

const handleSendBookingInfo = async (req, res) => {
  try {
    const bookingData = req.bookingData.booking
    const {
      contactTitle, contactFirstname, contactLastName, contactEmail,
    } = req.body
    const context = {
      name: `${contactTitle}. ${contactFirstname} ${contactLastName}`,
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

module.exports = { handleSendBookingInfo }
