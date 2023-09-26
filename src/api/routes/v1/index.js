const express = require("express");
const router = express.Router();
const productRoute = require("./product.route");
const varientRoute = require("./varient.route");

router.use("/status", (req, res) => {
  res.send("Ok!");
});

router.use("/product", productRoute);

router.use("/varient", varientRoute);

module.exports = router;
