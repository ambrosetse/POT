const User = require("../models/User")
const CryptoJS = require("crypto-js");

const passphrase = "123qwe";

module.exports = {
    encryptPwd: (sInPwd) => {
        return CryptoJS.HmacSHA512(sInPwd, passphrase).toString();
    },
    getAllUsers: async (res) => {
        const users = await User.find();
        res.send(users);
    },
    login: async (res, sLogin, sPassword) => {
        objRet = {"result":false,"message":"Null object","data":""};
        const users = await User.find({"login":sLogin});
        objRet.message = "User not exists";
        if (users.length == 1) {
            if (module.exports.encryptPwd(sPassword) == users[0].password) {
                objRet.message = "Login success";
                objRet.result = true;
                objRet.data = users[0];
            }
        }
        res.send(JSON.stringify(objRet));
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
