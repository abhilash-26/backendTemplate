const Product = require("../models/varient.model");
const httpStatus = require("http-status");
exports.createVarient = async (req, res) => {
  try {
    const { color, image, productId } = req.body;
    const result = await Product.create({
      color,
      image,
      productId,
    });
    res.status(httpStatus.CREATED).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.getVarientList = async (req, res) => {
  try {
    const { productId } = req.query;
    const result = await Product.find({ productId });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
