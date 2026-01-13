import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "Gmail",
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});