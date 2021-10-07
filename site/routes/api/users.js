const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/userController");

router
    .get("/emails",controller.listEmails)

module.exports = router;