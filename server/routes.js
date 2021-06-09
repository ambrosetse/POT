const express = require("express");
const userMgr = require("./manager/UserManager")
const router = express.Router()

router.get("/users", async (req, res) => {
    userMgr.getAllUsers(res);
})

router.get("/user", async (req, res) => {
    userMgr.createUser(res, req.param("login"), req.param("password"), req.param("name"));
})

module.exports = router
