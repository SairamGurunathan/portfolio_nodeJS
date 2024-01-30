const httpStatus = require("http-status");
const catchAsync = require("../../../utils/catchAsync");
const userService = require("./user.service");

const addUserDetails = catchAsync(async (req, res) => {
  const response = await userService.addUserDetails(req, res);
  res.status(httpStatus.OK).send({ response });
});


module.exports = {
  addUserDetails
};
