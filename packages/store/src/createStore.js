import { createStore as createReduxStore } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from './rootReducer';

export const createStore = () => {
  const store = createReduxStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
