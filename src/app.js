const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const app = express();
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const config = require('./config/init');
const routes = require('./api/routes/v1');
const { errorConverter, errorHandler } = require('./api/middlewares/error');
const ApiError = require('./utils/ApiError');

// set security for HTTP headers
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(config.cors);

// registering routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
