const express = require("express");
const router = express.Router();

const usersCheck = require("../../middlewares/usersCheck");

const controller = require("../../controllers/api/userController");

router
    .get("/emails",controller.listEmails)

    .put("/pass/:id",usersCheck,controller.changePass)

    .get("/logout",controller.logout)

    .post("/createfav",usersCheck,controller.createFav)

module.exports = router;