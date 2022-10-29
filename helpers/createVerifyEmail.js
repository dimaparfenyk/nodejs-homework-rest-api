const { BASE_URL } = process.env;

const createVerifyEmail = (email,verificationToken) => {
    const mail={
        to: email,
        subject:"Registration is successful",
        html:`<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Press button to complete registration</a>`
    }
    return mail;
}

module.exports = createVerifyEmail;
