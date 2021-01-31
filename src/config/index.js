const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../../.env') });
module.exports = {
  appName: process.env.APP_NAME,
  endpoint: process.env.API_URL,
  secretKey: process.env.JWT_SECRET,
  tokenExpiration: process.env.JWT_EXPIRATION,
  port: process.env.APP_PORT,
  env: process.env.NODE_ENV,
  frontendUrl: process.env.FRONTEND_URL,
  mongoParams: {
    url: process.env.MONGO_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: 10,
  },
  email: {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  },
};
