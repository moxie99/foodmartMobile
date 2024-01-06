import {
  createStore,
  applyMiddleware,
  Store as ReduxStore,
  AnyAction,
} from 'redux';
import Reducers, {RootState} from './reducers';
import thunk, {ThunkDispatch} from 'redux-thunk';

// Define the store type
type Store = ReduxStore<RootState, AnyAction> & {
  dispatch: ThunkDispatch<RootState, any, AnyAction>;
};

const store: Store = createStore(Reducers, applyMiddleware(thunk));

const getToken = (): string | undefined =>
  store?.getState()?.generalState?.token;

export {store, getToken};
