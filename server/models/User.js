const mongo = require("mongoose")

const schema = mongo.Schema({
    login: String,
    name: String,
    password: String,
    right: String,
    lastmodified: Date,
    created: Date,
});
module.exports = mongo.model("User", schema)
