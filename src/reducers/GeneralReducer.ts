// GeneralReducer.ts

import {GeneralAction} from '../actions';

interface GeneralState {
  isAppLoading: boolean;
  token: string;
  isFirstTimeUse: boolean;
  userData: Record<string, any>;
}

const initialState: GeneralState = {
  isAppLoading: true,
  token: '',
  isFirstTimeUse: true,
  userData: {},
};

export default (
  state = initialState,
  action:
    | ReturnType<typeof GeneralAction.setAppLoading>
    | ReturnType<typeof GeneralAction.setToken>
    | ReturnType<typeof GeneralAction.setFirstTimeUse>
    | ReturnType<typeof GeneralAction.setUserData>,
) => {
  switch (action.type) {
    case GeneralAction.types.SET_IS_APP_LOADING:
      return {...state, isAppLoading: action.payload};
    case GeneralAction.types.SET_TOKEN:
      return {...state, token: action.payload};
    case GeneralAction.types.SET_FIRST_TIME_USE:
      return {...state, isFirstTimeUse: action.payload};
    case GeneralAction.types.SET_USER_DATA:
      return {...state, userData: action.payload};
    default:
      return state;
  }
};
