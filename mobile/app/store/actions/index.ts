import * as cityActions from './cityActions';
import * as weatherActions from './weatherActions';

export const ActionCreators = {
  ...cityActions,
  ...weatherActions
};
