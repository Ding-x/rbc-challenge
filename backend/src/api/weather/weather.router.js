import { Router } from 'express';
import { getWeather } from './weather.controller';

const weatherRouter = new Router();

weatherRouter.get('/', getWeather);

export default weatherRouter;
