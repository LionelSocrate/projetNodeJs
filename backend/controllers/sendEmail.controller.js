// controllers/emailController.js
const nodemailer = require("nodemailer");

module.exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "votre_email@gmail.com",
      pass: "votre_mot_de_passe",
    },
  });

  const mailOptions = {
    from: "votre_email@gmail.com",
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email envoyé avec succès", info });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
