const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/userController");

router
    .get("/emails",controller.listEmails)

    .put("/pass/:id",controller.changePass)

    .get("/logout",controller.logout)

    .post("/createfav",controller.createFav)

    .delete("/deletefav",controller.deleteFav)

module.exports = router;