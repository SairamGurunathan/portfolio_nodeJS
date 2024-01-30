const express = require("express");
const router = express.Router();
const userDetails = require("./v1/user/user.route");
const defaultRoutes = [
  {
    path: "/user",
    route: userDetails,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
