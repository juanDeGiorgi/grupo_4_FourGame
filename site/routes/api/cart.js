const express = require("express");
const router = express.Router();

const usersCheck = require("../../middlewares/usersCheck");

const controller = require("../../controllers/api/cartController");

router

    .get("/show",controller.show)
    .post("/createOrder",controller.createOrder)
    .get("/empty",controller.deleteOrder)

module.exports = router;

