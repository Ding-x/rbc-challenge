import rateLimit from 'express-rate-limit';

const WINDOW_SIZE_IN_HOURS = 24;
const MAX_WINDOW_REQUEST_COUNT = 2000;

export const rateLimiterUsingThirdParty = rateLimit({
  windowMs: WINDOW_SIZE_IN_HOURS * 60 * 60 * 1000, // 24 hrs in millseconds
  max: MAX_WINDOW_REQUEST_COUNT,
  message: `You have exceeded the ${MAX_WINDOW_REQUEST_COUNT} requests in ${WINDOW_SIZE_IN_HOURS} hrs limit!`,
  headers: true
});
