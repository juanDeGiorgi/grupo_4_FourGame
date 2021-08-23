const path = require("path");
const fs = require("fs")
const users = JSON.parse(fs.readFileSync(path.join(__dirname,"users.json"),'utf-8'));

module.exports = users;