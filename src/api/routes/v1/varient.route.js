const express = require("express");
const router = express.Router();
const controller = require("../../controllers/varient.controller");

router.post("/create", controller.createVarient);

router.get("/list", controller.varientList);

module.exports = router;
