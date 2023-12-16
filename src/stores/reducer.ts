import { State } from './state';
import { Action } from './actions';
import { ActionTypes } from './constants';

export const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...prevState,
        isSignout: action.payload,
        isLoading: false,
      };
    case ActionTypes.SIGN_IN:
      return {
        ...prevState,
        isSignout: false,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
      };
    default:
      return prevState;
  }
};
