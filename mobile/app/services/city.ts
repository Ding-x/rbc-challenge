import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function getCities() {
  return apiClient.get(ApiConfig.CITY);
}
