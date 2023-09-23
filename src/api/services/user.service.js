const User = require("../models/user.model");
const httpStatus = require("http-status");
exports.createUserService = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await User.create({
      name,
      email,
      password,
    });
    res.status(httpStatus.CREATED).send(result.transform());
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
