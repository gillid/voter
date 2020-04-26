import React from 'react';
import { COLOR, MEDIA } from '@v/constants';

export const Header = () => (
  <header css={styles.header}>
    <span css={styles.logo}>✔oter</span>
  </header>
);

const styles = {
  header: {
    textAlign: 'center',
    padding: 20,
    [MEDIA.md]: {
      padding: 30,
    },
  },
  logo: {
    fontSize: 40,
    lineHeight: 1,
    fontWeight: 'bold',
    color: COLOR.bg,
    textShadow: `0 0 2px ${COLOR.primary}, 0 0 6px ${COLOR.primary}, 0 0 8px ${COLOR.primary}`,
    [MEDIA.md]: {
      fontSize: 60,
    },
  },
};
