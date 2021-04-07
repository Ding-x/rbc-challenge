import { Router } from 'express';
import { getCities } from './city.controller';

const cityRouter = new Router();

cityRouter.get('/', getCities);

export default cityRouter;
