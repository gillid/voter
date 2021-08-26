import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from '@/store';
import { RootRouter } from '@/router';
import { Header, Main } from '@/design-system';

const { store, persistor } = createStore();

const Loading = () => <Header />;

export const App = hot(() => (
  <React.Fragment>
    <Global styles={styles} />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <Header />
        <Main>
          <RootRouter />
        </Main>
      </PersistGate>
    </Provider>
  </React.Fragment>
));

const styles = {
  '*': {
    boxSizing: 'border-box',
  },
};
