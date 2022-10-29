const { User } = require("../../models/user");
const { RequestError, createVerifyEmail, sendEmail } = require("../../helpers");

const resendVerify = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    throw RequestError(400, "Missing required field email")
    }
     if (user.verificationToken === null) {
        res.status(400).json({
            message: "Verification has already been passed"
        })
        return
    }
    const mail= createVerifyEmail(email, user.verificationToken);
    await sendEmail(mail);
    res.json({
        message:"Verify email resend"
    })
};

module.exports = resendVerify;
