import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { USER_SET } from './types';

const initialState = {
  id: null,
  name: null,
};

export const reducer = (state = initialState, action) => {
  if (action.type === USER_SET) {
    return action.payload;
  }

  return state;
};

export default persistReducer(
  {
    key: 'user',
    storage,
  },
  reducer,
);
