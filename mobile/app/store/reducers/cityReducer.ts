import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ICityState } from 'app/models/reducers/city';
import { ICityResponseState } from 'app/models/actions/city';

const initialState: ICityState = {
  cities: null,
  isLoading: false,
  failed: false,
  errorMessage: ''
};

export const cityReducer = createReducer(initialState, {
  [types.GET_CITIES_REQUEST](state: ICityState) {
    return {
      ...state,
      isLoading: true
    };
  },
  [types.GET_CITIES_RESPONSE](state: ICityState, action: ICityResponseState) {
    return {
      ...state,
      cities: action.response.cities,
      isLoading: false,
      failed: false,
      errorMessage: ''
    };
  },
  [types.GET_CITIES_FAIL](state: ICityState, action: ICityResponseState) {
    return {
      ...state,
      isLoading: false,
      failed: true,
      errorMessage: action.response.errorMessage
    };
  }
});
