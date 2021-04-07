import { fetchSampleData } from './city';

export const getCities = (req, res, next) => {
  try {
    const cities = fetchSampleData();
    res.jsend.success(cities);
  } catch (error) {
    next(error);
  }
};
