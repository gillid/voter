import React from 'react';
import { BREAKPOINTS, MEDIA } from '@/constants';

export const Main = ({ children }) => <main css={styles.page}>{children}</main>;

const styles = {
  page: {
    padding: 20,
    maxWidth: BREAKPOINTS.md,
    margin: '0 auto',
    [MEDIA.md]: {
      padding: 30,
    },
  },
};
