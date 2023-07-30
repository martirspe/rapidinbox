const { response, request } = require('express');
const { createTransport } = require('nodemailer');

const sendMail = async (req = request, res = response) => {
  const data = req.body;

  const config = {
    host: 'mail.alkacorp.com',
    port: 465,
    secure: true,
    auth: {
      user: 'admin@alkacorp.com',
      pass: 'Alka@4510$'
    }
  };

  const message = {
    from: `${data.from}`,
    to: `${data.to}`,
    bcc: `${data.bcc}`,
    subject: `${data.subject}`,
    html: `${data.html}`
  };

  try {
    const transport = createTransport(config);
    const info = await transport.sendMail(message);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }

}
module.exports = sendMail;