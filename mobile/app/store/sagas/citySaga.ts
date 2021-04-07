import { put, call } from 'redux-saga/effects';
import * as cityActions from 'app/store/actions/cityActions';
import getCities from 'app/services/city';

export function* getCitiesAsync() {
  try {
    const response = yield call(getCities);
    if (response.status === 200) {
      yield put(
        cityActions.onGetCitiesResponse({
          cities: response.data.data
        })
      );
    }
  } catch (e) {
    yield put(
      cityActions.onGetCitiesFail({
        errorMessage: e
      })
    );
  }
}
