import fs from 'fs';

const pathToJsonFile = 'src/api/city/city.json';
export const fetchSampleData = () => {
  const rawdata = fs.readFileSync(pathToJsonFile);
  const cities = JSON.parse(rawdata);
  return cities;
};
