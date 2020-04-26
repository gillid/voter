import { USER_SET } from './types';

export const setUser = (name) => {
  // TODO: create unique id
  return {
    type: USER_SET,
    payload: {
      name,
    },
  };
};
