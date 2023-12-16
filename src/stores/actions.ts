import { ActionTypes } from './constants';

export type Action = {
  type: ActionTypes;
  payload?: any;
};
