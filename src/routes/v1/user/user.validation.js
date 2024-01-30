const Joi = require("joi");

const addUserDetails = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().required(),
    message: Joi.string().allow("",null), 
  }),
};


module.exports = {
  addUserDetails,
};
