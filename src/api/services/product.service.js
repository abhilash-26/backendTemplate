const Product = require("../models/product.model");
const httpStatus = require("http-status");
exports.createProductService = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const result = await Product.create({
      name,
      description,
      image,
      price,
    });
    res.status(httpStatus.CREATED).send(result.transform());
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.getProductList = async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
