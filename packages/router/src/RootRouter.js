import React from 'react';
import { useUser } from '@v/store';
import { PageLogin } from '@v/components';

export const RootRouter = () => {
  const { isAuthorized } = useUser();

  return isAuthorized ? <PageLogin /> : <PageLogin />;
};
