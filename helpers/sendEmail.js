const sgMail = require("@sendgrid/mail");

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
    const mail = { ...data, from: "dmitrijparfen2022@gmail.com" };
    await sgMail.send(mail);
    return true;
};

module.exports = sendEmail;