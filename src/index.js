const nodemailer = require("nodemailer");

// Roche Setting
let rocheSetting = {
  host: "localhost",
  port: 25,
  secure: false,
};

let transporter = nodemailer.createTransport(rocheSetting);

// Roche Message
let rocheMessage = {
  from: "Taiwan.CIT@roche.com",
  to: "toby@wenk-media.com,jack.wang@roche.com",
  subject: "AWS SES SMTP Test",
  text: "AWS SES SMTP Test Text",
};

transporter.sendMail(rocheMessage, (err, info) => {
  if (err) console.log("err", err);
  else console.log("info", info);
});
