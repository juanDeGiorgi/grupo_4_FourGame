const express = require("express");
const router = express.Router();

const usersCheck = require("../../middlewares/usersCheck");

const controller = require("../../controllers/api/cartController");

router

    .post("/createOrder",controller.createOrder)

module.exports = router;

