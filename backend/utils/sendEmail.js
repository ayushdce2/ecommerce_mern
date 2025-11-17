const nodemailer = require("nodemailer");

const sendEmail = async({email,subject,message})=>{
    const transporter = nodemailer.createTransport({
        service:process.env.SMTP_SERVICE,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.SMTP_PASSWORD
        }
    });

    const mailoptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: message
    }

    await transporter.sendMail(mailoptions)
}

module.exports = {sendEmail}