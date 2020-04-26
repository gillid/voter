import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';
import { createStore } from '@v/store';
import { Header, Main } from '@v/design-system';

export const App = hot(() => (
  <Provider store={createStore()}>
    <Global styles={styles} />
    <Header />
    <Main />
  </Provider>
));

const styles = {
  '*': {
    boxSizing: 'border-box',
  },
};
