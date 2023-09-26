const {
  createProductService,
  getProductList,
} = require("../services/product.service");
const httpStatus = require("http-status");
exports.createProduct = async (req, res) => {
  try {
    await createProductService(req, res);
  } catch (error) {
    res.status(httpStatus.GATEWAY_TIMEOUT).send(error.message);
  }
};

exports.productList = async (req, res) => {
  try {
    await getProductList(req, res);
  } catch (error) {
    res.status(httpStatus.GATEWAY_TIMEOUT).send(error.message);
  }
};
