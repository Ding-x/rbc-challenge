/* eslint-disable no-unused-vars */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jsend from 'jsend';
import { logger } from './helpers';
import config from './config';
import { errorHandler, rateLimiterUsingThirdParty } from './middlewares';
import { weatherRouter } from './api/weather';
import { cityRouter } from './api/city';

// Essential globals
const app = express();

//  Initialize global application middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(
  express.json({
    type: 'application/json'
  })
);
app.use(jsend.middleware);
app.use(rateLimiterUsingThirdParty);

// Initialize API routing
app.use('/weather', weatherRouter);
app.use('/city', cityRouter);

app.listen(config.APP.PORT, () => {
  logger.info(`Starting Watchtower on  port ${config.APP.PORT}`);
});

// // Initialize Global Error Handlers
app.use(errorHandler);
process.on('unhandledRejection', (reason, promise) => {
  throw reason;
});

process.on('uncaughtException', error => {
  logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
  // process.exit(1);
});

process.on('SIGINT', () => {
  logger.info(' Alright! Bye bye!');
  process.exit();
});
