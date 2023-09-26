const {
  createVarient,
  getVarientList,
} = require("../services/varient.service");
const httpStatus = require("http-status");
exports.createVarient = async (req, res) => {
  try {
    await createVarient(req, res);
  } catch (error) {
    res.status(httpStatus.GATEWAY_TIMEOUT).send(error.message);
  }
};

exports.varientList = async (req, res) => {
  try {
    await getVarientList(req, res);
  } catch (error) {
    res.status(httpStatus.GATEWAY_TIMEOUT).send(error.message);
  }
};
