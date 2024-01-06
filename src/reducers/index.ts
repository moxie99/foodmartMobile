import {combineReducers} from 'redux';
import GeneralReducer from './GeneralReducer';
import CartReducer from './CartReducer';
import BookmarkReducer from './BookmarkReducer';

// Define RootState type
export type RootState = {
  generalState: ReturnType<typeof GeneralReducer>;
  cartState: ReturnType<typeof CartReducer>;
  bookmarkState: ReturnType<typeof BookmarkReducer>;
};

// Combine reducers
const Reducers = combineReducers({
  generalState: GeneralReducer,
  cartState: CartReducer,
  bookmarkState: BookmarkReducer,
});

export default Reducers;
