const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email route
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aakarshvermaav05@gmail.com",
      pass: "hocu pqvt rnrl oath", // App Password, not your Gmail password
    },
  });

  const mailOptions = {
    from: email,
    to: "aakarshvermaav05@gmail.com",
    subject: "New Contact Form Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending mail:", error);
      res.status(500).send("Failed to send message.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Message sent successfully!");
    }
  });
});

app.listen(5000, () => {
  console.log("Backend server running on http://localhost:5000");
});
