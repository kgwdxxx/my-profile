const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure your SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: "nylen252@gmail.com",
    subject: "New Contact Form Inquiry",
    // eslint-disable-next-line max-len
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully");
  });
});
