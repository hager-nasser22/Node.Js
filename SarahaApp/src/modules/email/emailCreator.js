import nodemailer from 'nodemailer';
import emailTemplate from './emailTemplate.js';
const sendEmail =async (data) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.APP_PASSWORD
        }
    });
    const info = await transporter.sendMail({
        from: `"Nasser Ahmed" <${process.env.EMAIL_SENDER}>`,
        to: `${data.email}`,
        subject: "Hello ✔",
        text: "Hello world?", 
        html: emailTemplate(data.url),
    });

    console.log("Message sent:", info.messageId);
};
export default sendEmail;