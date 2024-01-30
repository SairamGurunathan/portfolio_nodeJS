const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");

const routes = require("./routes");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");

const app = express();

app.use(cors());

app.options("*", cors()); 

app.use(helmet()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(routes);
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
