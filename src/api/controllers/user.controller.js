const { createUserService } = require("../services/user.service");
const httpStatus = require("http-status");
exports.createUser = async (req, res) => {
  try {
    await createUserService(req, res);
  } catch (error) {
    res.status(httpStatus.GATEWAY_TIMEOUT).send(error.message);
  }
};
