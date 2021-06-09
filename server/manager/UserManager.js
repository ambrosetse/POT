const User = require("../models/User")
const CryptoJS = require("crypto-js");

const passphrase = "123qwe";

module.exports = {
    encryptPwd: (sInPwd) => {
        return CryptoJS.AES.encrypt(sInPwd, passphrase).toString();
    },
    getAllUsers: async (res) => {
        const users = await User.find();
        res.send(users);
    },
    createUser: async (res, sLogin, sPassword, sName) => {
        const user = new User({
            login: sLogin,
            password: module.exports.encryptPwd(sPassword),
            name: sName,
        });
        await user.save();
        res.send(user);
    }
}
