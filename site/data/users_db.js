const path = require("path");
const fs = require("fs")
const users = JSON.parse(fs.readFileSync(path.join(__dirname,"usersDataBase.json"),'utf-8'));

module.exports = users;