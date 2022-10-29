const register = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const signup = require("./signup");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = ("./resendVerify.js");

module.exports = {
    register,
    login,
    getCurrent,
    signup,
    updateAvatar,
    verify,
    resendVerify,
};