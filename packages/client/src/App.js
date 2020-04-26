import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Global } from '@emotion/core';
import { Header, Main } from '@v/design-system';

export const App = hot(() => (
  <React.Fragment>
    <Global styles={styles} />
    <Header />
    <Main />
  </React.Fragment>
));

const styles = {
  '*': {
    boxSizing: 'border-box',
  },
};
