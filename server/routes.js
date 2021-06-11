const express = require("express");
const userMgr = require("./manager/UserManager")
const router = express.Router()

router.get("/users", async (req, res) => {
    userMgr.getAllUsers(res);
})

router.get("/user", async (req, res) => {
    userMgr.createUser(res, req.param("login"), req.param("password"), req.param("name"));
})

router.post("/user", async (req, res) => {
    userMgr.createUser(res, req.body.login, req.body.password, req.body.name);
})

router.post("/login", async (req, res) => {
    userMgr.login(res, req.body.login, req.body.password);
})

module.exports = router
