const nodemailer = require('nodemailer');
require('dotenv').config();
const EmailToken = process.env.EmailAccessToken
const HostEmail = process.env.HostEmail
const sendWelcomeEmail = async (newUserEmail, newUserName) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: HostEmail,
      pass: EmailToken,
    },
  });

  const info = await transporter.sendMail({
    from: HostEmail,
    to: newUserEmail,
    subject: 'Thanks for visiting portfolio',
    html: `<p>Hi ${newUserName}, Thanks for visiting. We will contact you shortly.</p>`,
  });

  console.log('Email sent: ' + info.response);
};

const sendAdminEmail = async ({ name, email, mobile, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: HostEmail,
      pass: EmailToken,
    },
  });

  const info = await transporter.sendMail({
    to: HostEmail,
    subject: 'New user registration',
    html: `<p>Hi Sairam, </p>
      <p> Name: ${name},</p>
      <p>  Email: ${email},</p>
      <p> Mobile Number: ${mobile},</p>
      <p> Message: ${message}</p>`,
  });

  console.log(info, "info");
};

const addUserDetails = async (req) => {
  try {
    if (req && req.body) {
      const { name, email, mobile, message } = req.body;

      await sendWelcomeEmail(email, name);
      await sendAdminEmail({ name, email, mobile, message });

      return {
        status: 'success',
        message: 'Thanks for visiting',
        data: { name, email, mobile, message },
      };
    }
  } catch (e) {
    console.error('Error in addUserDetails:', e.message);
    throw e;
  }
};


module.exports = {
  addUserDetails,
};
