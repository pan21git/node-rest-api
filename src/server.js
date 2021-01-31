const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { port, mongoParams } = require('./config');
const logger = require('./config/logger');

mongoose.connect(mongoParams.url, mongoParams.options).then(() => {
  logger.info('Connected to MongoDB');
});
mongoose.Promise = global.Promise;

const server = http.createServer(app);

server.listen(port);
console.log(`Server running on http://localhost:${port}`);
