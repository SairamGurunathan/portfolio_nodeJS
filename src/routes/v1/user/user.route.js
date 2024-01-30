const express = require("express");
const validate = require("../../../middlewares/validate.js");
const userValidate = require("./user.validation");
const userController = require("./user.controller");

const router = express.Router();

router.post(
  "/visitor",
  validate(userValidate.addUserDetails),
  userController.addUserDetails
);

module.exports = router;
