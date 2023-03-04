const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "42d208b3a801ae",
      pass: "005550058319c0"
    }
});

module.exports = transport;