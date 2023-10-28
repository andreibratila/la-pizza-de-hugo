import nodemailer from "nodemailer";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
}

export const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL as string,
    pass: process.env.EMAIL_PASS as string,
  },
});

export const sendMail = (mailOptions: MailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export const mailOptions = {
  from: process.env.EMAIL as string,
  to: process.env.EMAIL as string,
};
