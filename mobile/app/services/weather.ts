import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function getWeather(location: string) {
  return apiClient.get(ApiConfig.WEATHER, {
    params: {
      q: location
    }
  });
}
